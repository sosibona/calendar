const milisecInOneDay = 86400000;
//generate Number
export const generateNumber = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
}

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

const sidebarElem = document.querySelector('.time');

const renderSidebar = () => {
const hoursByDay = generateNumber(1,24).map(time =>
    `<div class="time-in-day" data-time-of-day="${time}">
    ${time.toString().length < 2 ? time.toString().padStart(2, 0) : time}:00
    </div>`).join('');
  
    sidebarElem.innerHTML = hoursByDay;

}

renderSidebar();

//render dayCell

const getCellHoursForDay = () => generateNumber(1, 24)
  .map(hoursDay => `<div class="row-hour" data-hour="${hoursDay}"></div>`).join('');

const renderDayCell = (date) => {
  const currentWeekElem = document.querySelector('.current-week');
  const currentWeek = getWeek(date);
  console.log('render');
  
  for (let i = 0; i < currentWeek.length; i++) {
    console.log(new Date(currentWeek[i]));
  }
  

  const CellHourForDay = getCellHoursForDay();
  const dayOfWeek = generateNumber(0, 6)
      .map(day => 
        `<div class="day-by-hours" data-date-of-day="${currentWeek[day]}">
        ${CellHourForDay}
        </div>`).join('');

  currentWeekElem.innerHTML = dayOfWeek;  
  return currentWeek;
}

renderDayCell(new Date());


function getMonday(date){
    const getDay = date.getDay() - 1;

    const getMonday = date.getTime() - getDay * milisecInOneDay;
    // console.log('bbbbb = ' + getMonday);
    // const dateOfMonday = new Date(getMonday).getDate();
    // console.log('cccc = ' + dateOfMonday);
    // console.log('aaaaaaa = ' + new Date(dateOfMonday));
    
    
    
    return new Date(getMonday);
}



function getWeek(curentDate){  
  const dateOfMondayElem = document.querySelectorAll('.curent-date-of-week');
  const curentDayOfWeek = [];
  const dateOfMonday = getMonday(curentDate);
  
  const startWeek = dateOfMonday;
  const dateOfMondayWee = dateOfMonday.getDate();
  console.log('qqqqqq = ' + dateOfMonday);
  console.log(' = ' + startWeek);

  for (let i = 0; i < dateOfMondayElem.length; i++) {
    curentDayOfWeek.push(startWeek.setDate(dateOfMondayWee + i));
    dateOfMondayElem[i].innerHTML = startWeek.getDate(startWeek.setDate(dateOfMondayWee + i));
  }
  
  return curentDayOfWeek;
}

getWeek(new Date());

//get curentDay

const dateOfMondayElem = document.querySelectorAll('.curent-date-of-week');
const daysOfWeek = document.querySelectorAll('.navigation__days');

function addClassCurentDate(){
  const curentDayOfWeek = new Date().getDay();

  dateOfMondayElem[curentDayOfWeek - 1].classList.add('date-today');
  daysOfWeek[curentDayOfWeek - 1].classList.add('day-today');
  
}

addClassCurentDate();

function checkCurentWeek(week){
  const curentDate = new Date();
  // console.log('our week' + week);
  
  // console.log(`${week[0]} < ${curentDate.getTime()} && ${week[week.length - 1]} > ${curentDate.getTime()}`)
  // console.log(`${Boolean(week[0] < curentDate.getTime())} && ${Boolean(week[week.length - 1] > curentDate.getTime())}`);
  if (week[0] < curentDate.getTime() && week[week.length - 1] > curentDate.getTime()) {
    addClassCurentDate();
  } else {
    removeClassCurentDate();
  }
}

function removeClassCurentDate(){
  const curentDayOfWeek = new Date().getDay();

  dateOfMondayElem[curentDayOfWeek - 1].classList.remove('date-today');
  daysOfWeek[curentDayOfWeek - 1].classList.remove('day-today');
}


//switch week

const switchRigth = document.querySelector('.angle-rigth');
const switchRigthSpan = switchRigth.parentNode;

const switchLeft = document.querySelector('.angle-left');
const switchLeftSpan = switchLeft.parentNode;

const dayToday = new Date();
const daysInWeek = 7;

  function toNextWeek(){
    const nextWeek = getMonday(dayToday, 7);
    const week = renderDayCell(new Date(nextWeek));
    checkCurentWeek(week);
  }

  function toPreviosWeek(){
    const previosWeek = getMonday(dayToday, -7);
    const week = renderDayCell(new Date(previosWeek));
    checkCurentWeek(week);
  }

  switchRigthSpan.addEventListener('click', toNextWeek);
  switchLeftSpan.addEventListener('click', toPreviosWeek);