import React, { useState } from "react";
import "./event.scss";
import PropTypes from "prop-types";

const Event = ({ title, dateFrom, dateTo, id, time, handleDeleteEvent }) => {
  const [isDeleteBtnVisible, toggleDeleteBtnVisibility] = useState(false);

  const eventStyle = {
    height: (dateTo.getTime() - dateFrom.getTime()) / (1000 * 60),
    marginTop: dateFrom.getMinutes(),
  };

  return (
    <div
      className="event"
      style={eventStyle}
      onClick={() => toggleDeleteBtnVisibility(!isDeleteBtnVisible)}
    >
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {isDeleteBtnVisible && (
        <div className="delete-event-btn" onClick={() => handleDeleteEvent(id)}>
          <i className="fas fa-trash"></i>
          <span className="delete-event-btn__title">Delete</span>
        </div>
      )}
    </div>
  );
};

Event.propTypes = {
  handleDeleteEvent: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  time: PropTypes.string,
  title: PropTypes.string,
  dateFrom: PropTypes.object,
  dateTo: PropTypes.object,
};

Event.defaultProps = {
  time: "",
  title: "",
  dateFrom: new Date(),
  dateTo: new Date(),
};

export default Event;
