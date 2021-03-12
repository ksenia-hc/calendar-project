import React, { useEffect, useState } from "react";

import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import { fetchEvents, deleteEvent } from "./gateway/events";
import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const [weekStartDate, setweekStartDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  useEffect(() => {
    requestForEvents();
  }, [weekStartDate]);

  const requestForEvents = () => {
    fetchEvents()
      .then((events) =>
        setEvents(
          events.filter(
            (event) =>
              new Date(event.dateFrom) > new Date(weekDates[0]) &&
              new Date(event.dateFrom) < new Date(weekDates[6])
          )
        )
      )
      .catch((error) => alert(error.message));
  };

  const handleDeleteEvent = (id) =>
    deleteEvent(id).then(() => requestForEvents());

  return (
    <>
      <Header
        prevWeek={() => {
          setweekStartDate(
            new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))
          );
        }}
        nextWeek={() => {
          setweekStartDate(
            new Date(weekStartDate.setDate(weekStartDate.getDate() + 7))
          );
        }}
        requestForEvents={requestForEvents}
        setTodaysDate={() => {
          setweekStartDate(new Date());
        }}
        weekDates={weekDates}
      />
      <Calendar
        weekDates={weekDates}
        weekDates={weekDates}
        handleDeleteEvent={handleDeleteEvent}
        events={events}
      />
    </>
  );
};

export default App;
