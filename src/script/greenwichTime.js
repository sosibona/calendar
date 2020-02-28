const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const greenwichTimeElem = document.querySelector('.greenwich-zone');
const [formatterHour] = formatter.format(new Date()).split(':');
const timeDifference = (new Date().getHours() - +formatterHour).toString();

export function greenwichTime(date){
    greenwichTimeElem.innerHTML = `GMT +${timeDifference.length < 2 ? timeDifference.padStart(2, 0) : timeDifference}:00`;
}