import { getMonday } from './getMonday.js'
import { renderDateForWeek } from './renderDate.js'
import { renderDayCell } from './renderDayCell.js'
import { getWeek } from './getWeek.js'
import { getCurrentMonth} from './getCurrentMonth.js'
import {createEvent} from './createEvent.js'
import { startLine, timerId } from './countLineTime.js';

const daysOfWeek = document.querySelectorAll('.navigation__days');

export function addClassCurentDate(){
  const dateOfMondayElem = document.querySelectorAll('.curent-date-of-week');
  let curentDayOfWeek = new Date().getDay();

  curentDayOfWeek = isSunday(curentDayOfWeek);

  dateOfMondayElem[curentDayOfWeek - 1].classList.add('date-today');
  daysOfWeek[curentDayOfWeek - 1].classList.add('day-today');
}

function removeClassCurentDate(){
  const dateOfMondayElem = document.querySelectorAll('.curent-date-of-week');
  let curentDayOfWeek = new Date().getDay();

  curentDayOfWeek = isSunday(curentDayOfWeek);

  dateOfMondayElem[curentDayOfWeek - 1].classList.remove('date-today');
  daysOfWeek[curentDayOfWeek - 1].classList.remove('day-today');
}

const switchRigth = document.querySelector('.angle-rigth');
const switchRigthSpan = switchRigth.parentNode;

const switchLeft = document.querySelector('.angle-left');
const switchLeftSpan = switchLeft.parentNode;

export const dayToday = new Date();
const daysInWeek = 7;

function toNextWeek(){
  const nextWeekMonday = getMonday(new Date(dayToday.setDate(dayToday.getDate() + daysInWeek)));

  renderDateForWeek(nextWeekMonday);
  renderDayCell(nextWeekMonday);

  const week = getWeek(nextWeekMonday);
  checkCurentWeek(week);
  getCurrentMonth();
  createEvent();
}

function toPreviosWeek(){
  const PreviosWeekMonday = getMonday(new Date(dayToday.setDate(dayToday.getDate() - daysInWeek)));

  renderDateForWeek(PreviosWeekMonday);
  renderDayCell(PreviosWeekMonday);

  const week = getWeek(PreviosWeekMonday);
  getCurrentMonth();
  createEvent();
  checkCurentWeek(week);
}

switchRigthSpan.addEventListener('click', toNextWeek);
switchLeftSpan.addEventListener('click', toPreviosWeek);


function checkCurentWeek(week){
  const curentDate = new Date();

  if (week[0] < curentDate.getTime() && week[week.length - 1] > curentDate.getTime()) {
    addClassCurentDate();
    startLine();
  } else {
    removeClassCurentDate();
    clearInterval(timerId)
  }
}

export function isSunday(numberOfWeek){
  if (numberOfWeek === 0) return 7;
  return numberOfWeek;
}