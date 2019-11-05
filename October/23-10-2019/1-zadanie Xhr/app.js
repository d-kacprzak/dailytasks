const searchInput = document.querySelector('#search');
const btnSubmit = document.querySelector('button[type=submit]');

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const getSearchValue = searchInput.value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${getSearchValue}`, true);

  xhr.addEventListener('load', function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      const { items } = response;
      for (const i in items) {
        console.log(items[i].volumeInfo.title)
      }
    }
  });

  xhr.send();
});
