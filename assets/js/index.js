const vintage = document.querySelector('#vintage-num');
const levi = document.querySelector('#levi-num');
const total = document.querySelector('#total');
const addVintage = document.querySelector('#vintage_add');
const subVintage = document.querySelector('#vintage_minus');
const addLevi = document.querySelector('#levi_add');
const subLevi = document.querySelector('#levi_sub');
const shipping = document.querySelector('#shipping');

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
    shipping.textContent = `$${num.shipping * 2}`;
    return (total.textContent = `$${newTotal}`);
  },
};

addLevi.addEventListener('click', num.leviAdd, false);
subLevi.addEventListener('click', num.leviMinus, false);
addVintage.addEventListener('click', num.vintageAdd, false);
subVintage.addEventListener('click', num.vintageMinus, false);
