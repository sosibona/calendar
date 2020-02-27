import { generateNumber } from './generateNumber.js';
import { renderWeek } from './renderWeek.js'
import { renderSidebar } from './renderSidebar.js';
import { getWeek } from './getWeek.js';
import { getMonday } from './getMonday.js';
import { events } from './storage.js';
import { addEvent } from './popUp.js';
import { renderDateForWeek } from './renderDate.js';
import { renderDayCell } from './renderDayCell.js'
import { onEvent } from './deleteEvent.js';

const month = [
  'January', 
  'February', 
  'March', 
  'April', 
  'May', 
  'June', 
  'July', 
  'August', 
  'September', 
  'October', 
  'November', 
  'December'
];


const dateOfMondayElem = document.querySelectorAll('.curent-date-of-week');

const daysOfWeek = document.querySelectorAll('.navigation__days');

function addClassCurentDate(){
  let curentDayOfWeek = new Date().getDay();

  curentDayOfWeek = isSunday(curentDayOfWeek);

  dateOfMondayElem[curentDayOfWeek - 1].classList.add('date-today');
  daysOfWeek[curentDayOfWeek - 1].classList.add('day-today');
  let redLine = document.createElement('span')
  redLine.classList.add('line-now')
  dateOfMondayElem[curentDayOfWeek - 1].append(redLine);
  console.log(dateOfMondayElem[curentDayOfWeek - 1]);
  
}
addClassCurentDate();

function removeClassCurentDate(){
  let curentDayOfWeek = new Date().getDay();

  curentDayOfWeek = isSunday(curentDayOfWeek);

  dateOfMondayElem[curentDayOfWeek - 1].classList.remove('date-today');
  daysOfWeek[curentDayOfWeek - 1].classList.remove('day-today');
}

const switchRigth = document.querySelector('.angle-rigth');
const switchRigthSpan = switchRigth.parentNode;

const switchLeft = document.querySelector('.angle-left');
const switchLeftSpan = switchLeft.parentNode;

const dayToday = new Date();
const daysInWeek = 7;

  function toNextWeek(){
    const nextWeekMonday = getMonday(new Date(dayToday.setDate(dayToday.getDate() + daysInWeek)));

    renderDateForWeek(nextWeekMonday);
    renderDayCell(nextWeekMonday);

    const week = getWeek(nextWeekMonday);
    checkCurentWeek(week);
    getCurrentMonth();
    makeEvent(events);
  }

  function toPreviosWeek(){
    const PreviosWeekMonday = getMonday(new Date(dayToday.setDate(dayToday.getDate() - daysInWeek)));

    renderDateForWeek(PreviosWeekMonday);
    renderDayCell(PreviosWeekMonday);

    const week = getWeek(PreviosWeekMonday);
    checkCurentWeek(week);
    getCurrentMonth();
    makeEvent(events);
  }

  switchRigthSpan.addEventListener('click', toNextWeek);
  switchLeftSpan.addEventListener('click', toPreviosWeek);


function checkCurentWeek(week){
  const curentDate = new Date();

  if (week[0] < curentDate.getTime() && week[week.length - 1] > curentDate.getTime()) {
    addClassCurentDate();
  } else {
    removeClassCurentDate();
  }
}

const btnCurrentWeek = document.querySelector('.header__today');

function showCurrentWeek(){
  renderDayCell(new Date());
  renderDateForWeek(new Date());
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDate = new Date().getDate();
  getCurrentMonth();
  addClassCurentDate();
  makeEvent(events);

  dayToday.setFullYear(currentYear, currentMonth, currentDate);
}

btnCurrentWeek.addEventListener('click', showCurrentWeek);

function getCurrentMonth(){
  const monthElem = document.querySelector('.header__month');

  const daysOfWeek = document.querySelectorAll('.day-by-hours');

  const firstDayOfWeek = daysOfWeek[0].dataset.dateOfDay;
  const lastDayOfWeek = daysOfWeek[daysOfWeek.length - 1].dataset.dateOfDay;

  const monthForFirstDayOfWeek = new Date(+firstDayOfWeek).getMonth();
  const monthForLastDayOfWeek = new Date(+lastDayOfWeek).getMonth();
  const currentYear = new Date(+firstDayOfWeek).getFullYear();
  
  if (monthForFirstDayOfWeek !== monthForLastDayOfWeek) {
    monthElem.innerHTML = `${month[monthForFirstDayOfWeek]} - ${month[monthForLastDayOfWeek]} ${currentYear}`;
  } else {
    monthElem.innerHTML = `${month[monthForFirstDayOfWeek]} ${currentYear}`;
  }
}

getCurrentMonth();

export function isSunday(numberOfWeek){
  if (numberOfWeek === 0) return 7;
  return numberOfWeek;
}

export function makeEvent(listOfEvent){
  
  const days = [...document.querySelectorAll('.day-by-hours')]; // отримую поточний тиждень
  
  let getStartHour, getStartMinutes, getEndHour, getEndMinutes;

  for (let event of listOfEvent) {  //перепбираю всі івенти і перевіряю чи в цьому тижні, що на екрані 
  
  const thisDays = days.find(elem => event.data.getTime() === +elem.dataset.dateOfDay); //знаходжу день для подї


  if (!thisDays) {continue;} // якщо її тут немає, то переходжу до наступної
  const thisDay = thisDays.children; //   стоврюю колекцію з годин в цьому дні
  console.log(thisDay);
  

  const thisHoursInThisDay = [...thisDay];
  [getStartHour, getStartMinutes] = event.startEvent.split(':').map(elem => +elem); 
  [getEndHour, getEndMinutes] = event.endEvent.split(':').map(elem => +elem);  

  if (getStartHour > getEndHour) continue;
  if (getStartHour === getEndHour && getStartMinutes > getEndMinutes) continue;

  thisHoursInThisDay[getStartHour].innerHTML += //знаходжу клітинку в якій годині має початися івент
    `<div data-id="${event.id}" class='test' style="${styleForEvent()}; background-color: #47d6dc">
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


makeEvent(events);




