// Zadanie 1

const sum = (a, b) => {
  const result = a + b;
  console.log(result);
};
sum(3, 5);

const myPow = (a, b) => Math.pow(a, b);

console.log(myPow(10, 2));

const hr = () => {
  console.log('------');
};

hr();


(function () {
  console.log('Prawie koniec');
});

// Zadanie 2

const ob = {
  counter: 0,
  showText() {
    setInterval(() => {
      this.counter++;
      const tekst = `Dzisiaj zjadłem ${this.counter} placków!`;
      console.log(tekst);
    }, 2500);
  },
};

// ob.showText();

// Zadanie 3

const obc = {
  favoriteColors: ['#30A9DE', '#F6B352', '#56A902', '#f9320c', '#181842'],
  bind() {
    const btn = document.querySelector('button');
    const container = document.querySelector('.container');
    btn.addEventListener('click', function () {
      for (let i = 0; i < this.favoriteColors.length; i++) {
        const newCreateNewDiv = document.createElement('div');
        newCreateNewDiv.style.width = `${100}px`;
        newCreateNewDiv.style.height = `${100}px`;
        newCreateNewDiv.classList.add('.element');
        newCreateNewDiv.style.color = '#fff';
        newCreateNewDiv.style.backgroundColor = `${this.favoriteColors[i]}`;

        container.appendChild(newCreateNewDiv);
      }
    }.bind(obc));
  },
};

obc.bind();
