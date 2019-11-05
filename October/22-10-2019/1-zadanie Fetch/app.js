const map = L.map('mapid').setView([51.919437, 19.145136], 5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1Ijoia2FydG9mZWxlazAwNyIsImEiOiJjanRpazhyM2owbHUwNDluem40Ynljdm5hIn0.kYoJkNni5ksRyA0gy1yV7A',
}).addTo(map);

/*----------------------------------------------------
 !!! powyzszego nie ruszaj, to mapa wstawiona za pomocą leafletjs
 wzorowana na tutorialu ze strony: https://leafletjs.com/examples/quick-start/
 Skrypt pisz poniżej
 ----------------------------------------------------*/


const choiceCountry = document.querySelector('#countrySelect');

fetch('https://restcountries.eu/rest/v2/all?fields=iso2Code;name')
  .then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
    return Promise.reject(resp);
  })
  .then((respData) => {
    let output = '';

    for (const i in respData) {
      output += `<option value="${respData[i].name}">${respData[i].name}</option>`;
    }
    choiceCountry.removeAttribute('disabled');
    choiceCountry.innerHTML = output;
    return respData;
  })
  .catch((error) => console.dir('Błąd', error));

choiceCountry.addEventListener('change', (e) => {
  e.preventDefault();
  const getTargetValue = e.target.value;
  fetch(`https://restcountries.eu/rest/v2/name/${getTargetValue}`)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    })
    .then((respCountry) => {
      const countryData = document.querySelector('.country-sidebar');
      let outputCountry = '';
      const [name] = respCountry;
      const {
        region, flag, capital, subregion, population, timezones, latlng,
      } = name;

      outputCountry += `
                <div class="country-flag" >
                    <img  id="countryFlag" src="${flag}">
                </div>
                 <div class="country-data" id="countryData">
                    <h3 class="country-name">
                       ${name}
                    </h3>
                    <div>
                        Stolica: <strong>${capital}</strong>
                    </div>
                    <div>
                        Region: <strong>${region}</strong>
                    </div>
                    <div>
                        Podregion: <strong>${subregion}</strong>
                    </div>
                    <div>
                        Liczba ludności: <strong>${population}</strong>
                    </div>
                    <div>
                        Strefa czasowa: <strong>${timezones}</strong>
                    </div>
                </div>`;
      const lat = `${latlng[0]}`;
      const lng = `${latlng[1]}`;
      map.setView([lat, lng], 6);

      const marker = L.marker([0, 0]).addTo(map);

      marker.setLatLng([lat, lng]);
      marker.bindPopup('<b>Hello</b><br>I am a here').openPopup();
      countryData.innerHTML = outputCountry;
    });
});
