export const getMonday = date => {
  const getDate = date.getDate();
  const getDay = date.getDay();

  const getMonday = date.setDate(getDate - getDay + 1);
  return new Date(getMonday);
}