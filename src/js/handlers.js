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
  // console.log(window.innerWidth );
  if (window.innerWidth <= 320) {
    overplayElement.setAttribute('style', 'display:none');
    promoMenuSection.setAttribute('style', 'display:none');
  } else {
    overplayElement.setAttribute('style', 'display:none');
    promoMenuSection.setAttribute('style', 'display:none');
    socialSection.setAttribute('style', 'display:flex');
  }
}
