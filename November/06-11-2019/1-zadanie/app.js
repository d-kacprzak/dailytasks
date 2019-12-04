const inputNumberOne = document.querySelector('#numberone');
const inputNumberTwo = document.querySelector('#numbertwo');
const btnMultiply = document.querySelector('#btnMultiply');
const btnDivide = document.querySelector('#btnDivide');
const result = document.querySelector('.result');

const multiply = () => inputNumberOne.value * inputNumberTwo.value;
const divide = () => inputNumberOne.value / inputNumberTwo.value;

btnMultiply.addEventListener('click', (e) => {
  e.preventDefault();
  result.innerHTML = `The Result Is: ${multiply()}`;
  inputNumberOne.value = '';
  inputNumberTwo.value = '';
});

btnDivide.addEventListener('click', (e) => {
  e.preventDefault();
  result.innerHTML = `The Result Is: ${divide()}`;
  inputNumberOne.value = '';
  inputNumberTwo.value = '';
});
