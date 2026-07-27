import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to `target` when the element scrolls into view.
 * Uses requestAnimationFrame with an ease-out curve for a premium feel.
 */
export function useCountUp(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // easeOutQuart
              const eased = 1 - Math.pow(1 - progress, 4);
              setValue(target * eased);
              if (progress < 1) {
                requestAnimationFrame(tick);
              } else {
                setValue(target);
              }
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}
