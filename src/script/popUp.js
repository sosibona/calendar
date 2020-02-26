import { events } from './storage.js';
import { makeEvent } from './renderSidebar.js';

const btnAddEvent = document.querySelector('.header__create');
const btnClosePopUp = document.querySelector('.modal-form__icon-close');
const btnCreateEvent = document.querySelector('.create-event__button');

const popUp = document.querySelector('.modal-form');

export function addEvent(){
  popUp.style.display = 'flex';
}

export function closePopUp(){
  popUp.style.display = 'none';
}

const formElem = document.querySelector('.create-event');

export function createEvent(event){
  event.preventDefault();

  if(!isCorrect()) return;

  const formatData = [...new FormData(formElem)]
      .reduce((events, [field, value]) => ({...events, [field]: value}), {});
  formatData.data = new Date(formatData.data.replace(/-/g, ","));
  events.push(formatData);
  makeEvent(events)
  closePopUp();
}

btnAddEvent.addEventListener('click', addEvent);
btnClosePopUp.addEventListener('click', closePopUp);
btnCreateEvent.addEventListener('click', createEvent);

function isCorrect(){
  const nameEvent = document.querySelector('.create-event__name');
  const calendarEvent = document.querySelector('.calendar-data');
  const startTimeEvent = document.querySelector('.startTime');
  const endTimeEvent = document.querySelector('.endTime');
  const error = document.querySelector('.modal-form__error');
  error.innerHTML = '';

  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const date = new Date().getDate();
  const fullDate = new Date(year, month, date).getTime();

  if (nameEvent.value === "") {
    error.innerHTML += 'You need give a name of your event';
    nameEvent.style.outline = '1px solid blue';
    console.log('wrong name');
    return false;
  }

  if (new Date(calendarEvent.value.replace(/-/g, ",")).getTime() < fullDate) {
    error.innerHTML += 'The date you selected has already expired';
    return false;
  }

  if (startTimeEvent.value === "" || endTimeEvent.value === "") {
    error.innerHTML += 'You need to enter the time';
    console.log('wrong oclock');
    return false;
  }

  const [StartHour, StartMinutes] = startTimeEvent.value.split(':').map(elem => +elem);
  const [EndHour, EndMinutes] = endTimeEvent.value.split(':').map(elem => +elem);

  if (StartHour > EndHour) {
    error.innerHTML += 'You enter wrong hour';
    console.log('wrong oclock');
    return false;
  }

  if (StartHour === EndHour && StartMinutes > EndMinutes) {
    error.innerHTML += 'You enter wrong minutes';
    console.log('wrong oclock');
    return false;
  }

  return true;
}









