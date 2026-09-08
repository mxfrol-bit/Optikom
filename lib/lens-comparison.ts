import products from './products.json';

export type ComparedLens = {
  slug: string;
  name: string;
  image: string;
  href: string;
  values: string[];
};

const names: Record<string, string> = {
  envista: 'enVista®',
  'envista-toric': 'enVista™ Toric',
  luxgood: 'LuxGood™',
  'luxgood-toric': 'LuxGood™ Toric',
  luxsmart: 'LuxSmart™',
  'luxsmart-toric': 'LuxSmart™ Toric',
  akreos: 'Akreos® AO',
};

export const lensComparison: ComparedLens[] = Object.entries(names).map(
  ([slug, name]) => {
    const product = products.find((item) => item.slug === slug)!;
    const items = product.specs.flatMap((spec) => spec.items);
    const value = (prefix: string) =>
      items
        .find((item) => item.startsWith(prefix))
        ?.slice(prefix.length)
        .trim() || 'Не указан в каталоге';
    const preloaded = product.features.find((item) => /Accuject/i.test(item));
    return {
      slug,
      name,
      image: product.image,
      href: product.href,
      values: [
        slug === 'akreos'
          ? 'монофокальная'
          : product.tag.replace('ИОЛ ', '').replace(' Preloaded', ''),
        product.specs.find((spec) => spec.title === 'Материал')?.items[0] ||
          'Не указан в каталоге',
        value('Диаметр оптики:'),
        value('Общий диаметр:'),
        preloaded ? 'Предзагруженная · Accuject™ Pro' : 'Не указана в каталоге',
      ],
    };
  },
);
