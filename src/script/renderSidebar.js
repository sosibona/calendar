import { generateNumber } from './generateNumber.js';
import { renderSidebar } from './renderSidebar2.js';
import { getWeek } from './getWeek.js';
import { getMonday } from './getMonday.js';
import { events } from './storage.js'
// import { dateOfMonthElem } from './renderDate.js'
// import { renderDateOfWeek } from './renderDate.js';

// renderSidebar();

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





//generate Number

//render date of month

const dateOfMonthElem = document.querySelector('.date-of-month');

const renderDateOfWeek =() => {
  const numberOfWeek = generateNumber(1, 7)
    .map(dayOfWeek => 
      `<span class="curent-date-of-week"></span>`).join('');

      dateOfMonthElem.innerHTML = numberOfWeek;
}

renderDateOfWeek();



//render Sidebar

// const sidebarElem = document.querySelector('.time');

// const renderSidebar = () => {
// const hoursByDay = generateNumber(1,24).map(time =>
//     `<div class="time-in-day" data-time-of-day="${time}">
//     ${time.toString().length < 2 ? time.toString().padStart(2, 0) : time}:00
//     </div>`).join('');
  
//     sidebarElem.innerHTML = hoursByDay;

// }

// renderSidebar();


//render dayCell

const getCellHoursForDay = () => generateNumber(1, 24)
  .map(hoursDay => `<div class="row-hour" data-hour="${hoursDay}"></div>`).join('');

const renderDayCell = (date) => {
  const currentWeekElem = document.querySelector('.current-week');
  const currentWeek = getWeek(date);

  // console.log('currentWeek' + currentWeek);
  
  
  const CellHourForDay = getCellHoursForDay();
  const dayOfWeek = generateNumber(0, 6)
      .map(day => 
        `<div class="day-by-hours" data-date-of-day="${currentWeek[day]}">
        ${CellHourForDay}
        </div>`).join('');

  currentWeekElem.innerHTML = dayOfWeek;  
}

renderDayCell(new Date());



// function getWeek(date){
//   const newDate = getMonday(date);
//   const week = [];
//   const oneDay = 86400000;

//   for (let i = 0; i <= 6; i++) {
//     week.push(newDate.getTime() + oneDay * i);
//   }

//   return week; 
// }

function renderDateForWeek (date){
  const dateOfMondayElem = document.querySelectorAll('.curent-date-of-week');

  const startWeek = getMonday(date);

  startWeek.setDate(new Date(startWeek).getDate() - 1);
  
  dateOfMondayElem.forEach(elem => elem.innerHTML = startWeek.getDate(startWeek.setDate(startWeek.getDate() + 1)));
  
}

renderDateForWeek(new Date());

const dateOfMondayElem = document.querySelectorAll('.curent-date-of-week');
// console.log(dateOfMondayElem.innerHTML);

const daysOfWeek = document.querySelectorAll('.navigation__days');

function addClassCurentDate(){
  let curentDayOfWeek = new Date().getDay();

  // if (curentDayOfWeek === 0) curentDayOfWeek = 7;
  curentDayOfWeek = isSunday(curentDayOfWeek);

  // console.log('a = ' + curentDayOfWeek);
  

  dateOfMondayElem[curentDayOfWeek - 1].classList.add('date-today');
  daysOfWeek[curentDayOfWeek - 1].classList.add('day-today');
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
    // console.log('today - ' + dayToday);
    

    renderDateForWeek(nextWeekMonday);
    renderDayCell(nextWeekMonday);

    const week = getWeek(nextWeekMonday);
    checkCurentWeek(week);
    getCurrentMonth();
    makeEvent(events);
  }

  function toPreviosWeek(){
    const PreviosWeekMonday = getMonday(new Date(dayToday.setDate(dayToday.getDate() - daysInWeek)));
    // console.log('today - ' + dayToday);

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


const testClickRandomColor = () => {
  const color = Math.random().toString(16).substring(9);
  console.log(color);
  
  return `#${color}`;
}


// const events = [
//   { 
//     nameOfEvent: 'english lesson',
//     data: new Date(2020, 1, 26),
//     startEvent: '12:00',
//     endEvent: '15:00'
//   },
//   { 
//     nameOfEvent: 'Indian lesson',
//     data: new Date(2020, 1, 19),
//     startEvent: '14:00',
//     endEvent: '15:00'
//   },
//   { 
//     nameOfEvent: 'Fance lesson',
//     data: new Date(2020, 1, 26),
//     startEvent: '14:00',
//     endEvent: '15:00'
//   },
//   { 
//     nameOfEvent: 'take taxi',
//     data: new Date(2020, 1, 26),
//     startEvent: '18:00',
//     endEvent: '18:30'
//   },
// ];

function makeEvent(listOfEvent){
  const dateOfEvent = listOfEvent[0].data;

  
  const days = [...document.querySelectorAll('.day-by-hours')];



  for (let event of events) {
  
  const thisDays = days.find(elem => event.data.getTime() === +elem.dataset.dateOfDay);

    if (thisDays === undefined) {continue;}
    const thisDay = thisDays.children;

    console.log('pre children = ' + thisDay);
    

  const thisHoursInThisDay = [...thisDay];

  console.log(thisHoursInThisDay)

  const [getStartHour, getStartMinutes] = event.startEvent.split(':');
  const [getEndHour, getEndMinutes] = event.endEvent.split(':');
  console.log('getHour');
  console.log(getStartHour);
  console.log(getStartMinutes);
  console.log(getEndHour);
  console.log(getEndMinutes);
  
  // const getMinutes;

  const startHour = thisHoursInThisDay.find(elem => getStartHour === elem.dataset.hour);
  const endHour = thisHoursInThisDay.find(elem => getEndHour === (+elem.dataset.hour - 1).toString())

  
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  console.log(startHour.dataset.hour);
  console.log(typeof startHour);
  
  thisHoursInThisDay[+startHour.dataset.hour].innerHTML = 
    `<div class='test'>
      <span>
        ${event.nameOfEvent}
      </span>
    </div>`;

    console.log([thisHoursInThisDay[+startHour.dataset.hour].firstChild]);

    console.log(+endHour.dataset.hour - +startHour.dataset.hour);

    if (+getStartHour - +getEndHour === 0) {
      if (getEndMinutes === '00') getEndMinutes = 60;
      if (getStartMinutes === '00') {
        console.log('asdadasdasdasdasddadadsd');
        
        thisHoursInThisDay[+startHour.dataset.hour]
        .firstChild.style.top = '20px';
      }
    }
    
    // thisHoursInThisDay[+startHour.dataset.hour]
    //     .firstChild.setAttribute(
    //       'style', 
    //       `height: ${55 * (+endHour.dataset.hour - +startHour.dataset.hour)}px; 
    //        background-color: ${testClickRandomColor()}`
    //        );
    

    

  }
}


makeEvent(events);