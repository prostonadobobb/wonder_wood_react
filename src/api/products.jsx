export const products = [
  {
    id: "peas",
    category: "cartridges",
    name: "горох",
    price: "50",
    kit: {"Картридж": "1 шт."},
    images: [
      "/goroh.jpg",
      "/goroh1.jpg",
      "/goroh2.jpg"
    ],
    description: "Мікрозелень гороху є багатим джерелом фітоестрогенів. Ці сполуки рослинного походження часто відомі через здатність знижувати ризик раку молочної залози, серцевих захворювань та остеопорозу.",
  },
  {
    id: "nasturtium",
    category: "cartridges",
    name: "настурція",
    price: "50",
    kit: {"Картридж": "1 шт."},
    images: [
      "/nast1.jpg",
      "/nast2.jpg",
      "/nast3.jpg",
      "/nast4.jpg",
    ],
    description: "Мікрозелень настурції — незамінна складова у дієтичному раціоні та у здоровому зарчуванні. Сприяє нормалізації травлення, зниженню ваги та уповільнює старіння організму. Має пряно-перцевий присмак, доповнює смакову палітру овочевих, м'ясних та рибних страв.",
  },
  {
    id: "radish",
    category: "cartridges",
    name: "редиска",
    price: "50",
    kit: {"Картридж": "1 шт."},
    images: [
      "/redis1.jpg",
      "/redis2.jpg",
      "/redis3.jpg",
      "/redis4.jpg"
    ],
    description: "це редиска",
  },
  {
    id: "watercres",
    category: "cartridges",
    name: "кресс-салат",
    price: "50",
    kit: {"Картридж": "1 шт."},
    images: [
      "/cress1.jpg",
      "/cress2.jpg"
    ],
    description: "це кресс-салат",
  },
  {
    id: "mustard",
    category: "cartridges",
    name: "гірчиця",
    price: "50",
    kit: {"Картридж": "1 шт."},
    images: [
      "/girch1.jpg",
      "/girch2.jpg",
      "/girch3.jpg"
    ],
    description: "це гірчиця",
  },
  {
    id: "T1",
    name: "T1",
    category: "racks", 
    images: [
      "/t1-pdp1.png",
      "/t1-pdp2.png",
      "/t1-pdp3.png",
    ],
    description: "Одне відділення під картридж із мікрозеленню. Чудове рішення для старту.",
    price: 600,
    kit: {
      "Розприскувач з рівнем": "1 шт.",
      "Дріт (micro USB)": "5 м.",
      "Інструкція": "1 шт.",
      "Картридж": "1 шт.",
      "Лоток": "1 шт.",
    },
    lamp: 1,
    power: 3,
  },
  {
    id: "T2", 
    name: "T2",
    category: "racks",
    images: [
      "/t2-pdp1.png",
      "/t2-pdp2.png",
      "/t2-pdp3.png",
    ],
    description: "Два відділення під картридж із мікрозеленню. Чудове рішення для продвинутого.",
    price: 800,
    kit: {
      "Розприскувач з рівнем": "1 шт.",
      "Дріт (micro USB)": "5 м.",
      "Інструкція": "1 шт.",
      "Картридж": "2 шт.",
      "Лоток": "2 шт.",
    },
    lamp: 1,
    power: 6,
  }
];

export default products;