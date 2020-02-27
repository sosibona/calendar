import { generateNumber } from './generateNumber.js';

const dateOfMonthElem = document.querySelector('.date-of-month');
 
export const renderWeek =() => {
  const numberOfWeek = generateNumber(1, 7)
    .map(dayOfWeek => 
      `<span class="curent-date-of-week"></span>`).join('');

      dateOfMonthElem.innerHTML = numberOfWeek;
}