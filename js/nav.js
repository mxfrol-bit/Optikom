const ROOT = (() => location.pathname.includes('/products/') ? '../' : './')();
const BASE_URL = 'https://optikom.pro';
const IMG = 'https://mstk-med.com/mstk/img/';
const IMGR = 'https://mstk-med.com/mstk/';

// ── TOPBAR ──
function injectTopbar() {
  const el = document.createElement('div');
  el.className = 'topbar';
  el.innerHTML = `<div class="topbar-inner">
    <span>ООО «Оптиком» — официальный дистрибьютор Bausch + Lomb в России</span>
    <div class="topbar-right">
      <a href="tel:+78312140067">+7 (831) 214-00-67</a>
      <a href="mailto:optikom_iol@mail.ru">optikom_iol@mail.ru</a><br><a href="mailto:optikom_iol@mail.ru">optikom_iol@mail.ru</a> · <a href="mailto:info@optikom.pro">info@optikom.pro</a>
    </div>
  </div>`;
  document.body.prepend(el);
}

// ── NAV ──
function injectNav() {
  const r = ROOT;
  const el = document.createElement('nav');
  el.innerHTML = `
  <div class="progress-bar" id="progressBar"></div>
  <div class="nav-inner">
    <a href="${r}index.html" class="logo">
      <img class="logo-img" src="https://mstk-med.com/mstk/LOGO.png"
           alt="Оптиком" style="filter:hue-rotate(160deg) saturate(1.2);"
           onerror="this.style.display='none'"/>
      <div class="logo-text">
        <strong>ОПТИКОМ</strong>
        <small>Bausch + Lomb · Россия</small>
      </div>
    </a>

    <ul class="nav-links">
      <li><a href="${r}products/iol.html">ИОЛ</a></li>
      <li><a href="${r}products/equipment.html">Оборудование</a></li>
      <li>
        <a href="${r}products/index.html" id="prodTrigger">Ещё продукты ▾</a>
        <ul class="simple-drop">
          <li><a href="${r}products/surgery.html">Хирургические наборы</a></li>
          <li><a href="${r}products/silicone.html">Силиконовые масла</a></li>
          <li><a href="${r}products/service.html">Сервис и ТО</a></li>
        </ul>
      </li>
      <li><a href="${r}about.html">О компании</a></li>
      <li><a href="${r}contact.html" class="btn-nav">Оставить заявку</a></li>
    </ul>

    <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
  </div>`;
  document.body.insertBefore(el, document.body.children[1]);
}
function injectMobileNav() {
  const r = ROOT;
  const el = document.createElement('div');
  el.className = 'mobile-nav'; el.id = 'mobileNav';
  el.innerHTML = `<button class="mobile-nav-close" id="mobileClose">✕</button>
    <a href="${r}index.html">Главная</a>
    <a href="${r}about.html">О компании</a>
    <details class="mobile-nav-group"><summary>Продукция</summary>
      <details class="mobile-nav-group" style="margin-left:1rem"><summary>ИОЛ</summary>
        <a href="${r}products/envista.html">ENVISTA®</a>
        <a href="${r}products/envista-toric.html">enVista™ Toric</a>
        <a href="${r}products/luxgood.html">LuxGood™</a>
        <a href="${r}products/luxgood-toric.html">LuxGood™ Toric</a>
        <a href="${r}products/luxsmart.html">LuxSmart™</a>
        <a href="${r}products/luxsmart-toric.html">LuxSmart™ Toric</a>
        <a href="${r}products/akreos.html">Akreos® AO</a>
      </details>
      <a href="${r}products/equipment.html">Оборудование Stellaris</a>
      <a href="${r}products/surgery.html">Хирургия</a>
      <a href="${r}products/silicone.html">Масла и растворы</a>
      <a href="${r}products/service.html">Обслуживание</a>
    </details>
    <a href="${r}contact.html" class="btn-red">Оставить заявку</a>`;
  document.body.appendChild(el);
}

// ── FOOTER ──
function injectFooter() {
  const r = ROOT;
  const el = document.createElement('footer');
  el.innerHTML = `<div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <img src="${r}img/logo.png" alt="Оптиком" style="filter:brightness(0) invert(1) opacity(.8);" />
        </div>
        <p class="footer-about">ООО «Оптиком» — официальный дистрибьютор Bausch&nbsp;+&nbsp;Lomb в России. Поставки офтальмологического оборудования и ИОЛ в ведущие клиники страны.</p>
        <div class="footer-social">

          <a href="tel:+78312140067" aria-label="Телефон">📞</a>
          <a href="mailto:info@optikom.pro" aria-label="Email">✉</a>
        </div>
      </div>
      <div class="footer-col"><h4>Продукция</h4><ul>
        <li><a href="${r}products/iol.html">ИОЛ — Каталог</a></li>
        <li><a href="${r}products/equipment.html">Stellaris Elite™</a></li>
        <li><a href="${r}products/silicone.html">Силиконовые масла</a></li>
        <li><a href="${r}products/surgery.html">Хирургия</a></li>
        <li><a href="${r}products/service.html">Сервис</a></li>
      </ul></div>
      <div class="footer-col"><h4>Компания</h4><ul>
        <li><a href="${r}about.html">О нас</a></li>
        <li><a href="${r}products/index.html">Вся продукция</a></li>
        <li><a href="${r}contact.html">Контакты</a></li>
      </ul></div>
      <div class="footer-col"><h4>Контакты</h4>
        <address>г. Нижний Новгород,<br>ул. Агрономическая, д. 52А<br><br>
          <a href="tel:+78312140067">+7 (831) 214-00-67</a><br>
          
          <a href="mailto:optikom_iol@mail.ru">optikom_iol@mail.ru</a><br><a href="mailto:optikom_iol@mail.ru">optikom_iol@mail.ru</a> · <a href="mailto:info@optikom.pro">info@optikom.pro</a>
        </address>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2006–2025 ООО «Оптиком» · optikom.pro</span>
      <a href="${r}contact.html">Реквизиты по запросу</a>
    </div>
  </div>`;
  document.body.appendChild(el);
}

// ── FLOATING WIDGETS ──
function injectWidgets() {
  const r = ROOT;
  const wa = document.createElement('a');
  wa.href = 'tel:+78312140067';
  wa.className = 'wa-float'; wa.target = '_blank'; wa.rel = 'noopener';
  wa.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
  document.body.appendChild(wa);

  const top = document.createElement('button');
  top.className = 'back-to-top'; top.id = 'backToTop'; top.innerHTML = '↑';
  document.body.appendChild(top);
}

// ── BOTTOM NAV (mobile only) ──
function injectBottomNav() {
  if (window.innerWidth > 768) return;
  const r = ROOT;
  const p = location.pathname;
  const isHome = p === '/' || (p.endsWith('index.html') && !p.includes('/products/'));
  const isProd = p.includes('/products/');
  const isAbout = p.includes('/about');
  const isContact = p.includes('/contact');
  const nav = document.createElement('nav');
  nav.className = 'bottom-nav';
  nav.innerHTML = `<div class="bottom-nav-inner">
    <a href="${r}index.html" class="bottom-nav-item ${isHome?'active':''}">
      <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Главная
    </a>
    <a href="${r}products/index.html" class="bottom-nav-item ${isProd?'active':''}">
      <svg viewBox="0 0 24 24"><rect x="2" y="3" width="7" height="7" rx="1"/><rect x="15" y="3" width="7" height="7" rx="1"/><rect x="2" y="14" width="7" height="7" rx="1"/><rect x="15" y="14" width="7" height="7" rx="1"/></svg>Продукция
    </a>
    <a href="${r}about.html" class="bottom-nav-item ${isAbout?'active':''}">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>О нас
    </a>
    <a href="${r}contact.html" class="bottom-nav-item bottom-nav-cta">
      <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 5.72 5.72l1.56-1.56a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>Звонок
    </a>
  </div>`;
  document.body.appendChild(nav);
}

// ── JSON-LD ──
function injectSEO() {
  const schema = {
    "@context":"https://schema.org","@type":"MedicalOrganization",
    "name":"ООО «Оптиком»","url":BASE_URL,
    "description":"Официальный дистрибьютор Bausch + Lomb в России. Интраокулярные линзы, Stellaris Elite, офтальмологическое оборудование.",
    "email":"info@optikom.pro",
    "address":{"@type":"PostalAddress","streetAddress":"ул. Агрономическая, д. 52А","addressLocality":"Нижний Новгород","addressCountry":"RU"},
    "contactPoint":[{"@type":"ContactPoint","telephone":"+7-831-214-00-67","contactType":"customer service","availableLanguage":"Russian"}]
  };
  const s = document.createElement('script'); s.type = 'application/ld+json';
  s.textContent = JSON.stringify(schema); document.head.appendChild(s);
}

// ── MEGA MENU ──


// ── PROGRESS BAR ──
function initProgressBar() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (window.scrollY/total)*100 : 0) + '%';
  }, {passive:true});
}

// ── COUNTERS ──
function initCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    new IntersectionObserver(([e], obs) => {
      if (!e.isIntersecting) return; obs.unobserve(el);
      const t = parseFloat(el.dataset.count), s = el.dataset.suffix||'', d = 2000, start = performance.now();
      const tick = now => {
        const p = Math.min((now-start)/d,1), v = t*(1-Math.pow(1-p,3));
        el.textContent = (Number.isInteger(t)?Math.floor(v):v.toFixed(1))+s;
        if(p<1) requestAnimationFrame(tick); else el.textContent=t+s;
      };
      requestAnimationFrame(tick);
    },{threshold:.5}).observe(el);
  });
}

// ── SCROLL ANIMATIONS ──
function initAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e,i) => { if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('visible'),i*100); obs.unobserve(e.target); } });
  }, {threshold:.08});
  document.querySelectorAll('.fade-up, .fade-left').forEach(el=>obs.observe(el));
}

// ── LIGHTBOX ──
function initLightbox() {
  const imgs = [...document.querySelectorAll('.detail-img-main img, .detail-imgs-row img')];
  if (!imgs.length) return;
  const ov = document.createElement('div'); ov.className='lightbox-overlay';
  ov.innerHTML=`<button class="lightbox-close" id="lbClose">✕</button><button class="lightbox-prev" id="lbPrev">‹</button><img class="lightbox-img" id="lbImg" src="" alt=""/><button class="lightbox-next" id="lbNext">›</button>`;
  document.body.appendChild(ov);
  let cur=0;
  const open=i=>{cur=i;document.getElementById('lbImg').src=imgs[i].src;ov.classList.add('active');document.body.style.overflow='hidden';};
  const close=()=>{ov.classList.remove('active');document.body.style.overflow='';};
  imgs.forEach((img,i)=>{img.style.cursor='zoom-in';img.addEventListener('click',()=>open(i));});
  document.getElementById('lbClose').addEventListener('click',close);
  document.getElementById('lbPrev').addEventListener('click',()=>open((cur-1+imgs.length)%imgs.length));
  document.getElementById('lbNext').addEventListener('click',()=>open((cur+1)%imgs.length));
  ov.addEventListener('click',e=>{if(e.target===ov)close();});
  document.addEventListener('keydown',e=>{if(!ov.classList.contains('active'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')open((cur-1+imgs.length)%imgs.length);if(e.key==='ArrowRight')open((cur+1)%imgs.length);});
}

// ── FLOATING CTA ──
function initFloatingCTA() {
  const p = location.pathname;
  if(!p.includes('/products/')||p.endsWith('index.html')||p.endsWith('iol.html')) return;
  const el = document.createElement('div'); el.className='floating-cta'; el.id='floatingCta';
  el.innerHTML=`<span>Запросить прайс-лист</span><a href="../contact.html" class="floating-cta-btn">Получить цену →</a>`;
  document.body.appendChild(el);
  window.addEventListener('scroll',()=>el.classList.toggle('visible',window.scrollY>350),{passive:true});
}

// ── BACK TO TOP ──
function initBackToTop() {
  const btn=document.getElementById('backToTop'); if(!btn) return;
  window.addEventListener('scroll',()=>btn.classList.toggle('visible',window.scrollY>500),{passive:true});
  btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}

// ── MOBILE MENU ──
function initMobileMenu() {
  document.getElementById('hamburger')?.addEventListener('click',()=>{document.getElementById('mobileNav')?.classList.add('open');document.body.style.overflow='hidden';});
  document.getElementById('mobileClose')?.addEventListener('click',()=>{document.getElementById('mobileNav')?.classList.remove('open');document.body.style.overflow='';});
}

// ── GOLD CURSOR ──
function initCursor() {
  if (window.matchMedia('(hover:none)').matches) return;
  const c = document.createElement('div'); c.className='cursor'; document.body.appendChild(c);
  const r = document.createElement('div'); r.className='cursor-ring'; document.body.appendChild(r);
  let mx=0, my=0, rx=0, ry=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; c.style.left=mx+'px'; c.style.top=my+'px'; });
  function animRing() { rx+=(mx-rx)*.12; ry+=(my-ry)*.12; r.style.left=rx+'px'; r.style.top=ry+'px'; requestAnimationFrame(animRing); }
  animRing();
  document.querySelectorAll('a,button').forEach(el => {
    el.addEventListener('mouseenter', () => { c.style.transform='translate(-50%,-50%) scale(2)'; r.style.transform='translate(-50%,-50%) scale(1.5)'; });
    el.addEventListener('mouseleave', () => { c.style.transform='translate(-50%,-50%) scale(1)'; r.style.transform='translate(-50%,-50%) scale(1)'; });
  });
}

// ── FORM HANDLER ──
window.handleSubmit = function(e) {
  e.preventDefault(); const btn=e.target, orig=btn.textContent;
  btn.textContent='✓ Заявка отправлена'; btn.style.background='#16a34a'; btn.style.color='#fff';
  setTimeout(()=>{btn.textContent=orig;btn.style.background='';btn.style.color='';},3000);
};

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  injectTopbar(); injectNav(); injectMobileNav(); injectFooter(); injectWidgets(); injectBottomNav(); injectSEO();
  // initMegaMenu - not used
  initProgressBar(); initAnimations(); initCounters();
  initLightbox(); initFloatingCTA(); initBackToTop(); initMobileMenu();
  try { initCursor(); } catch(e) {}
});
