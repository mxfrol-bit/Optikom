// ── Optikom shared nav/footer — matches index.html exactly ──
const R = location.pathname.includes('/products/') ? '../' : './';

document.addEventListener('DOMContentLoaded', () => {

  // ── TOPBAR ──
  const tb = document.createElement('div');
  tb.style.cssText = 'background:#0B1929;color:rgba(255,255,255,.55);font-size:.73rem;letter-spacing:.03em;padding:.5rem 0;border-bottom:1px solid rgba(255,255,255,.07)';
  tb.innerHTML = `<div style="max-width:1320px;margin:0 auto;padding:0 2rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.5rem">
    <span>ООО «Оптиком» — официальный дистрибьютор Bausch + Lomb в России</span>
    <div style="display:flex;gap:2rem">
      <a href="tel:+78312140067" style="color:rgba(255,255,255,.6);text-decoration:none;transition:color .2s">+7 (831) 214-00-67</a>
      <a href="mailto:optikom_iol@mail.ru" style="color:rgba(255,255,255,.6);text-decoration:none;transition:color .2s">optikom_iol@mail.ru</a>
      <span style="color:rgba(255,255,255,.2)">·</span>
      <a href="mailto:info@optikom.pro" style="color:rgba(255,255,255,.6);text-decoration:none;transition:color .2s">info@optikom.pro</a>
    </div>
  </div>`;
  document.body.prepend(tb);

  // ── NAV ──
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.id = 'mainNav';
  nav.innerHTML = `<div class="nav-wrap">
    <a href="${R}index.html" class="logo">
      <img src="${R}img/logo.png" alt="Оптиком" style="height:44px;width:auto;object-fit:contain"/>
      <div>
        <div class="logo-name">Оптиком</div>
        <div class="logo-sub">Bausch + Lomb · Россия</div>
      </div>
    </a>
    <ul class="nav-center">
      <li><a href="${R}products/iol.html">ИОЛ</a></li>
      <li><a href="${R}products/equipment.html">Оборудование</a></li>
      <li>
        <a href="${R}products/index.html">Ещё продукты
          <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;opacity:.5;vertical-align:middle;margin-left:2px"><path d="M2 5l5 5 5-5"/></svg>
        </a>
        <ul class="nav-drop">
          <li><a href="${R}products/silicone.html">Силиконовые масла <span>Материалы</span></a></li>
          <li><a href="${R}products/surgery.html">Хирургические наборы <span>Расходные</span></a></li>
          <li><a href="${R}products/service.html">Сервис и ТО <span>Обслуживание</span></a></li>
          <li><a href="${R}products/index.html">Весь каталог <span>→</span></a></li>
        </ul>
      </li>
      <li><a href="${R}about.html">О компании</a></li>
      <li><a href="${R}contact.html">Контакты</a></li>
    </ul>
    <div class="nav-right">
      <a href="tel:+78312140067" class="nav-phone">+7 (831) 214-00-67</a>
      <a href="${R}contact.html" class="btn-nav">Оставить заявку</a>
    </div>
    <div class="ham" id="ham"><span></span><span></span><span></span></div>
  </div>`;
  document.body.insertBefore(nav, document.body.children[1]);

  // ── DRAWER ──
  const dr = document.createElement('div');
  dr.className = 'drawer'; dr.id = 'drawer';
  dr.innerHTML = `
    <div class="drawer-head">
      <div class="logo">
        <img src="${R}img/logo.png" style="height:38px;object-fit:contain" alt=""/>
        <div class="logo-name">Оптиком</div>
      </div>
      <button class="drawer-close" id="drawerClose">✕</button>
    </div>
    <nav>
      <a href="${R}products/iol.html">ИОЛ — Интраокулярные линзы</a>
      <a href="${R}products/equipment.html">Stellaris Elite™ — Оборудование</a>
      <a href="${R}products/silicone.html">Силиконовые масла и растворы</a>
      <a href="${R}products/surgery.html">Хирургические наборы</a>
      <a href="${R}products/service.html">Сервис и обслуживание</a>
      <a href="${R}about.html">О компании</a>
      <a href="${R}contact.html">Контакты</a>
    </nav>
    <a href="${R}contact.html" class="drawer-cta">Оставить заявку</a>`;
  document.body.appendChild(dr);

  // ── FOOTER ──
  const ft = document.createElement('footer');
  ft.innerHTML = `
    <div class="foot-top">
      <div>
        <div class="foot-logo">
          <img src="${R}img/logo.png" alt="Оптиком" style="height:42px;filter:brightness(0) invert(1);opacity:.8;object-fit:contain"/>
          <div class="foot-logo-name">Оптиком</div>
        </div>
        <p class="foot-about">ООО «Оптиком» — официальный дистрибьютор Bausch&nbsp;+&nbsp;Lomb в России с 2006 года. Поставки ИОЛ и оборудования в ведущие клиники страны.</p>
        <div class="foot-contacts">
          <a href="tel:+78312140067">📞 +7 (831) 214-00-67</a>
          <a href="mailto:optikom_iol@mail.ru">✉ optikom_iol@mail.ru</a>
          <a href="mailto:info@optikom.pro">✉ info@optikom.pro</a>
          <a href="#">📍 г. Нижний Новгород, ул. Агрономическая, д. 52А</a>
        </div>
      </div>
      <div>
        <div class="foot-h">ИОЛ</div>
        <ul class="foot-links">
          <li><a href="${R}products/envista.html">ENVISTA®</a></li>
          <li><a href="${R}products/envista-toric.html">enVista™ Toric</a></li>
          <li><a href="${R}products/luxgood.html">LuxGood™</a></li>
          <li><a href="${R}products/luxgood-toric.html">LuxGood™ Toric</a></li>
          <li><a href="${R}products/luxsmart.html">LuxSmart™</a></li>
          <li><a href="${R}products/luxsmart-toric.html">LuxSmart™ Toric</a></li>
          <li><a href="${R}products/akreos.html">Akreos® AO</a></li>
        </ul>
      </div>
      <div>
        <div class="foot-h">Продукция</div>
        <ul class="foot-links">
          <li><a href="${R}products/equipment.html">Stellaris Elite™</a></li>
          <li><a href="${R}products/silicone.html">Силиконовые масла</a></li>
          <li><a href="${R}products/surgery.html">Хирургические наборы</a></li>
          <li><a href="${R}products/service.html">Сервис и ТО</a></li>
        </ul>
      </div>
      <div>
        <div class="foot-h">Компания</div>
        <ul class="foot-links">
          <li><a href="${R}about.html">О нас</a></li>
          <li><a href="${R}products/index.html">Каталог продукции</a></li>
          <li><a href="${R}contact.html">Контакты</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© 2006–2025 ООО «Оптиком» · optikom.pro</span>
      <a href="${R}contact.html">Реквизиты по запросу</a>
    </div>`;
  document.body.appendChild(ft);

  // ── PHONE BUTTON (replacing WA) ──
  const ph = document.createElement('a');
  ph.href = 'tel:+78312140067';
  ph.className = 'wa-btn';
  ph.setAttribute('aria-label', 'Позвонить');
  ph.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 4.69 12 19.8 19.8 0 0 1 1.18 3.18 2 2 0 0 1 3.17 1h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.69 5.69l1.56-1.56a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 14.92z"/></svg>`;
  document.body.appendChild(ph);

  // ── BACK TO TOP ──
  const up = document.createElement('button');
  up.className = 'up-btn'; up.id = 'upBtn'; up.textContent = '↑';
  up.setAttribute('aria-label', 'Наверх');
  up.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(up);

  // ── BOTTOM NAV (mobile) ──
  const bn = document.createElement('nav');
  bn.className = 'btm-nav';
  const p = location.pathname;
  const isHome = p === '/' || (p.endsWith('index.html') && !p.includes('/products/'));
  const isProd = p.includes('/products/');
  const isAbout = p.includes('/about');
  bn.innerHTML = `
    <a href="${R}index.html" ${isHome ? "class='active'" : ''}>
      <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Главная
    </a>
    <a href="${R}products/index.html" ${isProd ? "class='active'" : ''}>
      <svg viewBox="0 0 24 24"><rect x="2" y="3" width="7" height="7" rx="1"/><rect x="15" y="3" width="7" height="7" rx="1"/><rect x="2" y="14" width="7" height="7" rx="1"/><rect x="15" y="14" width="7" height="7" rx="1"/></svg>Продукция
    </a>
    <a href="${R}about.html" ${isAbout ? "class='active'" : ''}>
      <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>О нас
    </a>
    <a href="${R}contact.html" class="btm-nav-cta">
      <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 4.69 12 19.8 19.8 0 0 1 1.18 3.18 2 2 0 0 1 3.17 1h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.69 5.69l1.56-1.56a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 14.92z"/></svg>Звонок
    </a>`;
  document.body.appendChild(bn);

  // ── EVENTS ──
  // Nav scroll
  window.addEventListener('scroll', () => {
    document.getElementById('mainNav')?.classList.toggle('scrolled', window.scrollY > 10);
    document.getElementById('upBtn')?.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });

  // Mobile drawer
  document.getElementById('ham')?.addEventListener('click', () => {
    document.getElementById('drawer')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('drawerClose')?.addEventListener('click', () => {
    document.getElementById('drawer')?.classList.remove('open');
    document.body.style.overflow = '';
  });

  // Fade animations
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade, .fade-up, .fade-left').forEach(el => obs.observe(el));

  // Counters
  document.querySelectorAll('[data-count]').forEach(el => {
    new IntersectionObserver(([e], o) => {
      if (!e.isIntersecting) return; o.unobserve(el);
      const t = +el.dataset.count, s = el.dataset.suffix || '', d = 2000, start = performance.now();
      const tick = now => {
        const v = t * (1 - Math.pow(1 - Math.min((now - start) / d, 1), 3));
        el.textContent = Math.floor(v) + s;
        if (now - start < d) requestAnimationFrame(tick); else el.textContent = t + s;
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 }).observe(el);
  });

  // Lightbox for product images
  const imgs = [...document.querySelectorAll('.detail-img-main img, .detail-imgs-row img')];
  if (imgs.length) {
    const ov = document.createElement('div');
    ov.style.cssText = 'position:fixed;inset:0;background:rgba(11,25,41,.96);z-index:99999;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .3s;cursor:zoom-out';
    const im = document.createElement('img');
    im.style.cssText = 'max-width:90vw;max-height:88vh;object-fit:contain;border-radius:8px;box-shadow:0 20px 60px rgba(0,0,0,.5)';
    const cl = document.createElement('button');
    cl.style.cssText = 'position:absolute;top:1.5rem;right:1.5rem;background:rgba(255,255,255,.1);border:none;color:#fff;font-size:1.4rem;width:46px;height:46px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s';
    cl.textContent = '✕';
    cl.onmouseenter = () => cl.style.background = 'rgba(196,18,48,.8)';
    cl.onmouseleave = () => cl.style.background = 'rgba(255,255,255,.1)';
    ov.appendChild(im); ov.appendChild(cl); document.body.appendChild(ov);
    imgs.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => { im.src = img.src; ov.style.opacity = '1'; ov.style.pointerEvents = 'all'; document.body.style.overflow = 'hidden'; });
    });
    const close = () => { ov.style.opacity = '0'; ov.style.pointerEvents = 'none'; document.body.style.overflow = ''; };
    cl.addEventListener('click', close);
    ov.addEventListener('click', e => { if (e.target === ov) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }
});

// Form handler
window.handleSubmit = function(e) {
  e.preventDefault();
  const btn = e.target, orig = btn.textContent;
  btn.textContent = '✓ Заявка отправлена!';
  btn.style.background = '#16a34a';
  btn.style.color = '#fff';
  setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.style.color = ''; }, 3500);
};
