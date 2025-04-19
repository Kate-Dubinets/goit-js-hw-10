import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault();

  const delay = Number(e.target.elements.delay.value);
  const state = e.target.elements.state.value;

  createPromise(delay, state)
    .then(ms => {
      iziToast.success({
        title: '✅ Fulfilled',
        message: `Fulfilled promise in ${ms}ms`,
        position: 'topRight',
      });
    })
    .catch(ms => {
      iziToast.error({
        title: '❌ Rejected',
        message: `Rejected promise in ${ms}ms`,
        position: 'topRight',
      });
    });

  e.target.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });
}
