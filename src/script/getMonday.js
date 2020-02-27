import { isSunday } from './navigationButton.js'

export function getMonday(date){
  const getDate = date.getDate(); 
  let getDay = date.getDay();

  getDay = isSunday(getDay);
  const getMonday = date.setDate(getDate - getDay + 1);

  return new Date(getMonday);
}
