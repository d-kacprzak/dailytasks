import users from './data/users-data';
import './scss/style.scss';
// task 1

const obj = {
  name: 'Marcin',
  surname: 'Kowalski',
  age: 20,
};

const { name, surname, age } = obj;

console.log(name, surname, age);

// task 2

const tab = [1, 2, 3, 4, 5];

const [a, b, , c] = tab;

console.log(a, b, c);

// task 3

users.forEach((el) => {
  const {
    id,
    first_name: name,
    last_name: surname,
    gender,
    user_image: img = 'brak img',
    email = 'brak emaila',
    user_phone: phone = 'brak telefonu',
  } = el;
  // console.log(id, name, surname, gender, email, img, phone);
});

// or

users.map((item) => {
  const {
    id,
    first_name: name,
    last_name: surname,
    gender,
    user_image: img = 'brak img',
    email = 'brak emaila',
    user_phone: phone = 'brak telefonu',
  } = item;

//   `${name}${surname}
// płeć: ${gender}email: ${email} avatar: ${img} telefon: ${phone}`;

  
  const div = document.createElement('div');
  div.classList.add('user');
  div.innerHTML = `</strong>${name} ${surname}</strong>`;
  // div.innerHTML = text;
  document.querySelector('.container').appendChild(div);
});
