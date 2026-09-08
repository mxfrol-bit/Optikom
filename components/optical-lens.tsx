'use client';

/* oxlint-disable next/no-img-element -- The original local artwork is preserved as a poster and an accessible image view. */
/* oxlint-disable jsx-a11y/prefer-tag-over-role -- A WebGL surface needs image semantics; an img element cannot contain its canvas. */

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play, RotateCcw } from 'lucide-react';
import type { OpticalLensController } from '@/lib/optical-lens-scene';

export function OpticalLens() {
  const surface = useRef<HTMLDivElement>(null);
  const engine = useRef<OpticalLensController | null>(null);
  const settings = useRef({ paused: false, mode: '3d', visible: false });
  const [status, setStatus] = useState<'loading' | 'ready' | 'unavailable'>(
    'loading',
  );
  const [mode, setMode] = useState('3d');
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const host = surface.current;
    if (!host) return;
    let cancelled = false;
    let started = false;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const motionChanged = () => {
      settings.current.paused = preference.matches;
      setPaused(preference.matches);
      engine.current?.setPaused(preference.matches);
    };
    motionChanged();
    preference.addEventListener('change', motionChanged);
    const visibility = new IntersectionObserver(([entry]) => {
      settings.current.visible = entry.isIntersecting;
      engine.current?.setVisible(
        entry.isIntersecting && settings.current.mode === '3d',
      );
    });
    visibility.observe(host);
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        try {
          const { createOpticalLensScene } =
            await import('@/lib/optical-lens-scene');
          if (cancelled) return;
          engine.current = createOpticalLensScene(host, {
            paused: settings.current.paused,
            onInteraction: () => setPaused(true),
            onUnavailable: () => {
              if (!cancelled) setStatus('unavailable');
            },
          });
          engine.current.setVisible(
            settings.current.visible && settings.current.mode === '3d',
          );
          setStatus('ready');
        } catch {
          if (!cancelled) setStatus('unavailable');
        }
      },
      { rootMargin: '180px 0px' },
    );
    observer.observe(host);
    return () => {
      cancelled = true;
      observer.disconnect();
      visibility.disconnect();
      preference.removeEventListener('change', motionChanged);
      engine.current?.dispose();
      engine.current = null;
    };
  }, []);

  useEffect(() => {
    settings.current.paused = paused;
    settings.current.mode = mode;
    engine.current?.setPaused(paused);
    engine.current?.setVisible(settings.current.visible && mode === '3d');
  }, [paused, mode]);

  const showing3d = status === 'ready' && mode === '3d';

  return (
    <div className="optical-lens" data-view={showing3d ? '3d' : 'image'}>
      <div className="optical-story-picture">
        <img
          className="optical-lens-poster"
          src="/assets/optics/optical-night.webp"
          alt="Художественный макрорендер прозрачной интраокулярной линзы в бирюзовом и янтарном свете"
          width="1536"
          height="1024"
          loading="lazy"
          decoding="async"
          aria-hidden={showing3d}
        />
        <div
          ref={surface}
          className="optical-lens-canvas"
          role="img"
          aria-label="Объёмная прозрачная линза с изогнутыми опорами. Для поворота используйте кнопки под изображением."
          aria-hidden={!showing3d}
        />
        {showing3d && (
          <span className="optical-lens-hint">Потяните, чтобы повернуть</span>
        )}
      </div>
      <div className="optical-lens-controls">
        {status === 'ready' ? (
          <>
            <fieldset className="optical-lens-views" aria-label="Вид линзы">
              <button
                type="button"
                aria-pressed={mode === '3d'}
                onClick={() => setMode('3d')}
              >
                3D
              </button>
              <button
                type="button"
                aria-pressed={mode === 'image'}
                onClick={() => setMode('image')}
              >
                Изображение
              </button>
            </fieldset>
            <fieldset
              className="optical-lens-actions"
              aria-label="Управление линзой"
              hidden={!showing3d}
            >
              <button
                type="button"
                aria-label="Повернуть линзу влево"
                title="Повернуть влево"
                onClick={() => engine.current?.rotate(-1)}
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                aria-label={
                  paused
                    ? 'Включить вращение линзы'
                    : 'Приостановить вращение линзы'
                }
                title={paused ? 'Включить вращение' : 'Пауза'}
                onClick={() => setPaused((value) => !value)}
              >
                {paused ? <Play size={15} /> : <Pause size={15} />}
              </button>
              <button
                type="button"
                aria-label="Повернуть линзу вправо"
                title="Повернуть вправо"
                onClick={() => engine.current?.rotate(1)}
              >
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                aria-label="Вернуть исходный ракурс линзы"
                title="Исходный ракурс"
                onClick={() => engine.current?.reset()}
              >
                <RotateCcw size={15} />
              </button>
            </fieldset>
          </>
        ) : (
          <span className="optical-lens-still-label">Линза крупным планом</span>
        )}
      </div>
    </div>
  );
}
