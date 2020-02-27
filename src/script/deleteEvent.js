import { events } from './storage.js';
import { renderDayCell } from './renderDayCell.js'
import { createEvent } from './createEvent.js'
import { startLine } from './countLineTime.js';

const eventForDelete = document.querySelector('.current-week');

export function onEvent(){  
  const click = event.target;
  let idEvent;
  const isEventClose = click.closest('.test');
  
  if (!isEventClose) {
    return
  }
  
  idEvent = isEventClose.dataset.id;
  
  const week = click.closest('.day-by-hours').dataset.dateOfDay;
  
  for (let i = 0; i < events.length; i++) {
    if (events[i].id === idEvent) {
      events.splice(i, 1);
    }
  }  
  renderDayCell(new Date(+week));
  createEvent(events);
  startLine()
  
}

eventForDelete.addEventListener('click', onEvent);