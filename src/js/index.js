const form = document.querySelector('#contacts-form');
const hamburgerElement = document.querySelector('#hamburger');
const closeMenuButton = document.querySelector('#close-button');
const socialSection = document.querySelector('#social');
const promoMenuSection = document.querySelector('#menu');
const overplayElement = document.querySelector('#overplay');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const requestData = Object.fromEntries(formData.entries());

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
    .then(response => response.json())
    .then(data => {
      alert('Данные успешно отправленны');
      console.log('Успешно отправлено:', data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
});

hamburgerElement.addEventListener('click', function (event) {
  overplayElement.setAttribute('style', 'display:block');
  promoMenuSection.setAttribute('style', 'display:flex');
  socialSection.setAttribute('style', 'display:none');
});

closeMenuButton.addEventListener('click', function (event) {
  overplayElement.setAttribute('style', 'display:none');
  promoMenuSection.setAttribute('style', 'display:none');
  socialSection.setAttribute('style', 'display:flex');
});

function getFibonacciNumber(number) {
  const fibonacciSeries = [0, 1];
  while (fibonacciSeries.length !== number) {
    const nextFibonacci = fibonacciSeries.at(-2) + fibonacciSeries.at(-1);
    fibonacciSeries.push(nextFibonacci);
  }
  return fibonacciSeries[number - 1];
}

console.log(' Число фибоначчи ', getFibonacciNumber(8));
