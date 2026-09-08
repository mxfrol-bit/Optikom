import { Header } from '@/components/site-header';
import { HomeSections } from '@/components/home-sections';
import { Footer } from '@/components/site-parts';
import { LiveOptics } from '@/components/live-optics';
import { ArrowUpRight, ArrowDown, Plus, MoveUpRight } from 'lucide-react';
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero">
          <div className="hero-heading">
            <p className="eyebrow">
              <span className="live-dot" /> ОФИЦИАЛЬНЫЙ ДИСТРИБЬЮТОР BAUSCH +
              LOMB
            </p>
            <h1>
              Офтальмология <br />
              <span>нового поколения.</span>
            </h1>
            <p className="hero-sub">Передовые решения Bausch + Lomb.</p>
          </div>
          <LiveOptics>
            <img
              className="hero-art iol-hero-art"
              src="/assets/optimized/iol-render.webp"
              alt=""
              width="1536"
              height="1024"
              fetchPriority="high"
            />
            <div className="hero-story">
              <span className="micro">В ФОКУСЕ — ВАША ПРАКТИКА</span>
              <p>
                Линзы, оборудование и поддержка, <br />с которыми вы видите
                больше.
              </p>
              <a className="button primary" href="/products/index.html">
                Открыть каталог <ArrowUpRight size={18} />
              </a>
            </div>
            <a href="/products/iol.html" className="floating-note lens-note">
              <span className="note-icon">
                <Plus size={20} />
              </span>
              <div>
                <small>ТОЧНОСТЬ В КАЖДОЙ ДЕТАЛИ</small>
                <b>Интраокулярные линзы</b>
                <span>enVista · LuxSmart · Akreos</span>
              </div>
              <ArrowUpRight size={18} />
            </a>
            <div className="hero-proof">
              <strong>
                100<span>+</span>
              </strong>
              <p>
                клиник России <br />
                выбирают Оптиком
              </p>
            </div>
            <a
              href="/products/equipment.html"
              className="floating-note technology-note"
            >
              <span className="note-icon warm">
                <MoveUpRight size={24} />
              </span>
              <div>
                <small>ХИРУРГИЧЕСКАЯ ПЛАТФОРМА</small>
                <b>Stellaris Elite™</b>
                <span>Передний и задний сегменты</span>
              </div>
              <ArrowUpRight size={18} />
            </a>
          </LiveOptics>
          <div className="hero-bottom">
            <span>ПОМОГАЕМ ВИДЕТЬ БОЛЬШЕ С 2006 ГОДА</span>
            <a href="#solutions">
              Откройте возможности <ArrowDown size={16} />
            </a>
            <span>НИЖНИЙ НОВГОРОД · ВСЯ РОССИЯ</span>
          </div>
        </section>
        <section id="solutions" className="partner-band container">
          <span>
            Мировые технологии. <br />
            Ваш надёжный партнёр.
          </span>
          <b className="bausch">
            BAUSCH <span>+</span> LOMB
          </b>
          <p>
            Официальные поставки <br />и сертифицированный сервис
          </p>
        </section>
        <HomeSections />
      </main>
      <Footer />
    </>
  );
}
