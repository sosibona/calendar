const btnAddEvent = document.querySelector('.header__create');
const btnClosePopUp = document.querySelector('.modal-form__icon-close');

const popUp = document.querySelector('.modal-form');

export function addEvent(){
  popUp.style.display = 'flex';
}

export function closePopUp(){
  popUp.style.display = 'none';
}

btnAddEvent.addEventListener('click', addEvent);
btnClosePopUp.addEventListener('click', closePopUp);




