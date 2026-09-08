export type ProductHighlight = {
  badge: string;
  headline: string;
  summary: string;
  facts: { value: string; label: string }[];
  chips: string[];
  tone: 'ice' | 'blue' | 'amber';
  factLayout?: 'list';
  family?: 'enVista' | 'LuxGood' | 'LuxSmart';
  partner?: string;
};

// Editorial extracts from lib/products.json. These explain catalogue facts;
// they do not predict an individual clinical outcome.
export const productHighlights: Record<string, ProductHighlight> = {
  envista: {
    badge: 'Advanced Optics',
    tone: 'ice',
    family: 'enVista',
    partner: 'envista-toric',
    headline: 'Безаберрационная оптика. Продуманная конструкция.',
    summary:
      'AO-оптика, гидрофобный акрил и модифицированная С-образная гаптика — ключевые особенности enVista®.',
    facts: [
      { value: 'AO', label: 'оптическая технология' },
      { value: '6 мм', label: 'диаметр оптики' },
      { value: '12,5 мм', label: 'общий диаметр' },
    ],
    chips: ['Гидрофобный акрил', 'Край SureEdge™'],
  },
  'envista-toric': {
    badge: 'Toric',
    tone: 'blue',
    family: 'enVista',
    partner: 'envista',
    headline: 'Торическая оптика в семействе enVista.',
    summary:
      'Торический дизайн и асферическая безаберрационная оптика. Цилиндр в плоскости ИОЛ — от +1,25 до +5,75 D.',
    facts: [
      { value: 'Toric', label: 'торическая оптика' },
      { value: '6 мм', label: 'диаметр оптики' },
      { value: '12,5 мм', label: 'общий диаметр' },
    ],
    chips: ['Цилиндр +1,25–5,75 D', 'Гидрофобный акрил'],
  },
  luxgood: {
    badge: 'Accuject™ Pro',
    tone: 'amber',
    family: 'LuxGood',
    partner: 'luxgood-toric',
    headline: 'Линза уже в системе имплантации.',
    summary:
      'Монофокальная LuxGood™ поставляется предзагруженной в инжектор Accuject™ Pro для имплантации через разрез 2,2 мм.',
    facts: [
      { value: '2,2 мм', label: 'разрез' },
      { value: '6 мм', label: 'диаметр оптики' },
      { value: '12,5 мм', label: 'общий диаметр' },
    ],
    chips: ['Предзагруженная', 'Квадратный край 360°'],
  },
  'luxgood-toric': {
    badge: 'Toric · Preloaded',
    tone: 'amber',
    family: 'LuxGood',
    partner: 'luxgood',
    headline: 'Торическая линза. Предзагруженная система.',
    summary:
      'LuxGood™ Toric объединяет торическую оптику, монолитную четырёхточечную гаптику и инжектор Accuject™ Pro.',
    facts: [
      { value: '2,2 мм', label: 'разрез' },
      { value: '6 D', label: 'максимальный цилиндр' },
      { value: '4 точки', label: 'гаптика' },
    ],
    chips: ['Accuject™ Pro', 'Цилиндр до 6 D'],
  },
  luxsmart: {
    badge: 'EDOF · ПРО',
    tone: 'amber',
    family: 'LuxSmart',
    partner: 'luxsmart-toric',
    headline: 'Углублённый фокус. Рефракционная оптика.',
    summary:
      'В основе LuxSmart™ — технология ПРО: полностью рефракционная оптика. Линза выполнена на монолитной четырёхточечной платформе.',
    facts: [
      { value: 'EDOF', label: 'тип оптики' },
      { value: '6 мм', label: 'диаметр оптики' },
      { value: '11 мм', label: 'общий диаметр' },
    ],
    chips: ['Полностью рефракционная оптика', '4-точечная платформа'],
  },
  'luxsmart-toric': {
    badge: 'EDOF + Toric',
    tone: 'amber',
    family: 'LuxSmart',
    partner: 'luxsmart',
    headline: 'EDOF и торический дизайн в одной линзе.',
    summary:
      'Торическая версия LuxSmart™: EDOF-оптика, торический дизайн задней поверхности и монолитная четырёхточечная конструкция.',
    facts: [
      { value: 'EDOF', label: 'тип оптики' },
      { value: '+6 D', label: 'максимальный цилиндр' },
      { value: '4 точки', label: 'конструкция' },
    ],
    chips: ['Торический дизайн', 'Гидрофобный акрил'],
  },
  akreos: {
    badge: '4-точечная фиксация',
    tone: 'ice',
    headline: 'Четыре точки опоры. Три размера.',
    summary:
      'Akreos® AO — гидрофильная линза с безаберрационной оптикой. В каталоге представлены три размера для разных капсульных мешков.',
    facts: [
      { value: '26%', label: 'содержание воды' },
      { value: '4 точки', label: 'фиксация' },
      { value: '3', label: 'размера конструкции' },
    ],
    chips: ['Гидрофильный акрил', 'Безаберрационная оптика'],
  },
  equipment: {
    badge: 'Передний + задний сегменты',
    tone: 'blue',
    headline: 'Два направления хирургии. Одна платформа.',
    summary:
      'Stellaris Elite™ объединяет хирургию катаракты и витреоретинальные операции. Технологии Stable Chamber™, Attune™ и инструменты Bi-Blade®.',
    facts: [
      { value: '2 в 1', label: 'передний и задний сегменты' },
      { value: '7 500', label: 'максимум резов / мин' },
      { value: '28,5 кГц', label: 'частота ультразвука' },
    ],
    chips: ['Stable Chamber™', '23G · 25G · 27G'],
  },
  silicone: {
    factLayout: 'list',
    badge: 'Материалы для витреоретинальной хирургии',
    tone: 'ice',
    headline: 'Материалы под задачи операционной.',
    summary:
      'Силиконовые масла различной вязкости, EYEFILL® H.D. и сбалансированный солевой раствор — ассортимент витреоретинальных материалов.',
    facts: [
      { value: 'Масла', label: 'различная вязкость' },
      { value: 'EYEFILL® H.D.', label: 'витреоретинальный материал' },
      { value: 'БСС', label: 'солевой раствор' },
    ],
    chips: ['Силиконовые масла', 'EYEFILL® H.D. · БСС'],
  },
  surgery: {
    factLayout: 'list',
    badge: 'Для Stellaris Elite™',
    tone: 'blue',
    headline: 'Нужные компоненты в одном наборе.',
    summary:
      'Наборы для факоэмульсификации, линии, наконечники и защитные материалы. Комплектацию согласуем при подготовке предложения.',
    facts: [
      { value: 'Линии', label: 'ирригация и аспирация' },
      { value: 'Наконечники', label: 'факоэмульсификация' },
      { value: 'Дрейпы', label: 'защитные материалы' },
    ],
    chips: ['Наборы для факоэмульсификации', 'Совместимость со Stellaris'],
  },
  service: {
    badge: 'Специализация — Stellaris',
    tone: 'ice',
    headline: 'Поддержка оборудования на всём сроке работы.',
    summary:
      'Плановое ТО, диагностика, калибровка и ремонт. Сертифицированные инженеры и оригинальные компоненты для систем Stellaris.',
    facts: [
      { value: '103', label: 'аппарата на обслуживании' },
      { value: 'ТО', label: 'плановое обслуживание' },
      { value: 'Ремонт', label: 'выезд и сервисный центр' },
    ],
    chips: ['Сертифицированные инженеры', 'Оригинальные запчасти'],
  },
};

export function productComparisonHref(slug: string) {
  const other =
    productHighlights[slug]?.partner ||
    (slug === 'envista' ? 'luxsmart' : 'envista');
  return (
    '/products/iol.html?compare=' +
    encodeURIComponent(slug + ',' + other) +
    '#compare'
  );
}
