import React from "react";
import PropTypes from "prop-types";

import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";

import "./calendar.scss";

const Calendar = ({ weekDates, handleDeleteEvent, events }) => {
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            handleDeleteEvent={handleDeleteEvent}
            events={events}
          />
        </div>
      </div>
    </section>
  );
};

Calendar.propTypes = {
  handleDeleteEvent: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array,
};

Calendar.defaultProps = {
  events: [],
};

export default Calendar;
