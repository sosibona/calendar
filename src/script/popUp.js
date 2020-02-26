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

// const copyEvents = [];

// for (let event of events) {
//   const copyEvent = Object.assign({}, event);
//   copyEvents.push(copyEvent);
// }

// console.log(copyEvents);

const formElem = document.querySelector('.create-event');

export function createEvent(event){
  event.preventDefault();

  if(!isCorrect()) return;

  const formatData = [...new FormData(formElem)]
      .reduce((events, [field, value]) => ({...events, [field]: value}), {});
  formatData.data = new Date(formatData.data.replace(/-/g, ","));
  events.push(formatData);
  console.log(events);
  makeEvent(events)
  closePopUp();
  // popUp.style.display = 'none';
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
  // console.log(year,month,date);
  const fullDate = new Date(year, month, date).getTime();
  // `${year}-${month}-${date}`;

  if (startTimeEvent.value === "" || endTimeEvent.value === "") {
    error.innerHTML += 'wrong oclock';
    console.log('wrong oclock');
    return
  }
  const [StartHour, StartMinutes] = startTimeEvent.value.split(':').map(elem => +elem);
  const [EndHour, EndMinutes] = endTimeEvent.value.split(':').map(elem => +elem);

  console.log(StartHour, StartMinutes, EndHour, EndMinutes);
  

  console.log('fullDate');
  

  if (nameEvent.value === "") {
    error.innerHTML += 'wrong name';
    console.log('wrong name');
    return false;
  }
  if (new Date(calendarEvent.value.replace(/-/g, ",")).getTime() < fullDate) {
    error.innerHTML += 'wrong date';
    return false;
  }

  return true;
}









