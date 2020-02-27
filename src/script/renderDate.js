import { getMonday } from './getMonday.js';

export function renderDateForWeek (date){
  const dateOfMondayElem = document.querySelectorAll('.curent-date-of-week');

  const startWeek = getMonday(date);

  startWeek.setDate(new Date(startWeek).getDate() - 1);
  
  dateOfMondayElem.forEach(elem => elem.innerHTML = startWeek.getDate(startWeek.setDate(startWeek.getDate() + 1)));
  
}