'use client';

/* oxlint-disable next/no-img-element, next/no-html-link-for-pages -- Pre-encoded local artwork and full-document navigation support native view transitions. */

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { OpticalLens } from './optical-lens';

const chapters = [
  {
    label: 'Материал',
    title: 'Всё начинается\nс прозрачности.',
    description:
      'Гидрофобный и гидрофильный акрил. Материалы, из которых создаются интраокулярные линзы Bausch + Lomb.',
    detail: 'Гидрофобный · Гидрофильный',
  },
  {
    label: 'Оптика',
    title: 'Каждая задача —\nсвой фокус.',
    description:
      'Монофокальная, торическая и EDOF-оптика. Разные конструкции для разных задач офтальмологической практики.',
    detail: 'Монофокальная · Торическая · EDOF',
  },
  {
    label: 'Выбор',
    title: 'Точность\nв каждой детали.',
    description:
      'enVista, LuxGood, LuxSmart и Akreos. Изучите материалы, дизайн и характеристики семи моделей в одном каталоге.',
    detail: '7 моделей Bausch + Lomb',
  },
];

export function OpticalStory() {
  const section = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const element = section.current;
    if (!element) return;
    const preference = matchMedia(
      '(min-width: 901px) and (prefers-reduced-motion: no-preference)',
    );
    let frame = 0;
    let visible = false;
    const update = () => {
      frame = 0;
      if (!visible || !preference.matches) return;
      const rect = element.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(
          1,
          (innerHeight * 0.25 - rect.top) / (rect.height - innerHeight * 0.6),
        ),
      );
      element.style.setProperty('--story-progress', progress.toFixed(4));
      const steps = Array.from(
        element.querySelectorAll<HTMLElement>('.optical-chapter'),
      );
      let nearest = 0;
      let distance = Infinity;
      steps.forEach((step, index) => {
        const bounds = step.getBoundingClientRect();
        const next = Math.abs(
          bounds.top + bounds.height / 2 - innerHeight * 0.55,
        );
        if (next < distance) {
          distance = next;
          nearest = index;
        }
      });
      setActive(nearest);
    };
    const schedule = () => {
      if (!frame && visible && preference.matches)
        frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    });
    observer.observe(element);
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', schedule, { passive: true });
    const changed = () => {
      element.style.setProperty('--story-progress', '0');
      setActive(0);
      schedule();
    };
    preference.addEventListener('change', changed);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      removeEventListener('scroll', schedule);
      removeEventListener('resize', schedule);
      preference.removeEventListener('change', changed);
    };
  }, []);

  return (
    <section
      ref={section}
      className="optical-story"
      aria-labelledby="optical-story-title"
    >
      <div className="container optical-story-layout">
        <div className="optical-story-copy">
          <p className="section-label">ОПТИКОМ / ВНУТРИ ТЕХНОЛОГИИ</p>
          <h2 id="optical-story-title" className="optical-story-intro">
            Искусство <br />
            <span>ясного взгляда.</span>
          </h2>
          <div className="optical-chapters">
            {chapters.map((chapter, index) => (
              <article
                key={chapter.label}
                id={'optical-chapter-' + index}
                className="optical-chapter"
                data-active={active === index}
              >
                <span className="optical-chapter-number">
                  0{index + 1} / {chapter.label}
                </span>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
                {index === 2 && (
                  <a className="text-link" href="/products/iol.html#compare">
                    Сравнить линзы <ArrowUpRight size={18} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
        <div className="optical-story-visual">
          <OpticalLens />
          <div className="optical-story-caption">
            <span>
              0{active + 1} <span>/ 03</span>
            </span>
            <p>{chapters[active].detail}</p>
          </div>
          <nav
            className="optical-chapter-nav"
            aria-label="Этапы знакомства с оптикой"
          >
            {chapters.map((chapter, index) => (
              <a
                key={chapter.label}
                href={'#optical-chapter-' + index}
                aria-current={active === index ? 'step' : undefined}
              >
                {chapter.label}
              </a>
            ))}
          </nav>
          <span className="optical-art-caption">
            Художественная визуализация оптики
          </span>
        </div>
      </div>
    </section>
  );
}
