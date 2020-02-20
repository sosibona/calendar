const renderSidebar = document.querySelector('.time');

const generateNamber = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
}


const hoursByDay = generateNamber(1,24).map(time =>
    `<div class="time-in-day" data-time-of-day="${time}">
    ${time.toString().length < 2 ? time.toString().padStart(2, 0) : time}:00
    </div>`).join('');
  
  renderSidebar.innerHTML = hoursByDay;


  hoursByDay();