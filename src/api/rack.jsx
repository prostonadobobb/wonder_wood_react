export const products = [
  {
    age: 1, 
    id: 'T1',
    category: 'rack', 
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
    category: 'rack',
    images: [
      '/t2-pdp1.png',
      '/t2-pdp2.png',
      '/t2-pdp3.png',
    ],
    description: 'Два відділення під картридж із мікрозеленню. Чудове рішення для старту.',
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