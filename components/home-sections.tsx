import original from '@/lib/original-content.json';
import products from '@/lib/products.json';
import { EquipmentSpecs, HomeContact } from './original-sections';
import { ArrowUpRight } from 'lucide-react';
import { ProductCard, Stats, Advantages, ContactCTA } from './site-parts';
import { OpticalStory } from './optical-story';
const equipmentImage = products.find(
  (product) => product.slug === 'equipment',
)!.image;

export function HomeSections() {
  return (
    <>
      <section className="solutions-section container">
        <div className="section-heading">
          <div>
            <span className="section-label">
              01 / РЕШЕНИЯ ДЛЯ ВАШЕЙ ПРАКТИКИ
            </span>
            <h2>
              Технологии, которые <br />
              меняют <span>взгляд на мир.</span>
            </h2>
          </div>
          <div className="section-aside">
            <p>{original.hero.description}</p>
            <a className="text-link" href="/products/index.html">
              Весь каталог <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className="solutions-grid">
          <a className="solution-feature" href="/products/iol.html">
            <span className="section-label">01 / ИНТРАОКУЛЯРНЫЕ ЛИНЗЫ</span>
            <div className="solution-feature-copy">
              <h3>
                Маленькая линза. <br />
                Большая разница.
              </h3>
              <p>
                Монофокальные, торические <br />и EDOF-линзы Bausch + Lomb.
              </p>
              <span className="button white">
                Выбрать ИОЛ <ArrowUpRight size={18} />
              </span>
            </div>
            <img
              src="/assets/optimized/iol-render.webp"
              alt="Художественный рендер интраокулярной линзы"
              width="460"
              height="360"
              loading="lazy"
            />
            <span className="solution-bottom">
              7 МОДЕЛЕЙ · ОДИН СТАНДАРТ КАЧЕСТВА
            </span>
          </a>
          <div className="solution-side">
            <a className="solution-equipment" href="/products/equipment.html">
              <span className="section-label">02 / ОБОРУДОВАНИЕ</span>
              <h3>
                Точность. <br />
                Под вашим контролем.
              </h3>
              <img
                src={equipmentImage}
                alt="Хирургическая платформа Stellaris Elite"
                width="1254"
                height="1254"
                loading="lazy"
              />
              <div>
                <span>Stellaris Elite™</span>
                <span className="round-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </a>
            <a
              className="solution-materials rendered-materials"
              href="/products/silicone.html"
            >
              <img
                src="/assets/renders/fluid-render.png"
                alt=""
                loading="lazy"
                width="1536"
                height="1024"
              />
              <div>
                <span className="section-label">03 / МАТЕРИАЛЫ</span>
                <h3>
                  Каждая деталь <br />
                  имеет значение.
                </h3>
                <p>Масла, растворы и расходные материалы</p>
              </div>
              <ArrowUpRight size={27} />
            </a>
          </div>
        </div>
      </section>
      <OpticalStory />
      <section className="lens-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">
                02 / ОПТИКА БЕЗ КОМПРОМИССОВ
              </span>
              <h2>
                Разные задачи. <br />
                <span>Индивидуальные решения.</span>
              </h2>
            </div>
            <a className="text-link" href="/products/iol.html">
              Вся линейка ИОЛ <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="home-products">
            {['envista', 'luxgood', 'luxsmart', 'akreos'].map((slug) => (
              <ProductCard key={slug} slug={slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="service-section container">
        <div className="service-visual equipment-editorial">
          <img
            src={equipmentImage}
            alt="Хирургическая платформа Stellaris Elite"
            width="1254"
            height="1254"
            loading="lazy"
          />
          <div className="service-float">
            <span className="live-dot" />
            <span>ТОЧНОСТЬ, КОТОРАЯ РАБОТАЕТ</span>
            <b>Stellaris Elite™</b>
          </div>
        </div>
        <div className="service-copy">
          <span className="section-label">03 / БОЛЬШЕ, ЧЕМ ПОСТАВКА</span>
          <h2>
            Ваша уверенность. <br />
            <span>Наша работа.</span>
          </h2>
          <p>
            Оборудование должно работать, а вы — быть уверены в каждом следующем
            дне. Мы рядом: от первого запуска до планового обслуживания.
          </p>
          <EquipmentSpecs />
          <div className="service-list">
            <div>
              <span>01</span>
              <div>
                <h3>Запуск и обучение</h3>
                <p>Установка, настройка и подготовка команды.</p>
              </div>
            </div>
            <div>
              <span>02</span>
              <div>
                <h3>Сервис на всём пути</h3>
                <p>Плановое ТО, диагностика и ремонт.</p>
              </div>
            </div>
            <div>
              <span>03</span>
              <div>
                <h3>Оригинальные компоненты</h3>
                <p>Запчасти и расходные материалы Bausch + Lomb.</p>
              </div>
            </div>
          </div>
          <a href="/products/service.html" className="button outline">
            Подробнее о сервисе <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <section className="about-section container">
        <div className="section-heading">
          <div>
            <span className="section-label">04 / ОПТИКОМ В ЦИФРАХ</span>
            <h2>
              Масштаб доверия. <br />
              <span>С 2006 года.</span>
            </h2>
          </div>
          <div className="section-aside">
            <p>
              Соединяем мировые технологии с ежедневной практикой российских
              офтальмологов.
            </p>
            <a className="text-link" href="/about.html">
              Познакомиться с нами <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <Stats />
        <Advantages />
      </section>
      <section className="process-section container">
        <div>
          <span className="section-label">
            ПРОСТО НАЧАТЬ. ЛЕГКО ПРОДОЛЖАТЬ.
          </span>
          <h2>
            Три шага <br />к партнёрству.
          </h2>
        </div>
        <div className="process-steps">
          {original.process.map((step, index) => (
            <div key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      <ContactCTA />
      <HomeContact />
    </>
  );
}
