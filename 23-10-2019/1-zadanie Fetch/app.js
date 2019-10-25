const searchInput = document.querySelector('#search');
const btnSubmit = document.querySelector('button[type=submit]');


btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const getSearchValue = searchInput.value;
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${getSearchValue}`)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    })
    .then((resp) => {
      const { items } = resp;
      for (const i in items) {
        console.log(items[i].volumeInfo.title);
      }
    })
    .catch((error) => {
      if (error.status === 404) {
        console.log('Błąd: adres nie istnieje');
      }
    });
});
