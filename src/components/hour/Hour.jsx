import React from "react";
import Event from "../event/Event";
import { formatMins } from "../../utils/dateUtils.js";
import PropTypes from "prop-types";

const Hour = ({ hourEvents, handleDeleteEvent }) => {
  return (
    <>
      <div className="calendar__time-slot">
        {hourEvents.map((event) => {
          const { dateFrom, dateTo } = event;

          const eventStart = `${dateFrom.getHours()}:${formatMins(
            dateFrom.getMinutes()
          )}`;
          const eventEnd = `${dateTo.getHours()}:${formatMins(
            dateTo.getMinutes()
          )}`;

          return (
            <Event
              key={event.id}
              {...event}
              time={`${eventStart} - ${eventEnd}`}
              handleDeleteEvent={handleDeleteEvent}
            />
          );
        })}
      </div>
    </>
  );
};

Hour.propTypes = {
  handleDeleteEvent: PropTypes.func.isRequired,
  hourEvents: PropTypes.array,
};

Hour.defaultprops = {
  hourEvents: [],
};

export default Hour;
