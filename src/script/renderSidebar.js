import { generateNumber } from './generateNumber.js';

const sidebarElem = document.querySelector('.time');

export const renderSidebar = () => {
  const hoursByDay = generateNumber(1,24).map(time =>
      `<div class="time-in-day" data-time-of-day="${time}">
      ${time.toString().length < 2 ? time.toString().padStart(2, 0) : time}:00
      </div>`).join('');
    
      sidebarElem.innerHTML = hoursByDay;
  }