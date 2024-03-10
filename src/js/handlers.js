export function handlerSubmitForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
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
}

export function handlerClickHamburger(event) {
  const socialSection = document.querySelector('#social');
  const promoMenuSection = document.querySelector('#menu');
  const overplayElement = document.querySelector('#overplay');
  overplayElement.setAttribute('style', 'display:block');
  promoMenuSection.setAttribute('style', 'display:flex');
  socialSection.setAttribute('style', 'display:none');
}

export function handlerCloseMenu(event) {
  const socialSection = document.querySelector('#social');
  const promoMenuSection = document.querySelector('#menu');
  const overplayElement = document.querySelector('#overplay');
  overplayElement.setAttribute('style', 'display:none');
  promoMenuSection.setAttribute('style', 'display:none');
  socialSection.setAttribute('style', 'display:flex');
}
