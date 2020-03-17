import { setItem, getItem } from './storage.js';
import { renderDayCell } from './renderDayCell.js'
import { createEvent } from './createEvent.js'
import { updateEvent, getEvents, deleteEvent } from './tasks.js'

const eventForDelete = document.querySelector('.current-week');
const modalDelete = document.querySelector('.modal-delete');
const modalDeleteClose = document.querySelector('.modal-delete__icon-close');
const btnDeleteEvent = document.querySelector('.modal-delete__btn-delete-event');
const btnChangeColor = document.querySelector('.modal-delete__btn-change-color');
const eventTitle = document.querySelector('.modal-delete__title');
const eventData = document.querySelector('.modal-delete__time');
const eventDescription = document.querySelector('.modal-delete__info');
const colorPickerElem = document.querySelector('#eventColor');

eventForDelete.addEventListener('click', onEvent);


export function onEvent(){  
  const click = event.target;
  let idEvent;
  const isEventClose = click.closest('.event');
  
  if (!isEventClose) {
    return;
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
      colorPickerElem.value = listOfEvent[i].eventColor;
    }
  }  

  modalDeleteClose.addEventListener('click', closeModalDelete);
  btnDeleteEvent.addEventListener('click', isDelete);
  btnChangeColor.addEventListener('click', onChangeColor);

  function isDelete(){
    const week = click.closest('.day-by-hours').dataset.dateOfDay;

    deleteEvent(idEvent)
      .then(() => getEvents())
      .then(events => {
        setItem('events', events);
        renderDayCell(new Date(+week));
        createEvent();
        closeModalDelete()
      })
  }

  function onChangeColor(){

    const week = click.closest('.day-by-hours').dataset.dateOfDay;
    const events = getItem('events');
    const thisEvent = events.find(event => event.id === idEvent);
    const {nameOfEvent, data, startEvent, endEvent, description, id} = thisEvent;

    const updateEventColor = {
      nameOfEvent,
      data,
      startEvent,
      endEvent,
      description,
      id,
      eventColor: colorPickerElem.value,
    }

    updateEvent(idEvent, updateEventColor)
      .then(() => getEvents())
      .then(events => {
        setItem('events', events);
        renderDayCell(new Date(+week));
        createEvent();
        closeModalDelete();            
      })
  }

  function closeModalDelete(){
    btnDeleteEvent.removeEventListener('click', isDelete);
    btnChangeColor.removeEventListener('click', onChangeColor);
    modalDelete.style.display = 'none';
  }
}



