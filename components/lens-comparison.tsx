'use client';

/* oxlint-disable next/no-img-element -- These catalogue renders are already encoded as WebP. */

import { useState } from 'react';
import { ArrowUpRight, Plus, X } from 'lucide-react';
import type { ComparedLens } from '@/lib/lens-comparison';

const rows = [
  'Тип оптики',
  'Материал',
  'Диаметр оптики',
  'Общий диаметр',
  'Система имплантации',
];

export function LensComparison({
  products,
  initialSelection = ['envista', 'luxsmart'],
}: {
  products: ComparedLens[];
  initialSelection?: string[];
}) {
  const [selected, setSelected] = useState(initialSelection);
  const [differencesOnly, setDifferencesOnly] = useState(false);
  const compared = selected.map((slug) =>
    products.find((item) => item.slug === slug)!,
  );
  const differing = rows.map(
    (_, index) => new Set(compared.map((item) => item.values[index])).size > 1,
  );

  return (
    <section
      className="lens-comparison container"
      id="compare"
      aria-labelledby="comparison-title"
    >
      <div className="section-heading">
        <div>
          <span className="section-label">ВЫБОР В ДЕТАЛЯХ</span>
          <h2 id="comparison-title">
            Рядом. <br />
            <span>Чтобы увидеть разницу.</span>
          </h2>
        </div>
        <p className="comparison-intro">
          Сравните материалы и конструкцию двух или трёх линз Bausch + Lomb.
        </p>
      </div>
      <div className="comparison-toolbar">
        <label>
          <input
            type="checkbox"
            checked={differencesOnly}
            onChange={(event) => setDifferencesOnly(event.target.checked)}
          />{' '}
          Только различия
        </label>
        {selected.length < 3 ? (
          <button
            type="button"
            onClick={() =>
              setSelected([
                ...selected,
                products.find((item) => !selected.includes(item.slug))!.slug,
              ])
            }
          >
            <Plus size={17} /> Добавить линзу
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setSelected(selected.slice(0, 2))}
          >
            <X size={17} /> Убрать третью
          </button>
        )}
      </div>
      <p className="comparison-scroll-hint">
        ↔ Проведите по таблице, чтобы увидеть остальные линзы
      </p>
      <section
        className="comparison-scroll"
        aria-label="Сравнение характеристик линз; таблицу можно прокручивать по горизонтали"
        // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- Keyboard users need to focus the horizontally scrollable region.
        tabIndex={0}
      >
        <table className="comparison-table">
          <caption className="sr-only">
            Сравнение выбранных интраокулярных линз Bausch + Lomb
          </caption>
          <thead>
            <tr>
              <th scope="col">
                <span className="comparison-table-label">
                  BAUSCH <br />+ LOMB
                </span>
                <small>
                  Характеристики <br />
                  из каталога
                </small>
              </th>
              {compared.map((product, index) => (
                <th scope="col" key={index}>
                  <img
                    key={product.slug}
                    src={product.image}
                    alt={product.name}
                    width="1254"
                    height="1254"
                    loading="lazy"
                    decoding="async"
                  />
                  <label htmlFor={'compare-lens-' + index} className="sr-only">
                    Линза {index + 1}
                  </label>
                  <select
                    id={'compare-lens-' + index}
                    value={product.slug}
                    onChange={(event) =>
                      setSelected(
                        selected.map((slug, position) =>
                          position === index ? event.target.value : slug,
                        ),
                      )
                    }
                  >
                    {products.map((item) => (
                      <option
                        key={item.slug}
                        value={item.slug}
                        disabled={
                          item.slug !== product.slug &&
                          selected.includes(item.slug)
                        }
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(
              (label, row) =>
                (!differencesOnly || differing[row]) && (
                  <tr key={label} data-different={differing[row]}>
                    <th scope="row">{label}</th>
                    {compared.map((product) => (
                      <td key={product.slug}>{product.values[row]}</td>
                    ))}
                  </tr>
                ),
            )}
            {differencesOnly && !differing.some(Boolean) && (
              <tr>
                <td colSpan={compared.length + 1}>
                  У выбранных моделей совпадают указанные характеристики.
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Подробнее</th>
              {compared.map((product) => (
                <td key={product.slug}>
                  <a
                    href={product.href}
                    aria-label={'Подробнее о ' + product.name}
                  >
                    О линзе <ArrowUpRight size={16} />
                  </a>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </section>
      <p className="comparison-note">
        Выделены различающиеся характеристики. Полное описание и доступные
        параметры — на странице каждой модели.
      </p>
    </section>
  );
}
