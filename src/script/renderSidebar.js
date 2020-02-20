const sidebarElem = document.querySelector('.time');

 export const generateNumber = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
}

const renderSidebar = () => {
const hoursByDay = generateNumber(1,24).map(time =>
    `<div class="time-in-day" data-time-of-day="${time}">
    ${time.toString().length < 2 ? time.toString().padStart(2, 0) : time}:00
    </div>`).join('');
  
    sidebarElem.innerHTML = hoursByDay;

}

renderSidebar();

const currentWeekElem = document.querySelector('.current-week');

const getCellHourForDay = () => generateNumber(1, 7)
  .map(hourDay => `<div class="row-hour" data-number-day="${hourDay}"></div>`).join('');

const renderDayCell = () => {
  const CellHourForDay = getCellHourForDay();
  const hourLine = generateNumber(1, 24)
      .map(hour => 
        `<div class="line-hour" data-number-hour="${hour}">
        ${CellHourForDay}
        </div>`).join('');

  currentWeekElem.innerHTML = hourLine;  
}

renderDayCell();


function getMonday(){  
  const curentDate = new Date();
  const numberDayOfWeek = curentDate.getDay();
  const numberDayOfMonth = curentDate.getDate();
  const startWeek = curentDate;

  startWeek.setDate(numberDayOfMonth - numberDayOfWeek + 1)
  const dateOfMonday = startWeek.getDate();
  
  const dateOfMondayElem = document.querySelectorAll('.curent-date-of-week');

  for (let i = 0; i < dateOfMondayElem.length; i++) {
    dateOfMondayElem[i].innerHTML = dateOfMonday + i;
  }
}

getMonday();

function getCurentDay(){
  const curentDate = new Date();
  const curentDayOfWeek = curentDate.getDay();
  const dateOfMondayElem = document.querySelectorAll('.curent-date-of-week');
  const daysOfWeek = document.querySelectorAll('.navigation__days');
  dateOfMondayElem[curentDayOfWeek - 1].classList.add('date-today');
  daysOfWeek[curentDayOfWeek - 1].classList.add('day-today');
}
getCurentDay()