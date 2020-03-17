const urlServerApi = 'https://5e6b6f91d708a000160b48ba.mockapi.io/api/v1/events';

export const getEvents = () => {
  return fetch(urlServerApi)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Internal Server Error get');
    })
    .catch((error => alert(error)));
};

export const createNewEvent = eventData => {
  return fetch(urlServerApi, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(eventData)
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error('Internal Server Error post');
  })
  .catch((error => alert(error)));
};

export const updateEvent = (eventId, updatedEvent) => {
  return fetch(`${urlServerApi}/${eventId}`, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(updatedEvent)
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error('Internal Server Error put');
  })
  .catch((error => alert(error)));
};

export const deleteEvent = eventId => {
  return fetch(`${urlServerApi}/${eventId}`, {
    method: 'DELETE',
  })
  // .then(response => {
  //   if (response.ok) {
  //     return response.json()
  //   }
  //   throw new Error('Internal Server Error delete');
  // })
  // .catch((error => alert(error)));
};
