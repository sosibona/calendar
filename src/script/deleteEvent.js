// import { events } from './storage.js';
import { setItem, getItem } from './storage.js';
import { renderDayCell } from './renderDayCell.js'
import { createEvent } from './createEvent.js'

const eventForDelete = document.querySelector('.current-week');
const modalDelete = document.querySelector('.modal-delete');
const modalDeleteClose = document.querySelector('.modal-delete__icon-close');
const btnDeleteEvent = document.querySelector('.modal-delete__btn-delete-event');

const eventTitle = document.querySelector('.modal-delete__title');
const eventData = document.querySelector('.modal-delete__time');
const eventDescription = document.querySelector('.modal-delete__info');

eventForDelete.addEventListener('click', onEvent);


export function onEvent(){  
  const click = event.target;
  
  let idEvent;
  const isEventClose = click.closest('.event');
  
  if (!isEventClose) {
    return
  }

  idEvent = isEventClose.dataset.id;

  modalDelete.style.display = 'flex';

  const listOfEvent = getItem('events') || [];

  for (let i = 0; i < listOfEvent.length; i++) {
    if (listOfEvent[i].id === idEvent) {
      eventTitle.innerHTML = listOfEvent[i].nameOfEvent;
      eventData.innerHTML = `${new Date(listOfEvent[i].data).toLocaleDateString()}, ${listOfEvent[i].startEvent} - ${listOfEvent[i].endEvent}`;
      eventDescription.innerHTML = listOfEvent[i].description;
      if (!eventDescription.textContent) eventDescription.innerHTML = 'No additional information';
    }
  }  

  modalDeleteClose.addEventListener('click', closeModalDelete);
  btnDeleteEvent.addEventListener('click', isDelete);

  function isDelete(){
    const week = click.closest('.day-by-hours').dataset.dateOfDay;
  
    for (let i = 0; i < listOfEvent.length; i++) {
    if (listOfEvent[i].id === idEvent) {
      listOfEvent.splice(i, 1);
    }
  }
  
    setItem('events', listOfEvent);
  
    renderDayCell(new Date(+week));
    createEvent();
    closeModalDelete()
  }
}

function closeModalDelete(){
  modalDelete.style.display = 'none';
}

