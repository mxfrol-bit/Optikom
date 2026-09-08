'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';

const nav = [
  ['ИОЛ', '/products/iol.html'],
  ['Продукция', '/products/index.html'],
  ['Сервис', '/products/service.html'],
  ['О компании', '/about.html'],
  ['Контакты', '/contact.html'],
];
const lensPages = [
  'iol',
  'envista',
  'envista-toric',
  'luxgood',
  'luxgood-toric',
  'luxsmart',
  'luxsmart-toric',
  'akreos',
];

function isCurrent(path: string, href: string) {
  if (href === '/products/iol.html')
    return lensPages.some((slug) => path === '/products/' + slug + '.html');
  if (href === '/products/index.html')
    return ['index', 'equipment', 'silicone', 'surgery'].some(
      (slug) => path === '/products/' + slug + '.html',
    );
  return path === href;
}

export function Brand() {
  return (
    <a className="brand" href="/" aria-label="Оптиком — главная">
      <span className="original-brand-symbol" aria-hidden="true">
        <img src="/assets/original/logo.png" alt="" width="1365" height="768" />
      </span>
      <span className="brand-wordmark">
        <span className="brand-name">ОПТИКОМ</span>
        <span className="brand-tagline">Технологии ясного зрения</span>
      </span>
    </a>
  );
}

export function Header() {
  const pathname = usePathname() || '/';
  return (
    <>
      <a href="#main" className="skip-link">
        К содержимому
      </a>
      <header className="header">
        <Brand />
        <nav className="desktop-nav" aria-label="Основная навигация">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              aria-current={isCurrent(pathname, href) ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="button small primary header-contact"
            href="/contact.html"
          >
            Обсудить задачу <ArrowUpRight size={16} />
          </a>
          <Sheet>
            <SheetTrigger className="menu-button" aria-label="Открыть меню">
              <Menu size={23} />
            </SheetTrigger>
            <SheetContent className="mobile-sheet" showCloseButton={false}>
              <SheetClose
                className="mobile-menu-close"
                aria-label="Закрыть меню"
              >
                <X size={23} />
              </SheetClose>
              <SheetTitle>Оптиком</SheetTitle>
              <SheetDescription>
                Технологии ясного зрения с 2006 года
              </SheetDescription>
              <nav aria-label="Мобильная навигация">
                {nav.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    aria-current={
                      isCurrent(pathname, href) ? 'page' : undefined
                    }
                  >
                    {label === 'ИОЛ' ? 'Интраокулярные линзы' : label}{' '}
                    <ArrowUpRight size={20} />
                  </a>
                ))}
              </nav>
              <a className="button primary" href="tel:+78312140067">
                +7 (831) 214-00-67
              </a>
              <a className="mobile-menu-email" href="mailto:info@optikom.pro">
                info@optikom.pro <ArrowUpRight size={17} />
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
