import { getMonday } from './getMonday.js';

export const getWeek = date => {
  const newDate = getMonday(date);
  const week = [];
  const oneDay = 86400000;

  for (let i = 0; i <= 6; i++) {
    week.push(newDate.getTime() + oneDay * i);
  }

  const weekUp = week.map(elem => {
    const getDate = new Date(elem).getDate();
    
    const getMonth = new Date(elem).getMonth();
    const getFullYear = new Date(elem).getFullYear();

    const newDate = new Date(getFullYear, getMonth, getDate).getTime();
    return newDate;
  })

  return weekUp; 
}