// task 1

const isArray = (input) => {
  if (toString.call(input) === '[object Array]') {
    return true;
  }
  return false;
};
console.log(isArray('w3resource'));
console.log(isArray([1, 2, 3, 4]));

// task 2
const arrayClone = (input) => [...input];

console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));

// or
const array1 = [1, 2, 4, 0];
const array2 = [1, 2, [4, 0]];
const copyArray1 = array1.map((x) => x);
const copyArray2 = array2.map((x) => x);

copyArray1.push(3);
copyArray2.push(5);

console.log(copyArray1);
console.log(copyArray2);

// or

const arrClone = (array) => array.slice(0);

console.log(arrClone([1, 2, 4, 0]));
console.log(arrClone([1, 2, [4, 0]]));

// task 3
const getFirstElement = (input, n) => {
  if (n === undefined) {
    return input[0];
  }
  if (n < 0) {
    return [];
  }
  return input.slice(0, n);
};

console.log(getFirstElement([7, 9, 0, -2]));
console.log(getFirstElement([], 3));
console.log(getFirstElement([7, 9, 0, -2], 3));
console.log(getFirstElement([7, 9, 0, -2], 6));
console.log(getFirstElement([7, 9, 0, -2], -3));

// task 4

const getLastElement = (input, n) => {
  if (n === undefined) {
    return input.slice(-1);
  }
  return input.slice(0, n);
};


console.log(getLastElement([7, 9, 0, -2]));
console.log(getLastElement([7, 9, 0, -2], 3));
console.log(getLastElement([7, 9, 0, -2], 6));

// task 5
const myColor = ['Red', 'Green', 'White', 'Black'];

console.log(myColor.join());
console.log(myColor.join(' '));
console.log(myColor.join('+'));
console.log(myColor.toString());

// task 6

const inputValue = 256894562464;

const newChar = inputValue.toString();
const str = ['0'];
const j = newChar.length;

for (let i = 0; i < j; i += 1) {
  if (newChar[i] % 2 === 0) {
    str.push('-', newChar[i]);
  } else {
    str.push(newChar[i]);
  }
}

console.log(str);

// task 7

const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(arr1.sort());

// task 8
const arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const newArr = arr2.slice().sort();
let most = [undefined, 0];
let counter = 0;

newArr.reduce((old, chr) => {
  old === chr ? ++counter > most[1] && (most = [chr, counter]) : (counter = 1);
  return chr;
});

console.log(`${most[0]} : ( ${most[1]} times )`);

// task 9
const sentence = 'The Quick Brown Fox';
const newSentence = sentence.split('');
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const result = [];

newSentence.map((item) => {
  if (upper.includes(item)) {
    result.push(item.toLowerCase());
  } else {
    result.push(item.toUpperCase());
  }
});
const newResult = result.join('');
console.log(newResult);

// task 10

const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (const i in a) {
  console.log(`row ${i}`);
  for (let j = 0, k = a[i].length; j < k; j += 1) {
    console.log(` ${a[i][j]}`);
  }
}

// task 11
function palindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

console.log(palindrome('kajak'));

// task 12

const baseArray = [23, 12, 34, 234, 78, 153, 987, 12, 43, 67, 13, 16, 12];
const filterArray = [34, 67, 32, 34, 98, 54, 67, 89, 345, 234, 12, 23];

function filterFunc(arrBase, arrFilter) {
  return arrBase.filter((val) => !arrFilter.includes(val));
}

console.log(filterFunc(baseArray, filterArray));
