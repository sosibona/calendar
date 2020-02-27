let timerId;
let i = 0;

function go(){
  countLineTime();
  timerId = setInterval(countLineTime, 60000);
}

export function stopLine(){
  console.log('stop');
  
  clearInterval(timerId)
}

export function start(){
  go();
}

function countLineTime(){
  let nowTimeHour = new Date().getHours();
  const nowTimeMinutes = new Date().getMinutes();
  // const nowTimeMinutes = new Date().getSeconds();
  
  const lineTimeElem = document.querySelector('.line-now');
  // lineTimeElem.style.top = `${60 * nowTimeHour + nowTimeMinutes}px`;
  lineTimeElem.style.top = `${60 * nowTimeHour + nowTimeMinutes}px`;
  lineTimeElem.firstChild.innerHTML = `${nowTimeHour}:${nowTimeMinutes}`;
}
