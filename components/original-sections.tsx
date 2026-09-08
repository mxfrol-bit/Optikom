import { ArrowUpRight } from 'lucide-react';
import original from '@/lib/original-content.json';
import { ContactForm } from './contact-form';
export function OriginalCompany() {
  return (
    <>
      <section className="company-original container">
        <div className="company-original-image">
          <img
            src={original.about.image}
            alt="Инструменты Bi-Blade для витреоретинальной хирургии"
            width="600"
            height="600"
            loading="lazy"
          />
          <span className="experience-badge">
            <b>2006</b>год основания компании
          </span>
        </div>
        <div>
          <span className="section-label">ИСТОРИЯ КОМПАНИИ</span>
          <h2>
            Экспертиза, которая
            <br />
            измеряется годами.
          </h2>
          {original.about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <a className="text-link" href="/contact.html">
            Стать партнёром <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <section className="company-partner container">
        <span className="section-label">КЛЮЧЕВОЙ ПАРТНЁР</span>
        <div>
          <h2>
            Официальный дистрибьютор
            <br />
            Bausch + Lomb.
          </h2>
          <p>{original.about.partner}</p>
        </div>
        <span className="bausch">
          BAUSCH <span>+</span> LOMB
        </span>
      </section>
    </>
  );
}
export function HomeContact() {
  return (
    <section className="home-contact container">
      <div>
        <span className="section-label">СВЯЗАТЬСЯ С НАМИ</span>
        <h2>
          Готовы
          <br />к сотрудничеству?
        </h2>
        <p>
          Оставьте заявку — ответим в течение рабочего дня и подготовим
          персональное предложение для вашей клиники. Работаем с 9:00 до 18:00
          по будням.
        </p>
        <div className="home-contact-links">
          <a href="tel:+78312140067">+7 (831) 214-00-67</a>
          <a href="mailto:optikom_iol@mail.ru">optikom_iol@mail.ru</a>
          <a href="mailto:info@optikom.pro">info@optikom.pro</a>
          <span>
            г. Нижний Новгород,
            <br />
            ул. Агрономическая, д. 52А
          </span>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
export function EquipmentSpecs() {
  return (
    <div className="equipment-specs">
      {original.equipment.specs.map((spec) => (
        <div key={spec.label}>
          <strong>{spec.value}</strong>
          <span>{spec.label}</span>
        </div>
      ))}
    </div>
  );
}
