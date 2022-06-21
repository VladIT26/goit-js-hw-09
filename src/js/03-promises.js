import Notiflix from 'notiflix';

// const refs = {
//   inputDelay: document.querySelector('[name="delay"]'),
//   inputStep: document.querySelector('[name="step"]'),
//   inputAmount: document.querySelector('[name="amount"]'),
//   btnSubmit: document.querySelector('button'),
//   form: document.querySelector('form')
// }

// let delayByUser = parseInt(refs.inputDelay.value);
// const stepByUser = parseInt(refs.inputAmount.value);
// const amountByUser = parseInt(refs.inputStep.value);


// refs.form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   if (delayByUser < 0 && stepByUser < 0 && amountByUser < 0) {
//     return
//   };
  
//   for (position = 1, position <= amountByUser, position += 1) {
  
//   createPromise(position, delayByUser)
//   .then(value => {
//      Notiflix.Notify.success(value);
//   })
//   .catch(error => {
//      Notiflix.Notify.warning(error);
//   });
//   delayByUser += stepByUser;
//   };
// });

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject) => {
//     if (shouldResolve) {
//       resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     } else {
//       reject(`❌ Rejected promise ${position} in ${delay}ms`);
//     }
//   }, delay);
// }
