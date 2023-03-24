import '../styles/main.scss';
import 'babel-polyfill';

function getModalPromise() {
  const modal = document.getElementById('myModal');
  return new Promise(function (resolve) {
    window.setTimeout(function () {
      resolve(modal);
    }, 1000 * 3);
  });
}

async function showModal() {
  let result = await getModalPromise();
  result.style.display = 'block';
  result.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
      result.style.display = 'none';
    }
  });
}

showModal();

// button after animation
const continueButton = document.querySelector('#continue');

continueButton.addEventListener('mouseover', async () => {
  const buttonAfterAnimation = await animation(continueButton);
  buttonAfterAnimation.classList.add('btn-info');
  alert('Continue to subscription!');
});

function animation(element) {
  return new Promise((resolve) => {
    element.addEventListener('animationend', () => {
      resolve(element);
    });
  });
}
