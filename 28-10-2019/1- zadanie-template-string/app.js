
// task 1

function Person(name, height, birth) {
  this.name = name;
  this.height = height;
  this.birth = birth;
  this.calculateAge = function () {
    const date = moment(this.birth).fromNow();
    return date;
  };
  this.print = function () {
    return `Nazywam się ${this.name} mam ${this.height} wzrostu, mam ${this.calculateAge()}`;
  };
}

const damian = new Person('Damian', 192, '1986-05-15');

console.log(damian.print());

// task 2
const name = 'Damian';
const height = 192;
const age = 33;

const tagfunction = (parts, ...rest) => {
  let str = '';
  parts.forEach((el, i) => {
    str += el;
    if (rest[i] !== undefined) {
      str += `<strong>${rest[i]}</strong>`;
    }
  });
  return str;
};

const text = tagfunction`Nazywam się ${name}
Mój wzrost to ${height}
Mam ${age} lata.`;
document.querySelector('body').innerHTML = text;

