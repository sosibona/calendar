export let timerId;

export function startLine(){
  countLineTime();
  timerId = setInterval(countLineTime, 60000);
}

clearInterval(timerId)

function countLineTime(){
  const nowTimeHour = new Date().getHours();
  const nowTimeMinutes = new Date().getMinutes();
  
  const lineTimeElem = document.querySelector('.line-now');
  lineTimeElem.style.top = `${60 * nowTimeHour + nowTimeMinutes}px`;
  lineTimeElem.firstChild.innerHTML = `${nowTimeHour}:${nowTimeMinutes}`;
}
