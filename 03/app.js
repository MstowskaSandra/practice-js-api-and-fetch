document.addEventListener('DOMContentLoaded', init);
let apiData;

function init() {
    console.log('DOM');
    const promise = fetch('http://edns.ip-api.com/json');

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
            console.log('API OK')
        });
}

const btn = document.querySelector('button');
const span = document.querySelector('span');

btn.addEventListener('click', clickBtn);

function clickBtn() {
    span.innerText = `${apiData.dns.ip}`;
} 

