import React from "react";
import Day from "../day/Day";
import "./week.scss";
import PropTypes from "prop-types";

const Week = ({ weekDates, events, handleDeleteEvent }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );

        const daysWithWithoutLine = [];
        daysWithWithoutLine.push(
          new Date().getDate() === dayStart.getDate() &&
            new Date().getMonth() === dayStart.getMonth()
        );

        return (
          <Day
            key={dayStart.getDate()}
            dayEvents={dayEvents}
            handleDeleteEvent={handleDeleteEvent}
            daysWithWithoutLine={daysWithWithoutLine}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  handleDeleteEvent: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array,
};

Week.defaultProps = {
  events: [],
};

export default Week;
