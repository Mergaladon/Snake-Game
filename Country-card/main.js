console.log('JS is connected');

// grab elements
const nameInput = document.getElementById('nameInput');
const updateBtn = document.getElementById('updateBtn');
const countryName = document.getElementById('countryName');
const capital = document.getElementById('capital');
const region = document.getElementById('region');
const population = document.getElementById('population');

console.log({ nameInput, updateBtn, countryName, capital, region, population });

// main function to load a country from the API
async function loadCountry() {
  const userText = nameInput.value.trim();
  if (!userText) return;

  const url = `https://restcountries.com/v3.1/name/${userText}`;

  const response = await fetch(url);

  if (!response.ok) {
    countryName.textContent = 'Country not found';
    capital.textContent = '';
    region.textContent = '';
    population.textContent = '';
    return;
  }

  const data = await response.json();
  console.log(data);
  const country = data[0];

  countryName.textContent = country.name.common;
  capital.textContent = `Capital: ${country.capital ? country.capital[0] : 'N/A'}`;
  region.textContent = `Region: ${country.region}`;
  population.textContent = `Population: ${country.population.toLocaleString()}`;
}

// hook button to function
updateBtn.onclick = loadCountry;