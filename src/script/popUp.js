import { setItem, getItem } from './storage.js';
import { createEvent } from './createEvent.js';
import { renderDayCell } from './renderDayCell.js';
import { createNewEvent, getEvents } from './tasks.js';

const btnAddEvent = document.querySelector('.header__create');
const btnClosePopUp = document.querySelector('.modal-form__icon-close');
const btnCreateEvent = document.querySelector('.create-event__button');

const popUp = document.querySelector('.modal-form');

export function openPopUp(){
  popUp.style.display = 'flex';
}

export function closePopUp(){
  popUp.style.display = 'none';
}

const formElem = document.querySelector('.create-event');

export function addEvent(event){
  event.preventDefault();

  if(!isCorrect()) return;

  const formatData = [...new FormData(formElem)]
      .reduce((events, [field, value]) => ({...events, [field]: value}), {});
  formatData.data = formatData.data.replace(/-/g, ",");

  const newEvent = {
    nameOfEvent: formatData.nameOfEvent,
    data: formatData.data,
    startEvent: formatData.startEvent,
    endEvent: formatData.endEvent,
    description: formatData.description,
    eventColor: formatData.eventColor,
  };

  const currentDay = document.querySelector('.day-by-hours');
  const currentDate = currentDay.dataset.dateOfDay;

  createNewEvent(newEvent)
    .then(() => getEvents())
    .then(events => {
      setItem('events', events);
      renderDayCell(new Date(+currentDate));
      createEvent();
      closePopUp();
    })
}

btnAddEvent.addEventListener('click', openPopUp);
btnClosePopUp.addEventListener('click', closePopUp);
btnCreateEvent.addEventListener('click', addEvent);

function isCorrect(){
  const nameEvent = document.querySelector('.create-event__name');
  const calendarEvent = document.querySelector('.calendar-data');
  // console.log(calendarEvent.value);
  const startTimeEvent = document.querySelector('.startTime');
  const endTimeEvent = document.querySelector('.endTime');
  const error = document.querySelector('.modal-form__error');
  error.innerHTML = '';

  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const date = new Date().getDate();
  const fullDate = new Date(year, month, date).getTime();

  if (nameEvent.value === "") {
    error.innerHTML += '*You need give a name of your event';
    nameEvent.style.outline = '2px solid red';
    return false;
  }
  nameEvent.style.outline = 'none';
  

  if (new Date(calendarEvent.value.replace(/-/g, ",")).getTime() < fullDate) {
    calendarEvent.style.outline = '2px solid red';
    error.innerHTML += '*The date you selected has already expired';
    return false;
  }
  calendarEvent.style.outline = 'none';

  if (calendarEvent.value === "") {
    calendarEvent.style.outline = '2px solid red';
    error.innerHTML += '*You need select the date';
    return false;
  }
  calendarEvent.style.outline = 'none';

  if (startTimeEvent.value === "" || endTimeEvent.value === "") {
    startTimeEvent.style.outline = '2px solid red';
    endTimeEvent.style.outline = '2px solid red';
    error.innerHTML += '*You need to enter correct the time';
    return false;
  }

  startTimeEvent.style.outline = 'none';
  endTimeEvent.style.outline = 'none';

  const [StartHour, StartMinutes] = startTimeEvent.value.split(':').map(elem => +elem);
  const [EndHour, EndMinutes] = endTimeEvent.value.split(':').map(elem => +elem);

  if (StartHour > EndHour) {
    startTimeEvent.style.outline = '2px solid red';
    endTimeEvent.style.outline = '2px solid red';
    error.innerHTML += '*You entered wrong hour';
    return false;
  }
  startTimeEvent.style.outline = 'none';
  endTimeEvent.style.outline = 'none';

  if (StartHour === EndHour && StartMinutes > EndMinutes) {
    startTimeEvent.style.outline = '2px solid red';
    endTimeEvent.style.outline = '2px solid red';
    error.innerHTML += '*You entered wrong minutes';
    return false;
  }
  startTimeEvent.style.outline = 'none';
  endTimeEvent.style.outline = 'none';

  if (StartMinutes % 15 !== 0 || EndMinutes % 15 !== 0) {
    startTimeEvent.style.outline = '2px solid red';
    endTimeEvent.style.outline = '2px solid red';
    error.innerHTML += '*Step must be 15 minutes';
    return false;
  }

  return true;
}










