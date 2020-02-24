// export const getMonday = date => {
//   const getDate = date.getDate();
//   const getDay = date.getDay();

//   const getMonday = date.setDate(getDate - getDay + 1);
//   return new Date(getMonday);
// }

import { isSunday } from './renderSidebar.js'

export function getMonday(date){
  // console.log(date);
  
  const getDate = date.getDate(); 
  // console.log('getDate = ' + getDate);


  let getDay = date.getDay();

  getDay = isSunday(getDay);

  // console.log('getDay = ' + getDay);

  const getMonday = date.setDate(getDate - getDay + 1);
  // console.log(new Date(getMonday));//wrong
  
  return new Date(getMonday);
}
