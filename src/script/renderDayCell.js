import { getWeek } from './getWeek.js';
import { generateNumber } from './generateNumber.js';

const getCellHoursForDay = () => generateNumber(1, 24)
  .map(hoursDay => `<div class="row-hour" data-hour="${hoursDay}"></div>`).join('');

export const renderDayCell = (date) => {
  const currentWeekElem = document.querySelector('.current-week');
  const currentWeek = getWeek(date);
  const CellHourForDay = getCellHoursForDay();
  const dayOfWeek = generateNumber(0, 6)
      .map(day => 
        `<div class="day-by-hours" data-date-of-day="${currentWeek[day]}">
        ${CellHourForDay}
        </div>`).join('');

  currentWeekElem.innerHTML = dayOfWeek;  
}
