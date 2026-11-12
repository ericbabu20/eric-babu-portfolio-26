"use client";

import { useLayoutEffect, useRef, useState } from "react";

/**
 * Looping card thumbnail. Safari can block autoplay (Low Power Mode or the
 * site's Auto-Play setting) and then draws a large play button. The poster
 * image stays on top until the video is actually playing, so a still frame
 * shows instead of that button. Reduced motion keeps the poster.
 */
export function CoverVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useLayoutEffect(() => {
    const video = ref.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");

    // Autoplay can start before this effect runs, so read the current state
    // as well as listening for later changes.
    const onPlaying = () => setPlaying(!video.paused && video.readyState >= 2);
    const onStopped = () => setPlaying(false);
    onPlaying();

    const attempt = () => {
      if (motion.matches) {
        video.pause();
        return;
      }
      if (!video.paused) return;
      const result = video.play();
      if (result) result.catch(() => setPlaying(false));
    };

    video.addEventListener("playing", onPlaying);
    video.addEventListener("timeupdate", onPlaying);
    video.addEventListener("pause", onStopped);
    video.addEventListener("loadeddata", attempt);
    video.addEventListener("canplay", attempt);
    motion.addEventListener("change", attempt);
    attempt();

    return () => {
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("timeupdate", onPlaying);
      video.removeEventListener("pause", onStopped);
      video.removeEventListener("loadeddata", attempt);
      video.removeEventListener("canplay", attempt);
      motion.removeEventListener("change", attempt);
    };
  }, [src]);

  return (
    <div className="relative h-full w-full">
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        aria-hidden
        className="cover-video pointer-events-none h-full w-full object-cover"
      />
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          aria-hidden
          className={
            "pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-300 " +
            (playing ? "opacity-0" : "opacity-100")
          }
        />
      )}
    </div>
  );
}
