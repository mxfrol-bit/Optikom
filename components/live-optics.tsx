'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Pause, Play } from 'lucide-react';

export function LiveOptics({ children }: { children: ReactNode }) {
  const stage = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    const preference = matchMedia(
      '(prefers-reduced-motion: reduce), (pointer: coarse)',
    );
    let frame = 0;
    let visible = true;
    let x = 0;
    let y = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      element.style.setProperty('--optical-x', '0');
      element.style.setProperty('--optical-y', '0');
    };
    const move = (event: PointerEvent) => {
      if (paused || preference.matches || !visible) return;
      const rect = element.getBoundingClientRect();
      x = Math.max(
        -1,
        Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1),
      );
      y = Math.max(
        -1,
        Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1),
      );
      if (!frame)
        frame = requestAnimationFrame(() => {
          element.style.setProperty('--optical-x', x.toFixed(3));
          element.style.setProperty('--optical-y', y.toFixed(3));
          frame = 0;
        });
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      element.dataset.visible = String(visible);
      if (!visible) reset();
    });
    observer.observe(element);
    element.addEventListener('pointermove', move, { passive: true });
    element.addEventListener('pointerleave', reset);
    preference.addEventListener('change', reset);
    if (paused) reset();
    return () => {
      observer.disconnect();
      element.removeEventListener('pointermove', move);
      element.removeEventListener('pointerleave', reset);
      preference.removeEventListener('change', reset);
      reset();
    };
  }, [paused]);

  return (
    <div ref={stage} className="optical-stage live-optics" data-paused={paused}>
      <div className="optical-light-field" aria-hidden="true">
        <span className="optical-caustic optical-caustic-cool" />
        <span className="optical-caustic optical-caustic-warm" />
      </div>
      {children}
      <button
        type="button"
        className="optical-motion-toggle"
        onClick={() => setPaused(!paused)}
        aria-label={
          paused ? 'Включить движение линзы' : 'Приостановить движение линзы'
        }
        aria-pressed={paused}
      >
        {paused ? <Play size={13} /> : <Pause size={13} />}
        <span>{paused ? 'Включить движение' : 'Свет в движении'}</span>
      </button>
    </div>
  );
}
