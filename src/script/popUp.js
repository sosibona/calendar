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
  const formatData = [...new FormData(formElem)]
      .reduce((events, [field, value]) => ({...events, [field]: value}), {});
  formatData.data = new Date(formatData.data.replace(/-/g, ","));
  console.log(formatData);
  events.push(formatData);
  // console.log(copyEvents);
  console.log(events);
  makeEvent(events)
  closePopUp();
  // popUp.style.display = 'none';
}

btnAddEvent.addEventListener('click', addEvent);
btnClosePopUp.addEventListener('click', closePopUp);
btnCreateEvent.addEventListener('click', createEvent);

 1









