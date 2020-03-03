

// import { setColor, getColor } from './storage.js'

// const settingElem = document.querySelector('.header__setting-icon');

// settingElem.addEventListener('click', showSetting)

// export function showSetting() {
//   const settingForm = document.querySelector('.header__setting');
//   settingForm.classList.toggle('switch-setting')
// }

// const defaultColorBtn = document.querySelector('.btn-setting-default');

// defaultColorBtn.addEventListener('click', resetColor)

// function resetColor() {
//   setColor('color', defaultColor);

//   const newColor = getColor('color');
// }

// const defaultColor = {
//   mainColor: "#ffffff",
//   headerColor: "#ffffff",
//   eventColor: "#47d6dc",
//   borderEventColor: "#0000ff",
//   textEventColor: "#000000",
// }

// setColor('color', defaultColor);

// const settingBtn = document.querySelector('.btn-setting');

// settingBtn.addEventListener('click', changeColor);

// const calendarElem = document.querySelector('.calendar');
// const headerElem = document.querySelector('.header');
// const eventElem = document.querySelector('.event');
// const borderEventElem = document.querySelector('.event');
// const textEventElem = document.querySelector('.event');

// const mainColorElem = document.querySelector('#window');
// const headerColorElem = document.querySelector('#header');
// const eventColorElem = document.querySelector('#event');
// const borderColorElem = document.querySelector('#borderEvent');
// const textColorElem = document.querySelector('#textEvents');

// function changeColor(){
//   const newColor = {
//     mainColor: mainColorElem.value,
//     headerColor: headerColorElem.value,
//     eventColor: eventColorElem.value,
//     borderEventColor: borderColorElem.value,
//     textEventColor: textColorElem.value,
//   }

//   setColor('color', newColor);
//   isChangeColor()
//   showSetting()
// }

// function isChangeColor(){
//   const newColor = getColor('color');

//   calendarElem.style.backgroundColor = newColor.mainColor;
//   headerElem.style.backgroundColor = newColor.headerColor;
//   console.log(eventElem);
  
//   eventElem.style.backgroundColor = newColor.eventColor;
//   borderEventElem.style.border = `1px solid ${newColor.borderEventColor}`;
//   textEventElem.style.color = newColor.textEventColor;
// }

