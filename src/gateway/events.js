const baseUrl = `https://5ffacff987478d0017d9a8a0.mockapi.io/tasks/grom/tasks`;

export const fetchEvents = () => {
  return fetch(baseUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Internal Server Error. Can't display events");
    })
    .then((events) =>
      events.map(({ _id, dateFrom, dateTo, ...rest }) => ({
        id: _id,
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
        ...rest,
      }))
    );
};

export const createEvent = (event) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });

export const deleteEvent = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
};
