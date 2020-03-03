export const setItem = (key, value) => {
  localStorage.setItem('events', JSON.stringify(value));
}

export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

// export const setColor = (key, value) => {
//   localStorage.setItem('color', JSON.stringify(value));
// }

// export const getColor = (key) => {
//   return JSON.parse(localStorage.getItem(key));
// }

// export const events = [
//   { 
//     nameOfEvent: 'Meet with friends',
//     data: new Date(2020, 1, 27),
//     startEvent: '01:00',
//     endEvent: '02:00',
//     description: "Call to Mike before meet",
//     id: Math.random().toString(16).substring(9),
//   },
//   { 
//     nameOfEvent: 'Go to football',
//     data: new Date(2020, 1, 25),
//     startEvent: '13:00',
//     endEvent: '14:45',
//     description: "Don't forget tickets",
//     id: Math.random().toString(16).substring(9),
//   },
//   { 
//     nameOfEvent: 'Buy something',
//     data: new Date(2020, 1, 18),
//     startEvent: '14:00',
//     endEvent: '15:00',
//     description: "",
//     id: Math.random().toString(16).substring(9),
//   },
//   { 
//     nameOfEvent: 'Go to hospital',
//     data: new Date(2020, 1, 22),
//     startEvent: '15:30',
//     endEvent: '16:00',
//     description: "take a taxi",
//     id: Math.random().toString(16).substring(9),
//   },
//   { 
//     nameOfEvent: 'Skype with mentor',
//     data: new Date(2020, 1, 26),
//     startEvent: '18:45',
//     endEvent: '21:15',
//     description: "Write todo list",
//     id: Math.random().toString(16).substring(9),
//   },
//   { 
//     nameOfEvent: 'English lesson',
//     data: new Date(2020, 1, 26),
//     startEvent: '22:45',
//     endEvent: '23:00',
//     description: "",
//     id: Math.random().toString(16).substring(9),
//   },
//   { 
//     nameOfEvent: 'Event fake',
//     data: new Date(2020, 1, 26),
//     startEvent: '10:45',
//     endEvent: '10:00',
//     description: "",
//     color: null,
//     id: Math.random().toString(16).substring(9),
//   },
//   { 
//     nameOfEvent: 'Event fake2',
//     data: new Date(2020, 1, 26),
//     startEvent: '19:15',
//     endEvent: '18:00',
//     description: "",
//     color: null,
//     id: Math.random().toString(16).substring(9),
//   },
//   { 
//     nameOfEvent: 'My Birthday',
//     data: new Date(2020, 2, 5),
//     startEvent: '10:45',
//     endEvent: '11:00',
//     description: "",
//     color: null,
//     id: Math.random().toString(16).substring(9),
//   },
//   { 
//     nameOfEvent: 'Drink beer',
//     data: new Date(2020, 2, 5),
//     startEvent: '19:15',
//     endEvent: '20:00',
//     description: "",
//     color: null,
//     id: Math.random().toString(16).substring(9),
//   },
// ];