export function getCars() {
    return fetch('https://city-mobil.ru/api/cars', {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => data);
}