import { ProductGallery } from '@/components/product-gallery';
import { OriginalCompany, ContactMap } from '@/components/original-sections';
import original from '@/lib/original-content.json';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { Header } from '@/components/site-header';
import {
  ProductCard,
  Stats,
  Advantages,
  ContactCTA,
  Footer,
  names,
} from '@/components/site-parts';
import { ContactForm } from '@/components/contact-form';
import Home from '../page';
import products from '@/lib/products.json';
import { productDetails } from '@/lib/product-details';
import { LensComparison } from '@/components/lens-comparison';
import { lensComparison } from '@/lib/lens-comparison';
import {
  ProductFamily,
  ProductHighlights,
} from '@/components/product-highlights';
type Props = {
  params: Promise<{ path: string[] }>;
  searchParams: Promise<{
    product?: string | string[];
    compare?: string | string[];
  }>;
};
const iolSlugs = [
  'envista',
  'envista-toric',
  'luxgood',
  'luxgood-toric',
  'luxsmart',
  'luxsmart-toric',
  'akreos',
];
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const route = (await params).path.join('/');
  const p = products.find((p) => p.href === '/' + route);
  if (p)
    return {
      title: p.title + ' — Оптиком',
      description: p.description,
      openGraph: {
        title: p.title + ' — Оптиком',
        description: p.description,
        images: [p.image],
      },
    };
  return {
    title:
      (
        {
          'index.html': 'Оптиком — новый взгляд на офтальмологию',
          'about.html': 'О компании — Оптиком',
          'contact.html': 'Контакты — Оптиком',
          'products/index.html': 'Каталог Bausch + Lomb — Оптиком',
          'products/iol.html': 'Интраокулярные линзы — Оптиком',
        } as Record<string, string>
      )[route] || 'Оптиком',
  };
}
function Breadcrumbs({ label }: { label: string }) {
  return (
    <nav className="breadcrumbs container" aria-label="Хлебные крошки">
      <a href="/">Главная</a>
      <ChevronRight size={13} />
      <a href="/products/index.html">Продукция</a>
      <ChevronRight size={13} />
      <span aria-current="page">{label}</span>
    </nav>
  );
}
export default async function Page({ params, searchParams }: Props) {
  const route = (await params).path.join('/');
  if (route === 'index.html') return <Home />;
  if (route === 'products/index.html' || route === 'products/iol.html') {
    const onlyIol = route === 'products/iol.html';
    const query = await searchParams;
    const requested =
      typeof query.compare === 'string'
        ? [
            ...new Set(
              query.compare
                .split(',')
                .filter((slug) => iolSlugs.includes(slug)),
            ),
          ].slice(0, 3)
        : [];
    const initialSelection =
      requested.length >= 2
        ? requested
        : requested.length === 1
          ? [requested[0], requested[0] === 'envista' ? 'luxsmart' : 'envista']
          : ['envista', 'luxsmart'];
    return (
      <>
        <Header />
        <main id="main">
          <nav className="breadcrumbs container" aria-label="Хлебные крошки">
            <a href="/">Главная</a>
            <ChevronRight size={13} />
            {onlyIol && (
              <>
                <a href="/products/index.html">Продукция</a>
                <ChevronRight size={13} />
              </>
            )}
            <span aria-current="page">
              {onlyIol ? 'Интраокулярные линзы' : 'Каталог'}
            </span>
          </nav>
          <div className="page-intro container">
            <span className="section-label">
              BAUSCH + LOMB / ОФИЦИАЛЬНЫЙ КАТАЛОГ
            </span>
            <h1>
              {onlyIol ? (
                <>
                  Оптика для
                  <br />
                  <span>каждой задачи.</span>
                </>
              ) : (
                <>
                  Технологии, которым
                  <br />
                  <span>вы доверяете зрение.</span>
                </>
              )}
            </h1>
            <p>
              {onlyIol
                ? 'Монофокальные, торические и EDOF-линзы. Семь моделей для разных клинических задач.'
                : 'Интраокулярные линзы, хирургические системы, материалы и сервис для офтальмологической клиники.'}
            </p>
            <nav className="catalog-nav" aria-label="Разделы каталога">
              <a
                className={!onlyIol ? 'active' : ''}
                aria-current={!onlyIol ? 'page' : undefined}
                href="/products/index.html"
              >
                Вся продукция
              </a>
              <a
                className={onlyIol ? 'active' : ''}
                aria-current={onlyIol ? 'page' : undefined}
                href="/products/iol.html"
              >
                Интраокулярные линзы
              </a>
              <a href="/products/equipment.html">Оборудование</a>
              <a href="/products/silicone.html">Масла и растворы</a>
              <a href="/products/surgery.html">Хирургические наборы</a>
              <a href="/products/service.html">Сервис</a>
            </nav>
          </div>
          <div className="container">
            {!onlyIol && (
              <h2 className="catalog-title">Интраокулярные линзы</h2>
            )}
            <div className="catalog-grid">
              {iolSlugs.map((slug) => (
                <ProductCard key={slug} slug={slug} />
              ))}
            </div>
            {!onlyIol && (
              <>
                <h2 className="catalog-title">
                  Оборудование, материалы и сервис
                </h2>
                <div className="catalog-grid">
                  {['equipment', 'silicone', 'surgery', 'service'].map(
                    (slug) => (
                      <ProductCard key={slug} slug={slug} />
                    ),
                  )}
                </div>
              </>
            )}
          </div>
          <LensComparison
            products={lensComparison}
            initialSelection={initialSelection}
          />
          <ContactCTA />
        </main>
        <Footer />
      </>
    );
  }
  if (route === 'about.html')
    return (
      <>
        <Header />
        <main id="main">
          <nav className="breadcrumbs container" aria-label="Хлебные крошки">
            <a href="/">Главная</a>
            <ChevronRight size={13} />
            <span aria-current="page">О компании</span>
          </nav>
          <section className="about-banner">
            <img
              src="/assets/optical-lens.png"
              alt=""
              width="1536"
              height="1024"
            />
            <div className="container">
              <span className="section-label">
                ОПТИКОМ / РЯДОМ С ВАМИ С 2006 ГОДА
              </span>
              <h1>
                В основе технологий —<br />
                доверие людей.
              </h1>
              <p>{original.about.description}</p>
              <Stats />
            </div>
          </section>
          <OriginalCompany />
          <section className="about-advantages container">
            <Advantages />
          </section>
          <ContactCTA />
        </main>
        <Footer />
      </>
    );
  if (route === 'contact.html') {
    const query = await searchParams;
    const selectedProduct =
      typeof query.product === 'string'
        ? products.find((p) => p.slug === query.product)
        : undefined;
    return (
      <>
        <Header />
        <main id="main" className="contact-page container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <a href="/">Главная</a>
            <ChevronRight size={13} />
            <span aria-current="page">Контакты</span>
          </nav>
          <div className="page-intro">
            <span className="section-label">
              КОНТАКТЫ / НАЧАЛО СОТРУДНИЧЕСТВА
            </span>
            <h1>
              На одной волне.
              <br />
              <span>На вашей стороне.</span>
            </h1>
            <p>
              Обсудим вашу задачу и подберём решение для клиники. Работаем по
              всей России.
            </p>
          </div>
          <div className="contact-layout">
            <div className="contact-details">
              <div className="contact-item">
                <span>ПОЗВОНИТЕ НАМ</span>
                <a href="tel:+78312140067">+7 (831) 214-00-67</a>
              </div>
              <div className="contact-item">
                <span>НАПИШИТЕ</span>
                <a href="mailto:info@optikom.pro">info@optikom.pro</a>
                <a href="mailto:optikom_iol@mail.ru">optikom_iol@mail.ru</a>
              </div>
              <div className="contact-item">
                <span>ПРИХОДИТЕ В ГОСТИ</span>
                <p>
                  Нижний Новгород,
                  <br />
                  ул. Агрономическая, д. 52А
                </p>
              </div>
              <div className="contact-item">
                <span>РЕЖИМ РАБОТЫ</span>
                <p>
                  Понедельник — пятница
                  <br />
                  09:00–18:00
                </p>
              </div>
              <p className="form-note">
                Реквизиты компании и коммерческое предложение — по запросу.
              </p>
            </div>
            <ContactForm
              key={selectedProduct?.slug || 'general'}
              initialInterest={selectedProduct?.title}
            />
          </div>
          <ContactMap />
        </main>
        <Footer />
      </>
    );
  }
  const p = products.find((p) => p.href === '/' + route);
  if (!p) notFound();
  const related = iolSlugs.includes(p.slug)
    ? iolSlugs.filter((s) => s !== p.slug).slice(0, 4)
    : ['equipment', 'silicone', 'surgery', 'service'].filter(
        (s) => s !== p.slug,
      );
  return (
    <>
      <Header />
      <main id="main">
        <Breadcrumbs label={names[p.slug]} />
        <section className="product-detail container">
          <ProductGallery
            photos={p.gallery.map(({ src, alt, cleaned }) => ({
              src,
              alt,
              cleaned,
            }))}
            title={p.title}
            slug={p.slug}
            details={productDetails[p.slug]}
          />
          <div className="detail-copy">
            <ProductFamily slug={p.slug} />
            <span className="section-label">{p.tag}</span>
            <h1>{p.title}</h1>
            <p className="detail-desc">{p.description}</p>
            <div className="button-row product-primary-actions">
              <a
                className="button primary"
                href={'/contact.html?product=' + p.slug}
              >
                Запросить предложение <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="tel:+78312140067">
                Связаться с нами <ArrowUpRight size={15} />
              </a>
            </div>
            <ProductHighlights
              slug={p.slug}
              isLens={iolSlugs.includes(p.slug)}
            />
            <ul className="detail-features">
              {p.features.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="detail-specs">
              {p.specs.map((spec, i) => (
                <details key={spec.title} open={i === 0}>
                  <summary>{spec.title}</summary>
                  <ul>
                    {spec.items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="related">
          <div className="container">
            <span className="section-label">ДРУГИЕ РЕШЕНИЯ</span>
            <h2>Дополните возможности.</h2>
            <div className="home-products">
              {related.map((slug) => (
                <ProductCard key={slug} slug={slug} />
              ))}
            </div>
          </div>
        </section>
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
