const settingElem = document.querySelector('.header__setting-icon');

settingElem.addEventListener('click', showSetting)

export function showSetting() {
  const settingForm = document.querySelector('.header__setting');
  settingForm.classList.toggle('switch-setting')
}