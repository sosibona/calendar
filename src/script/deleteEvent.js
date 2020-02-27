import { events } from './storage.js';
import { renderDayCell } from './renderDayCell.js'
import { makeEvent } from './index.js'

const eventForDelete = document.querySelector('.current-week');

export function onEvent(){  
  const click = event.target;
  let idEvent;
  // const isEvent = click.classList.contains('test');
  const isEventClose = click.closest('.test');

  console.log('isEvent');
  // console.log(isEvent);
  console.log('isEvisEventCloseent');
  console.log(isEventClose);
  
  

  if (!isEventClose) {
    return
  }

  // if (isEventClose) {
    idEvent = isEventClose.dataset.id;
  // } else {
    // idEvent = event.target.dataset.id;
  // }
  
  const week = event.target.closest('.day-by-hours').dataset.dateOfDay;
  
  for (let i = 0; i < events.length; i++) {
    if (events[i].id === idEvent) {
      events.splice(i, 1);
    }
  }  
  renderDayCell(new Date(+week));
  makeEvent(events);
  
}

eventForDelete.addEventListener('click', onEvent);