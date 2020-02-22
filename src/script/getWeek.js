import { getMonday } from './getMonday.js';

export const getWeek = date => {
  const newDate = getMonday(date);
  const week = [];
  const oneDay = 86400000;

  for (let i = 0; i <= 6; i++) {
    week.push(newDate.getTime() + oneDay * i);
  }

  return week; 
}