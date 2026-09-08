export type ProductDetail = {
  title: string;
  description: string;
  x: number;
  y: number;
  href?: string;
  linkLabel?: string;
};

// Positions refer to the first square render in each product gallery.
// Descriptions use the imported catalogue; they do not identify undocumented ports or parts.
export const productDetails: Record<string, ProductDetail[]> = {
  equipment: [
    {
      title: 'Рабочее место хирурга',
      description:
        'Эргономика системы Stellaris Elite™ для комфортной работы хирурга.',
      x: 50,
      y: 16,
    },
    {
      title: 'Единая платформа',
      description:
        'Хирургия катаракты и витреоретинальные операции — передний и задний сегменты в одной системе.',
      x: 50,
      y: 43,
    },
    {
      title: 'Поддержка на всём пути',
      description:
        'Плановое обслуживание, диагностика, калибровка и оригинальные запчасти для Stellaris.',
      x: 51,
      y: 73,
      href: '/products/service.html',
      linkLabel: 'Подробнее о сервисе',
    },
  ],
  surgery: [
    {
      title: 'Ирригационные и аспирационные линии',
      description:
        'Линии входят в состав хирургических наборов для факоэмульсификации.',
      x: 17,
      y: 43,
    },
    {
      title: 'Наборы для факоэмульсификации',
      description:
        'Комплект расходных материалов в одной упаковке. Совместимость с системами Stellaris Elite™.',
      x: 39,
      y: 57,
    },
    {
      title: 'Дрейпы и защитные накладки',
      description:
        'Операционные дрейпы и защитные накладки входят в состав наборов. Комплектацию уточняем при подготовке предложения.',
      x: 89,
      y: 40,
    },
  ],
};
