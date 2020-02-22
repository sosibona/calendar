import { generateNumber } from './generateNumber.js';

export const dateOfMonthElem = document.querySelector('.date-of-month');
 
export const renderDateOfWeek =() => {
  const numberOfWeek = generateNumber(1, 7)
    .map(dayOfWeek => 
      `<span class="curent-date-of-week"></span>`).join('');

      dateOfMonthElem.innerHTML = numberOfWeek;
}

renderDateOfWeek();