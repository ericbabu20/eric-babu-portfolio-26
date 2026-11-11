"use client";

import { cn } from "@/lib/utils";
import { PauseIcon, PlayIcon } from "lucide-react";
import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

/** How long each case-study card stays before the next one glides in. */
const AUTOPLAY_MS = 3200;
function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3;
}

/**
 * Horizontal shelf for case studies.
 * Native scrolling with a peek of the next card, and a short glide onto each
 * card so a swipe, drag, or dot press settles the way an Apple scroller does.
 */
export function HorizontalShelf({
  label,
  children,
  itemClassName = "w-[calc(100%-3rem)] shrink-0 snap-start snap-always md:w-[calc(50%-1.25rem)]",
  pageOnWheel = false,
  autoplay = false,
}: {
  label: string;
  children: ReactNode;
  itemClassName?: string;
  /** Mouse-wheel over the row glides to the next card. Used by case studies. */
  pageOnWheel?: boolean;
  /** Glide to the next card on its own, on phone and desktop. */
  autoplay?: boolean;
}) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const [gliding, setGliding] = useState(false);
  const [playing, setPlaying] = useState(autoplay);
  const indexRef = useRef(0);
  const items = Children.toArray(children).filter(isValidElement);
  const frame = useRef<number | null>(null);
  const wheelLock = useRef(false);
  const drag = useRef({
    active: false,
    startX: 0,
    startScroll: 0,
    startIndex: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    moved: false,
  });

  const nearestIndex = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return 0;
    const cards = [...scroller.children] as HTMLElement[];
    let nearest = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;
    cards.forEach((card, cardIndex) => {
      const distance = Math.abs(card.offsetLeft - scroller.scrollLeft);
      if (distance < nearestDistance) {
        nearest = cardIndex;
        nearestDistance = distance;
      }
    });
    return nearest;
  }, []);

  const syncIndex = useCallback(() => {
    const scroller = scrollerRef.current;
    const nearest = nearestIndex();
    indexRef.current = nearest;
    setIndex(nearest);
    if (!scroller) return;
    setCanScroll(scroller.scrollWidth - scroller.clientWidth > 8);
  }, [nearestIndex]);

  const scrollToIndex = useCallback((nextIndex: number, animated: boolean) => {
    const scroller = scrollerRef.current;
    const card = scroller?.children[nextIndex] as HTMLElement | undefined;
    if (!scroller || !card) return;
    const target = card.offsetLeft;
    indexRef.current = nextIndex;
    if (frame.current !== null) cancelAnimationFrame(frame.current);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!animated || reduceMotion) {
      scroller.style.scrollSnapType = "";
      setGliding(false);
      scroller.scrollLeft = target;
      return;
    }

    const start = scroller.scrollLeft;
    const change = target - start;
    if (Math.abs(change) < 1) {
      scroller.style.scrollSnapType = "";
      setGliding(false);
      return;
    }
    const duration = Math.min(520, Math.max(320, Math.abs(change) * 0.55));
    const startedAt = performance.now();
    scroller.style.scrollSnapType = "none";
    setGliding(true);

    const step = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      scroller.scrollLeft = start + change * easeOutCubic(progress);
      if (progress < 1) {
        frame.current = requestAnimationFrame(step);
        return;
      }
      frame.current = null;
      scroller.style.scrollSnapType = "";
      scroller.scrollLeft = target;
      setGliding(false);
    };
    frame.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    syncIndex();
    scroller.addEventListener("scroll", syncIndex, { passive: true });
    window.addEventListener("resize", syncIndex);
    return () => {
      scroller.removeEventListener("scroll", syncIndex);
      window.removeEventListener("resize", syncIndex);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [syncIndex, items.length]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !pageOnWheel) return;
    const onWheel = (event: WheelEvent) => {
      const mostlyHorizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      const delta = mostlyHorizontal ? event.deltaX : event.deltaY;
      if (Math.abs(delta) < 4) return;
      const max = scroller.scrollWidth - scroller.clientWidth;
      const goingNext = delta > 0;
      const atStart = scroller.scrollLeft <= 1;
      const atEnd = scroller.scrollLeft >= max - 1;
      if (!mostlyHorizontal && ((goingNext && atEnd) || (!goingNext && atStart))) return;
      event.preventDefault();
      if (wheelLock.current) return;
      const current = nearestIndex();
      const next = goingNext
        ? Math.min(items.length - 1, current + 1)
        : Math.max(0, current - 1);
      if (next === current) return;
      wheelLock.current = true;
      scrollToIndex(next, true);
      window.setTimeout(() => {
        wheelLock.current = false;
      }, 460);
    };
    scroller.addEventListener("wheel", onWheel, { passive: false });
    return () => scroller.removeEventListener("wheel", onWheel);
  }, [items.length, nearestIndex, pageOnWheel, scrollToIndex]);

  useEffect(() => {
    if (!autoplay || !playing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (drag.current.active || frame.current !== null || document.hidden) return;
      const root = scrollerRef.current?.parentElement;
      const active = document.activeElement;
      const focusedInside =
        root instanceof HTMLElement &&
        active instanceof HTMLElement &&
        root.contains(active) &&
        active.dataset.shelfControl !== "playback";
      if (root?.matches(":hover") || focusedInside) return;
      const count = items.length;
      if (count < 2) return;
      scrollToIndex((indexRef.current + 1) % count, true);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [autoplay, items.length, playing, scrollToIndex]);

  const onKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    scrollToIndex(Math.min(items.length - 1, Math.max(0, nearestIndex() + direction)), true);
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLUListElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    scroller.style.scrollSnapType = "none";
    setGliding(true);
    const now = performance.now();
    drag.current = {
      active: true,
      startX: event.clientX,
      startScroll: scroller.scrollLeft,
      startIndex: nearestIndex(),
      lastX: event.clientX,
      lastTime: now,
      velocity: 0,
      moved: false,
    };
    scroller.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLUListElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller || !drag.current.active) return;
    const now = performance.now();
    const elapsed = now - drag.current.lastTime;
    if (elapsed > 0) {
      drag.current.velocity = (event.clientX - drag.current.lastX) / elapsed;
    }
    drag.current.lastX = event.clientX;
    drag.current.lastTime = now;
    const delta = event.clientX - drag.current.startX;
    if (Math.abs(delta) > 4) drag.current.moved = true;
    scroller.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = (event: ReactPointerEvent<HTMLUListElement>) => {
    const scroller = scrollerRef.current;
    if (!drag.current.active || !scroller) return;
    const { moved, startIndex, velocity } = drag.current;
    const delta = event.clientX - drag.current.startX;
    drag.current.active = false;
    if (scroller.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }
    if (!moved) {
      scroller.style.scrollSnapType = "";
      setGliding(false);
      return;
    }
    const towardNext = velocity < -0.4 || delta < -48;
    const towardPrevious = velocity > 0.4 || delta > 48;
    let next = startIndex;
    if (towardNext && !towardPrevious) next += 1;
    else if (towardPrevious && !towardNext) next -= 1;
    else if (towardNext && towardPrevious) next += velocity < 0 ? 1 : -1;
    scrollToIndex(Math.min(items.length - 1, Math.max(0, next)), true);
  };

  if (items.length === 0) return null;

  return (
    <div className="group flex w-full min-w-0 flex-col gap-4">
      <ul
        ref={scrollerRef}
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={(event) => {
          if (!drag.current.moved) return;
          event.preventDefault();
          event.stopPropagation();
          drag.current.moved = false;
        }}
        className={cn(
          "flex w-full min-w-0 max-w-full gap-4 overflow-x-auto overscroll-x-contain",
          "cursor-grab scroll-px-0 pb-1 active:cursor-grabbing",
          "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
        style={{ scrollSnapType: gliding ? "none" : "x mandatory" }}
      >
        {items.map((item) => (
          <li
            key={item.key}
            className={itemClassName}
          >
            {item}
          </li>
        ))}
      </ul>
      {canScroll && (
        <div className="flex items-center justify-center gap-2 self-center">
          <div
            className="inline-flex items-center gap-1.5 rounded-full bg-[#e8e8ed] px-3 py-2 dark:bg-[#2c2c2e]"
            role="group"
            aria-label={`${label} pages`}
          >
            {items.map((item, itemIndex) => {
              const current = itemIndex === index;
              return (
                <button
                  key={item.key}
                  type="button"
                  aria-label={`Show item ${itemIndex + 1} of ${items.length}`}
                  aria-current={current ? "true" : undefined}
                  onClick={() => scrollToIndex(itemIndex, true)}
                  className={cn(
                    "relative flex h-6 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                    current ? "w-9" : "w-6",
                  )}
                >
                  {current ? (
                    <span className="relative block h-2 w-7 overflow-hidden rounded-full bg-[#1a1a1a]/15 dark:bg-white/20">
                      <span
                        key={`${item.key}-${playing ? "play" : "pause"}`}
                        className={cn(
                          "absolute inset-y-0 left-0 w-full origin-left rounded-full bg-[#1a1a1a] dark:bg-white",
                          playing
                            ? "motion-safe:animate-[shelf-progress_3.2s_linear_forwards] motion-safe:group-hover:[animation-play-state:paused]"
                            : "scale-x-100",
                        )}
                      />
                    </span>
                  ) : (
                    <span className="block size-2 rounded-full bg-[#8e8e93]" />
                  )}
                </button>
              );
            })}
          </div>
          {autoplay && (
            <button
              type="button"
              data-shelf-control="playback"
              aria-pressed={playing}
              aria-label={playing ? "Pause" : "Play"}
              onClick={() => setPlaying((current) => !current)}
              className="flex size-10 items-center justify-center rounded-full bg-[#1c1c1e] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring dark:bg-[#3a3a3c]"
            >
              {playing ? (
                <PauseIcon className="size-4" aria-hidden />
              ) : (
                <PlayIcon className="size-4 fill-current" aria-hidden />
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
