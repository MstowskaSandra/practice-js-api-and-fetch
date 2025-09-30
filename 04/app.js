document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const inputLatitude = document.querySelector('.form__field--lat');
        const inputLongitude = document.querySelector('.form__field--lng');
        latitude = inputLatitude.value.trim();
        longitude = inputLongitude.value.trim();
        init();
    });
});

let apiData;
let latitude;
let longitude;
const key = 'f5662bc59e904427ae9be3b4822d89fe';
const weatherLat = document.querySelector('.weather__lat');
const weatherLng = document.querySelector('.weather__lng');
const weatherSummary = document.querySelector('.weather__summary');
const weatherTemp = document.querySelector('.weather__temperature');


function init() {
    console.log('DOM');
    const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lang=pl&lat=${latitude}&lon=${longitude}`);

    promise
        .then(resp => {
            if(resp.ok) {
                return resp.json()
            }
            return Promise.reject(resp);
        })
        .then(ip => {
            apiData = ip;
            console.log("API", apiData);
            weatherLat.innerText = latitude;
            weatherLng.innerText = longitude;
            weatherSummary.innerText = apiData.data[0].weather.description;
            weatherTemp.innerText = apiData.data[0].temp;
        })
        .catch(err => console.error(err))
        .finally(() => {
            console.log('API ok')
        });
}




