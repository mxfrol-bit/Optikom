import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';
import './effects.css';
import './product-features.css';
export const metadata: Metadata = {
  metadataBase: new URL(
    'https://optikom-vision-test-production.up.railway.app',
  ),
  robots: { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
  title: 'Оптиком — новый взгляд на офтальмологию',
  description:
    'Официальный дистрибьютор Bausch + Lomb в России. Интраокулярные линзы, хирургическое оборудование и сервис для вашей клиники с 2006 года.',
  openGraph: {
    title: 'Оптиком — дистрибьютор Bausch + Lomb',
    description:
      'Поставки ИОЛ и хирургического оборудования в 100+ клиник России с 2006 года',
    images: ['/assets/products/stellaris-front-v2.webp'],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="preload"
          href="/fonts/95a493061fe0a8d0.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/2f175b8fc40ed4e8.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
