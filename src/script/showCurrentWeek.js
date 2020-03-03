import { dayToday, addClassCurentDate } from './navigationButton.js';
import { renderDayCell } from './renderDayCell.js';
import { renderDateForWeek } from './renderDate.js';
import { getCurrentMonth } from './getCurrentMonth.js';
import { createEvent} from './createEvent.js';
import { startLine } from './countLineTime.js';

const btnCurrentWeek = document.querySelector('.header__today');

export function showCurrentWeek(){

  const todayYear = dayToday.getFullYear();
  const todayMonth = dayToday.getMonth();
  const todayDate = dayToday.getDate();
  
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDate = new Date().getDate();

  if (new Date(todayYear, todayMonth, todayDate) === new Date(currentYear, currentMonth, currentDate)) return;

  renderDayCell(new Date());
  renderDateForWeek(new Date());
  getCurrentMonth();
  addClassCurentDate();
  createEvent();
  startLine();


  dayToday.setFullYear(currentYear, currentMonth, currentDate);
}

btnCurrentWeek.addEventListener('click', showCurrentWeek);