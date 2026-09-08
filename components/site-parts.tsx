import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Wrench,
  PackageCheck,
  GraduationCap,
} from 'lucide-react';
import { Brand } from './site-header';
import products from '@/lib/products.json';
import original from '@/lib/original-content.json';
export const names: Record<string, string> = {
  envista: 'enVista®',
  'envista-toric': 'enVista™ Toric',
  luxgood: 'LuxGood™',
  'luxgood-toric': 'LuxGood™ Toric',
  luxsmart: 'LuxSmart™',
  'luxsmart-toric': 'LuxSmart™ Toric',
  akreos: 'Akreos® AO',
  equipment: 'Stellaris Elite™',
  silicone: 'Масла и растворы',
  surgery: 'Хирургические наборы',
  service: 'Техническое обслуживание',
};
export function ProductCard({ slug }: { slug: string }) {
  const p = products.find((p) => p.slug === slug)!;
  return (
    <a className={'product-card product-' + slug} href={p.href}>
      <div
        className={
          'product-visual' +
          ('cleaned' in p && p.cleaned ? ' studio-photo' : '')
        }
        style={{ viewTransitionName: 'product-' + slug }}
      >
        <img
          src={p.image}
          alt={names[p.slug]}
          width="1024"
          height="1024"
          loading="lazy"
          decoding="async"
        />
        <span className="round-arrow">
          <ArrowUpRight size={19} />
        </span>
      </div>
      <div className="product-card-content">
        <span className="product-kind">{p.tag.replace('ИОЛ ', '')}</span>
        <h3>{names[p.slug]}</h3>
        <p>{p.description}</p>
      </div>
    </a>
  );
}
export function Stats() {
  return (
    <div className="stats-grid">
      <div>
        <strong>2006</strong>
        <span>
          год основания
          <br />
          компании
        </span>
      </div>
      <div>
        <strong>
          100<em>+</em>
        </strong>
        <span>
          клиник-партнёров
          <br />
          по всей России
        </span>
      </div>
      <div>
        <strong>
          40<small>тыс.</small>
          <em>+</em>
        </strong>
        <span>
          линз поставляем
          <br />
          ежегодно
        </span>
      </div>
      <div>
        <strong>103</strong>
        <span>
          аппарата на техническом
          <br />
          обслуживании
        </span>
      </div>
    </div>
  );
}
export function Advantages() {
  const icons = [ShieldCheck, Wrench, PackageCheck, GraduationCap];
  return (
    <div className="advantages">
      {original.benefits.map((benefit, index) => {
        const Icon = icons[index];
        return (
          <div className="advantage" key={benefit.title}>
            <Icon size={24} strokeWidth={1.35} />
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        );
      })}
    </div>
  );
}
export function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="cta-art">
        <img
          src="/assets/optimized/iol-render.webp"
          alt=""
          loading="lazy"
          width="1536"
          height="1024"
        />
      </div>
      <div className="cta-copy">
        <span className="section-label">ДАВАЙТЕ СМОТРЕТЬ ВПЕРЁД</span>
        <h2>
          Большие возможности
          <br />
          начинаются с диалога.
        </h2>
        <p>
          Подберём решение под задачи вашей клиники.
          <br />
          От одной линзы до оснащения операционной.
        </p>
        <div className="button-row">
          <a className="button primary" href="/contact.html">
            Обсудить сотрудничество <ArrowUpRight size={18} />
          </a>
          <a className="text-link" href="tel:+78312140067">
            +7 (831) 214-00-67 <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-top">
        <div className="footer-brand">
          <Brand />
          <p>
            Официальный дистрибьютор
            <br />
            Bausch + Lomb в России.
          </p>
        </div>
        <div className="footer-iol">
          <span className="footer-label">ИНТРАОКУЛЯРНЫЕ ЛИНЗЫ</span>
          {[
            'envista',
            'envista-toric',
            'luxgood',
            'luxgood-toric',
            'luxsmart',
            'luxsmart-toric',
            'akreos',
          ].map((slug) => (
            <a key={slug} href={'/products/' + slug + '.html'}>
              {names[slug]}
            </a>
          ))}
        </div>
        <div>
          <span className="footer-label">РЕШЕНИЯ</span>
          <a href="/products/iol.html">Интраокулярные линзы</a>
          <a href="/products/equipment.html">Хирургическое оборудование</a>
          <a href="/products/silicone.html">Масла и растворы</a>
          <a href="/products/surgery.html">Хирургические наборы</a>
        </div>
        <div>
          <span className="footer-label">КОМПАНИЯ</span>
          <a href="/about.html">Об Оптиком</a>
          <a href="/products/service.html">Сервис и поддержка</a>
          <a href="/contact.html">Контакты</a>
        </div>
        <div className="footer-contact">
          <span className="footer-label">НА СВЯЗИ</span>
          <a className="footer-phone" href="tel:+78312140067">
            +7 (831) 214-00-67
          </a>
          <a href="mailto:info@optikom.pro">
            info@optikom.pro <ArrowUpRight size={13} />
          </a>
          <a href="mailto:optikom_iol@mail.ru">
            optikom_iol@mail.ru <ArrowUpRight size={13} />
          </a>
          <span>
            Нижний Новгород
            <br />
            ул. Агрономическая, 52А
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ООО «Оптиком»</span>
        <span>Помогаем видеть больше.</span>
        <a href="/contact.html">
          Реквизиты по запросу <ArrowRight size={13} />
        </a>
      </div>
    </footer>
  );
}
