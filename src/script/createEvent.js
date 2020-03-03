import { setItem, getItem } from './storage.js';

export function createEvent(){
  
  const listOfEvent = getItem('events') || [];  
  const days = [...document.querySelectorAll('.day-by-hours')]; // отримую поточний тиждень
  let getStartHour, getStartMinutes, getEndHour, getEndMinutes;

  for (let event of listOfEvent) {  //перепбираю всі івенти і перевіряю чи в цьому тижні, що на екрані 
  
    const thisDays = days.find(elem => new Date(event.data).getTime() === +elem.dataset.dateOfDay); //знаходжу день для подї

    if (!thisDays) {continue;} // якщо її тут немає, то переходжу до наступної
    const thisDay = thisDays.children; //   стоврюю колекцію з годин в цьому дні
    const thisHoursInThisDay = [...thisDay];

    [getStartHour, getStartMinutes] = event.startEvent.split(':').map(elem => +elem); 
    [getEndHour, getEndMinutes] = event.endEvent.split(':').map(elem => +elem);  

    if (getStartHour > getEndHour) continue;
    if (getStartHour === getEndHour && getStartMinutes > getEndMinutes) continue;

    thisHoursInThisDay[getStartHour].innerHTML += //знаходжу клітинку в якій годині має початися івент
      `<div data-id="${event.id}" class='event' style="${styleForEvent()}; background-color: ${event.eventColor}">
        <span>${event.startEvent} - ${event.endEvent}</span>
        <span>${event.nameOfEvent}</span>
        <span class="event__description">${event.description}</span>
      </div>`;
  }
  
  function styleForEvent(){    
    if (getEndHour - getStartHour === 0) {  
      return `
        height: ${getEndMinutes - getStartMinutes}px; 
        top: ${getStartMinutes}px`;
    } else if (getEndHour - getStartHour === 1 && getStartMinutes > getEndMinutes) {
      getEndMinutes += 60;
      return `
          height: ${getEndMinutes - getStartMinutes}px; 
          top: ${getStartMinutes}px`
    } else {
      return `
          height: ${60 * (getEndHour - getStartHour) + (getEndMinutes - getStartMinutes)}px; 
          top: ${getStartMinutes}px`

    }
  }
}