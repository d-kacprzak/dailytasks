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
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.eu/rest/v2/all?fields=iso2Code;name', true);

xhr.addEventListener('load', function () {
  if (this.status === 200) {
    const country = JSON.parse(this.responseText);
    let output = '';
    for (const i in country) {
      output += `<option value="${country[i].name}">${country[i].name}</option>`;
    }
    choiceCountry.removeAttribute('disabled');
    choiceCountry.innerHTML = output;
  }
});

xhr.addEventListener('error', () => {
  console.log('Wystapił błąd');
});

xhr.send();

choiceCountry.addEventListener('change', (e) => {
  const getOptionValue = e.target.value;
  const xhrGetNameCountry = new XMLHttpRequest();
  xhrGetNameCountry.open('GET', `https://restcountries.eu/rest/v2/name/${getOptionValue}`, true);
  const marker = L.marker([0, 0]).addTo(map);
  xhrGetNameCountry.addEventListener('load', function () {
    if (this.status === 200) {
      const getData = JSON.parse(this.responseText);
      const countryData = document.querySelector('.country-sidebar');
      let output = '';
      let lat = '';
      let lng = '';
      for (const i in getData) {
        output += `
                <div class="country-flag" >
                    <img  id="countryFlag" src="${getData[i].flag}">
                </div>
                 <div class="country-data" id="countryData">
                    <h3 class="country-name">
                       ${getData[i].name}
                    </h3>
                    <div>
                        Stolica: <strong>${getData[i].capital}</strong>
                    </div>
                    <div>
                        Region: <strong>${getData[i].region}</strong>
                    </div>
                    <div>
                        Podregion: <strong>${getData[i].subregion}</strong>
                    </div>
                    <div>
                        Liczba ludności: <strong>${getData[i].population}</strong>
                    </div>
                    <div>
                        Strefa czasowa: <strong>${getData[i].timezones}</strong>
                    </div>
                </div>`;
        lat = `${getData[i].latlng[0]}`;
        lng = `${getData[i].latlng[1]}`;
        map.setView([lat, lng], 6);
      }

      marker.setLatLng([lat, lng]);
      marker.bindPopup('<b>Hello</b><br>I am a here').openPopup();
      countryData.innerHTML = output;
    }
  });
  xhrGetNameCountry.send();
});
