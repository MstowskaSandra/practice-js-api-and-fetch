document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        const inputLatitude = document.querySelector('.form__field--lat');
        const inputLongitude = document.querySelector('.form__field--lng');
        latitude = inputLatitude.value;
        longitude = inputLongitude.value;
        init();
    });
});

let apiData;
let latitude;
let longitude;
const key = 'f5662bc59e904427ae9be3b4822d89fe';

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
        })
        .catch(err => console.error(err))
        .finally(() => {
            console.log('API ok')
        });
}



