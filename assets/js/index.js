const vintage = document.querySelector('#vintage-num');
const levi = document.querySelector('#levi-num');
const total = document.querySelector('#total');
const addVintage = document.querySelector('#vintage_add');
const subVintage = document.querySelector('#vintage_minus');
const addLevi = document.querySelector('#levi_add');
const subLevi = document.querySelector('#levi_sub');
const shipping = document.querySelector('#shipping');
const countrySelect = document.querySelector('#country');

const num = {
  levi: 1,
  vintage: 1,
  shipping: 19,
  leviAdd: () => {
    num.levi++;
    num.shipping++;
    num.total();
    return (levi.textContent = num.levi);
  },
  leviMinus: () => {
    if (num.levi === 0) return null;
    num.levi--;
    num.shipping--;
    num.total();
    return (levi.textContent = num.levi);
  },
  vintageAdd: () => {
    num.vintage++;
    num.shipping++;
    num.total();
    return (vintage.textContent = num.vintage);
  },
  vintageMinus: () => {
    if (num.vintage === 0) return null;
    num.vintage--;
    num.shipping--;
    num.total();
    return (vintage.textContent = num.vintage);
  },
  total: () => {
    const newTotal = (54.99 * num.vintage + 74.99 * num.levi).toFixed(2);
    shipping.textContent = `$${
      num.levi == 0 && num.vintage == 0 ? '0' : num.shipping
    }`;
    return (total.textContent = `$${newTotal}`);
  },
};

addLevi.addEventListener('click', num.leviAdd, false);
subLevi.addEventListener('click', num.leviMinus, false);
addVintage.addEventListener('click', num.vintageAdd, false);
subVintage.addEventListener('click', num.vintageMinus, false);

// country elements
const getData = async () => {
  const url = `https://restcountries.com/v3.1/all`;
  const data = await fetch(url);
  const country = await data.json();
  return country;
};

if (localStorage.getItem('country') == undefined) {
  getData().then((country) => {
    const countryNames = [];
    for (const items of country) {
      countryNames.push(items?.name?.common);
    }
    return localStorage.setItem('country', JSON.stringify(countryNames));
  });
}

const countryElements = () => {
  const country = JSON.parse(localStorage.getItem('country'));
  country.sort();
  for (const item of country) {
    const countryName = document.createElement('option');
    countryName.textContent = item;
    countrySelect.appendChild(countryName);
  }
};
countryElements();
