// 1
const firstElmodule = document.querySelector('.module');
console.log(firstElmodule);

// 2
const collectionElModule = document.querySelectorAll('.module');
console.log(collectionElModule);

const lastElModule = document.querySelectorAll('.col>.module')[2];

console.log(lastElModule);

const listLi = document.querySelectorAll('.list li');

console.log(listLi);

const listaLiMiddle = document.querySelectorAll('.list li:nth-child(4)');
console.log(listaLiMiddle);

const allButton = document.querySelectorAll(`button[type="button"]`);
console.log(allButton);

const btnSubmit = document.querySelector('button[type="submit"]');
console.log(btnSubmit);

const docBody = document.querySelectorAll('body');
console.log(docBody);
