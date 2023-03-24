const apiUrl = 'https://api.coinbase.com/v2/prices/';
const form = document.querySelector('form');

async function convert(e) {
  e.preventDefault();
  //   console.log(e.target);
  const entryField = document.querySelector('.entryField');
  const outputField = document.querySelector('.outputField');
  const input = document.querySelector('#cryptoInput');
  const output = document.querySelector('#cryptoOutput');
  console.log(typeof outputField.value);

  const url = `${apiUrl}${entryField.value}-${outputField.value}/spot`;
  //   https://api.coinbase.com/v2/prices/btc-eur/spot
  const response = await fetch(url);
  const result = await response.json();
  output.value = (result.data.amount * input.value).toFixed(2);
}

form.addEventListener('submit', convert);
