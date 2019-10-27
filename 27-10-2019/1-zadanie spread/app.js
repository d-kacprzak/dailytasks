// task
const randomTable = (lng, min = 0, max = 10) => {
  const createRandomTable = [...new Array(lng)]
    .map(() => Math.round(Math.random() * (max - min) + min));
  const getMinValue = Math.min(...createRandomTable);
  const getMaxValue = Math.max(...createRandomTable);

  function minMax() {
    return { createRandomTable, getMinValue, getMaxValue };
  }
  return minMax;
};

const ranTab = randomTable(10, 5, 50);
console.log(`Tablica wartości: ${ranTab().createRandomTable}`);
console.log(`Minimalna wartość: ${ranTab().getMinValue}`);
console.log(`Maksymalna wartość: ${ranTab().getMaxValue}`);


// or

const randomTable2 = (lng, min = 0, max = 10) => Array(lng).fill().map(() => Math.round(Math.random() * (max - min) + min));

const getRandomTable = randomTable2(10, 5, 50);

const getMin = Math.min(...getRandomTable);
const getMax = Math.max(...getRandomTable);

console.log(`Minimalna wartość: ${getMin}`);
console.log(`Minimalna wartość: ${getMax}`);
console.log(`Maksymalna wartość: ${getRandomTable}`);

// task 2
const printBig = (...rest) => rest.map((item) => item.toUpperCase());
console.log(printBig('pies', 'świnka', 'kot'));

// task 3
const avg = (...rest) => rest.filter((number) => typeof number === 'number').reduce((prev, next, index, array) => {
  prev += next;
  if (index === array.length - 1) {
    return prev / array.length;
  }
  return prev;
}, 0);


console.log(avg(1, 3, 62, '20', '30', '50', 60));

// or
const avgFilter = (el) => typeof el === 'number';
const avgReduce = (prev, next, index, array) => {
  prev += next;
  if (index === array.length - 1) {
    return prev / array.length;
  }
  return prev;
};

const avg2 = (...rest) => rest.filter(avgFilter).reduce(avgReduce);
console.log(avg2('secend', 2, 5, '13', 6, 107, '15', 'word'));

// task 4
const second = (...rest) => rest.map((el) => {
  console.log(el);
});


const first = (...rest) => {
  console.log('Witam Serdecznie');
  second(...rest);
};

first(1, 5, 'word', 'other', 2, 60, 'cos');
