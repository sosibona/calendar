import { dayToday, addClassCurentDate } from './navigationButton.js';
import { renderDayCell } from './renderDayCell.js';
import { renderDateForWeek } from './renderDate.js';
import { getCurrentMonth } from './getCurrentMonth.js';
import { createEvent} from './createEvent.js';
import { events } from './storage.js';
import { start } from './countLineTime.js';

const btnCurrentWeek = document.querySelector('.header__today');

export function showCurrentWeek(){

  const todayYear = dayToday.getFullYear();
  const todayMonth = dayToday.getMonth();
  const todayDate = dayToday.getDate();

  console.log(dayToday);
  
  renderDayCell(new Date());
  renderDateForWeek(new Date());
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDate = new Date().getDate();
  getCurrentMonth();
  addClassCurentDate();
  createEvent(events);
  start();


  dayToday.setFullYear(currentYear, currentMonth, currentDate);
}

btnCurrentWeek.addEventListener('click', showCurrentWeek);