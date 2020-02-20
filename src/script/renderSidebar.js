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
