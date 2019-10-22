const btns = document.querySelectorAll('.car-toggle-det' +
  '' +
  '' +
  '' +
  'ail');


btns.forEach((el) => {
  el.addEventListener('click', function (e) {
    if (el.getAttribute('data') === 'close') {
      e.target.closest('.car').children[1].style.display = 'flex';
      e.target.closest('.car').classList.add('car-show-detail');
      this.innerHTML = 'schowaj detale';
      this.setAttribute('data', 'open');
    } else {
      e.target.closest('.car').classList.remove('car-show-detail');
      e.target.closest('.car').children[1].style.display = 'none';
      this.innerHTML = 'pokaż detale';
      this.setAttribute('close', 'true');
    }
  });
});
