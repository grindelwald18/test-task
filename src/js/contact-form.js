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
      event.target.reset();
      alert('Данные успешно отправленны');
      console.log('Успешно отправлено:', data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
}
