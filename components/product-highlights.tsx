import { ArrowUpRight, GitCompareArrows } from 'lucide-react';
import {
  productHighlights,
  productComparisonHref,
} from '@/lib/product-highlights';

export function ProductHighlights({
  slug,
  isLens,
}: {
  slug: string;
  isLens: boolean;
}) {
  const highlight = productHighlights[slug];
  if (!highlight) return null;
  return (
    <section
      className="product-highlights"
      data-tone={highlight.tone}
      aria-labelledby={'highlight-' + slug}
    >
      <div className="product-highlight-heading">
        <span className="section-label">В ЧЁМ ОСОБЕННОСТЬ</span>
        <span className="highlight-badge">{highlight.badge}</span>
      </div>
      <h2 id={'highlight-' + slug}>{highlight.headline}</h2>
      <p>{highlight.summary}</p>
      <dl className="product-key-facts" data-layout={highlight.factLayout}>
        {highlight.facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
      {isLens && (
        <a className="product-compare-link" href={productComparisonHref(slug)}>
          <GitCompareArrows size={17} /> Сравнить эту линзу{' '}
          <ArrowUpRight size={16} />
        </a>
      )}
    </section>
  );
}

export function ProductFamily({ slug }: { slug: string }) {
  const highlight = productHighlights[slug];
  if (!highlight?.family || !highlight.partner) return null;
  const toric = slug.endsWith('-toric');
  const base = toric ? highlight.partner : slug;
  return (
    <nav className="product-family" aria-label={'Модели ' + highlight.family}>
      <span>{highlight.family}</span>
      <a
        href={'/products/' + base + '.html'}
        aria-current={!toric ? 'page' : undefined}
      >
        {highlight.family === 'LuxSmart' ? 'EDOF' : 'Монофокальная'}
      </a>
      <a
        href={'/products/' + base + '-toric.html'}
        aria-current={toric ? 'page' : undefined}
      >
        {highlight.family === 'LuxSmart' ? 'EDOF Toric' : 'Торическая'}
      </a>
    </nav>
  );
}
