import { generateNumber } from './generateNumber.js';
import { renderSidebar } from './renderSidebar2.js';
import { getWeek } from './getWeek.js';
import { getMonday } from './getMonday.js';
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





















// import { generateNumber } from './generateNumber.js';
// import { getWeek } from './getWeek.js';
// import { getMonday } from './getMonday.js';
// import { renderSidebar } from './renderSidebar2.js';
// import { dateOfMonthElem } from './renderDate.js'
// import { renderDateOfWeek } from './renderDate.js';

// renderSidebar();



// const month = [
//   'January', 
//   'February', 
//   'March', 
//   'April', 
//   'May', 
//   'June', 
//   'July', 
//   'August', 
//   'September', 
//   'October', 
//   'November', 
//   'December'
// ];

// const getCellHoursForDay = () => generateNumber(1, 24)
//   .map(hoursDay => `<div class="row-hour" data-hour="${hoursDay}"></div>`).join('');

// const renderDayCell = (date) => {
//   const currentWeekElem = document.querySelector('.current-week');
//   const currentWeek = getWeek(date);
  
//   const CellHourForDay = getCellHoursForDay();
//   const dayOfWeek = generateNumber(0, 6)
//       .map(day => 
//         `<div class="day-by-hours" data-date-of-day="${currentWeek[day]}">
//         ${CellHourForDay}
//         </div>`).join('');

//   currentWeekElem.innerHTML = dayOfWeek;  
// }

// renderDayCell(new Date());






// function renderDateForWeek (date){
//   const dateOfMondayElem = document.querySelectorAll('.curent-date-of-week');

//   const startWeek = getMonday(date);

//   startWeek.setDate(new Date(startWeek).getDate() - 1);
  
//   dateOfMondayElem.forEach(elem => elem.innerHTML = startWeek.getDate(startWeek.setDate(startWeek.getDate() + 1)));
  
// }

// renderDateForWeek(new Date());

// const dateOfMondayElems = document.querySelectorAll('.curent-date-of-week');
// const daysOfWeek = document.querySelectorAll('.navigation__days');

// const addClassCurentDate = () => {
//   const curentDayOfWeek = new Date().getDay();

//   dateOfMondayElem[curentDayOfWeek - 1].classList.add('date-today');
//   daysOfWeek[curentDayOfWeek - 1].classList.add('day-today');
// }
// addClassCurentDate();

// function removeClassCurentDate(){
//   const curentDayOfWeek = new Date().getDay();

//   dateOfMondayElem[curentDayOfWeek - 1].classList.remove('date-today');
//   daysOfWeek[curentDayOfWeek - 1].classList.remove('day-today');
// }

// const switchRigth = document.querySelector('.angle-rigth');
// const switchRigthSpan = switchRigth.parentNode;

// const switchLeft = document.querySelector('.angle-left');
// const switchLeftSpan = switchLeft.parentNode;

// const dayToday = new Date();
// const daysInWeek = 7;

//   function toNextWeek(){
//     const nextWeekMonday = getMonday(new Date(dayToday.setDate(dayToday.getDate() + daysInWeek)));
//     console.log('today - ' + dayToday);
    

//     renderDateForWeek(nextWeekMonday);
//     renderDayCell(nextWeekMonday);

//     const week = getWeek(nextWeekMonday);
//     checkCurentWeek(week);
//     getCurrentMonth()
//   }

//   function toPreviosWeek(){
//     const PreviosWeekMonday = getMonday(new Date(dayToday.setDate(dayToday.getDate() - daysInWeek)));
//     console.log('today - ' + dayToday);

//     renderDateForWeek(PreviosWeekMonday);
//     renderDayCell(PreviosWeekMonday);

//     const week = getWeek(PreviosWeekMonday);
//     checkCurentWeek(week);
//     getCurrentMonth();
//   }

//   switchRigthSpan.addEventListener('click', toNextWeek);
//   switchLeftSpan.addEventListener('click', toPreviosWeek);

//   function checkCurentWeek(week){
//     const curentDate = new Date();
  
//     if (week[0] < curentDate.getTime() && week[week.length - 1] > curentDate.getTime()) {
//       addClassCurentDate();
//     } else {
//       removeClassCurentDate();
//     }
//   }

// const btnCurrentWeek = document.querySelector('.header__today');

// function showCurrentWeek(){
//   renderDayCell(new Date());
//   renderDateForWeek(new Date());
//   const currentYear = new Date().getFullYear();
//   const currentMonth = new Date().getMonth();
//   const currentDate = new Date().getDate();
//   getCurrentMonth();
//   addClassCurentDate();

//   dayToday.setFullYear(currentYear, currentMonth, currentDate);
// }

// btnCurrentWeek.addEventListener('click', showCurrentWeek);

// function getCurrentMonth(){
//   const monthElem = document.querySelector('.header__month');

//   const daysOfWeek = document.querySelectorAll('.day-by-hours');

//   const firstDayOfWeek = daysOfWeek[0].dataset.dateOfDay;
//   const lastDayOfWeek = daysOfWeek[daysOfWeek.length - 1].dataset.dateOfDay;

//   const monthForFirstDayOfWeek = new Date(+firstDayOfWeek).getMonth();
//   const monthForLastDayOfWeek = new Date(+lastDayOfWeek).getMonth();
//   const currentYear = new Date(+firstDayOfWeek).getFullYear();
  
//   if (monthForFirstDayOfWeek !== monthForLastDayOfWeek) {
//     monthElem.innerHTML = `${month[monthForFirstDayOfWeek]} - ${month[monthForLastDayOfWeek]} ${currentYear}`;
//   } else {
//     monthElem.innerHTML = `${month[monthForFirstDayOfWeek]} ${currentYear}`;
//   }
// }

// getCurrentMonth();

const testClickRandomColor = () => {
  const color = Math.random().toString(16).substring(9);
  console.log(color);
  
  return `#${color}`;
}


const events = [
  { 
    nameOfEvent: 'english lesson',
    data: new Date(2020, 1, 26),
    startEvent: '12',
    endEvent: '15'
  },
  { 
    nameOfEvent: 'Indian lesson',
    data: new Date(2020, 1, 19),
    startEvent: '14',
    endEvent: '15'
  },
  { 
    nameOfEvent: 'Fance lesson',
    data: new Date(2020, 1, 26),
    startEvent: '14',
    endEvent: '15'
  },
];

function makeEvent(listOfEvent){
  const dateOfEvent = listOfEvent[0].data;

  
  const days = [...document.querySelectorAll('.day-by-hours')];



  for (let event of events) {
  
  const thisDay = days.find(elem => event.data.getTime() === +elem.dataset.dateOfDay);

    if (thisDay === undefined) {continue;}
    const thisDay1 = thisDay.children;

    console.log('pre children = ' + thisDay1);
    

  const thisHoursInThisDay = [...thisDay1];

  console.log(thisHoursInThisDay)

  const start = thisHoursInThisDay.find(elem => event.startEvent === (+elem.dataset.hour).toString())
  const end = thisHoursInThisDay.find(elem => event.endEvent === (+elem.dataset.hour - 1).toString())

  
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  console.log(start.dataset.hour);
  console.log(typeof start);
  
  thisHoursInThisDay[+start.dataset.hour].innerHTML = 
    `<div class='test'>
      <span>
        ${event.nameOfEvent}
      </span>
    </div>`;

    console.log([thisHoursInThisDay[+start.dataset.hour].firstChild]);

    console.log(+end.dataset.hour - +start.dataset.hour);
    
    

    thisHoursInThisDay[+start.dataset.hour].firstChild.setAttribute('style', `height: ${55 * (+end.dataset.hour - +start.dataset.hour)}px; background-color: ${testClickRandomColor()}`);

  }

  // const thisDay = days.find(elem => listOfEvent[0].data.getTime() === +elem.dataset.dateOfDay).children;
  // const thisHoursInThisDay = [...thisDay];

  // const start = thisHoursInThisDay.find(elem => listOfEvent[0].startEvent === (+elem.dataset.hour).toString())
  // const end = thisHoursInThisDay.find(elem => listOfEvent[0].endEvent === (+elem.dataset.hour - 1).toString())

  // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  // console.log(start.dataset.hour);
  // console.log(typeof start);
  
  // thisHoursInThisDay[+start.dataset.hour].innerHTML = 
  //   `<div class='test'>
  //     <span>
  //       ${listOfEvent[0].nameOfEvent}
  //     </span>
  //   </div>`;

  //   console.log([thisHoursInThisDay[+start.dataset.hour].firstChild]);

  //   console.log(+end.dataset.hour - +start.dataset.hour);
    
    

  //   thisHoursInThisDay[+start.dataset.hour].firstChild.setAttribute('style', `height: ${55 * (+end.dataset.hour - +start.dataset.hour)}px`);
  

  
}

makeEvent(events);