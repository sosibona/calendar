const settingElem = document.querySelector('.header__setting-icon');

settingElem.addEventListener('click', showSetting)

export function showSetting() {
  const settingForm = document.querySelector('.header__setting');
  settingForm.classList.toggle('switch-setting')
}

const settingBtn = document.querySelector('.btn-setting');

settingBtn.addEventListener('click', changeColor);

const mainColorElem = document.querySelector('#window');
const calendarElem = document.querySelector('.calendar');

function changeColor(){
  const newColor = mainColorElem.value;

  calendarElem.style.backgroundColor = newColor;
  showSetting()
}
