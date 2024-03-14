export const products = [
  {
    id: 'peas',
    category: 'cartridges',
    name: 'горох',
    price: '50',
    kit: ['картридж'],
    images: [
      '/goroh.jpg',
      '/goroh1.jpg',
      '/goroh2.jpg'
    ],
    description: 'це горох',
  },
  {
    id: 'nasturtium',
    category: 'cartridges',
    name: 'настурція',
    price: '50',
    kit: ['картридж'],
    images: [
      '/nast1.jpg',
      '/nast2.jpg',
      '/nast3.jpg',
      '/nast4.jpg',
      '/nast5.jpg'
    ],
    description: 'це настурція',
  },
  {
    id: 'radish',
    category: 'cartridges',
    name: 'редиска',
    price: '50',
    kit: ['картридж'],
    images: [
      '/redis1.jpg',
      '/redis2.jpg',
      '/redis3.jpg',
      '/redis4.jpg'
    ],
    description: 'це редиска',
  },
  {
    id: 'watercres',
    category: 'cartridges',
    name: 'кресс-салат',
    price: '50',
    kit: ['картридж'],
    images: [
      '/cress1.jpg',
      '/cress2.jpg'
    ],
    description: 'це кресс-салат',
  },
  {
    id: 'mustard',
    category: 'cartridges',
    name: 'гірчиця',
    price: '50',
    kit: ['картридж'],
    images: [
      '/girch1.jpg',
      '/girch2.jpg',
      '/girch3.jpg'
    ],
    description: 'це гірчиця',
  },
  {
    age: 1, 
    id: 'T1',
    category: 'racks', 
    images: [
      '/t1-pdp1.png',
      '/t1-pdp2.png',
      '/t1-pdp3.png',
    ],
    description: 'Одне відділення під картридж із мікрозеленню. Чудове рішення для старту.',
    price: 600,
    kit: {
      'Розприскувач з рівнем': '1 шт.',
      'Дріт (micro USB)': '5 м.',
      'Інструкція': '1 шт.',
      'Картридж': '1 шт.',
      'Лоток': '1 шт.',
    },
    lamp: 1,
    power: 3,
  },
  {
    age: 2, 
    id: 'T2', 
    category: 'racks',
    images: [
      '/t2-pdp1.png',
      '/t2-pdp2.png',
      '/t2-pdp3.png',
    ],
    description: 'Два відділення під картридж із мікрозеленню. Чудове рішення для продвинутого.',
    price: 800,
    kit: {
      'Розприскувач з рівнем': '1 шт.',
      'Дріт (micro USB)': '5 м.',
      'Інструкція': '1 шт.',
      'Картридж': '2 шт.',
      'Лоток': '2 шт.',
    },
    lamp: 1,
    power: 6,
  }
];

export default products;