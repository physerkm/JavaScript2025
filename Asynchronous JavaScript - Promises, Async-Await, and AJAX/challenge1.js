/* 
In this challenge, we will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates.
For that, we will use a second API to geocode coordinates.

Here are our tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng).
(These are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates.
Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name.
Use this API to do reverse geocoding:
https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}
The AJAX call will be done to a URL with this format:
https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381
Use the fetch API and promises to get the data.
3. Once we have the data, take a look at it in the console to see all the attributes that we recieved about the provided location.
Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console.
5. This API allows us to make only 3 requests per second.
If we reload fast, we will get this error with code 403.
This is an error with the request.
Remember, fetch() does NOT reject the promise in this case.
So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Use the received data to render a country.
Take the relevant attribute from the geocoding API result.
Plug it into the countries API that we have been using.
7. Render the country and catch any errors.

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
*/

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} 💥`));
};
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
