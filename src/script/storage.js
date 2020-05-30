export const setItem = (key, value) => {
  localStorage.setItem('events', JSON.stringify(value));
}

export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
}