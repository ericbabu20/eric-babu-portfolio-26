"use client";

import { useLayoutEffect, useRef } from "react";

/**
 * Looping card thumbnail. Autoplay is turned off when the visitor has asked
 * for reduced motion; the first frame stays on screen instead.
 */
export function CoverVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    const video = ref.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const showFirstFrame = () => {
      video.pause();
      const paint = () => {
        try {
          video.currentTime = 0;
        } catch {
          /* The first frame is not available yet. */
        }
      };
      if (video.readyState >= 2) paint();
      else video.addEventListener("loadeddata", paint, { once: true });
    };

    const sync = () => {
      if (motion.matches) showFirstFrame();
      else void video.play().catch(() => {});
    };

    sync();
    motion.addEventListener("change", sync);
    return () => motion.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden
      className="h-full w-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
