import React, { useState } from "react";
import moment from "moment";

import { createEvent } from "../../gateway/events";
import { getDateTime } from "../../utils/dateUtils";

import "./modal.scss";

const Modal = ({ requestForEvents, closeModal }) => {
  const [eventInfo, setEventInfo] = useState({
    title: "",
    date: moment(new Date()).format("YYYY-MM-DD"),
    startTime: "",
    endTime: "",
    description: "",
  });

  const { title, date, startTime, endTime, description } = eventInfo;

  const createEventHandler = (event) => {
    event.preventDefault();

    const newEvent = {
      title,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
      description,
      status: false,
    };

    createEvent(newEvent).then(() => requestForEvents());
    closeModal();
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={closeModal}>
            +
          </button>
          <form className="event-form" onSubmit={createEventHandler}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={(e) =>
                setEventInfo({ ...eventInfo, title: e.target.value })
              }
              value={title}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={(e) =>
                  setEventInfo({ ...eventInfo, date: e.target.value })
                }
                value={date}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={(e) =>
                  setEventInfo({ ...eventInfo, startTime: e.target.value })
                }
                value={startTime}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={(e) =>
                  setEventInfo({ ...eventInfo, endTime: e.target.value })
                }
                value={endTime}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={(e) =>
                setEventInfo({ ...eventInfo, description: e.target.value })
              }
              value={description}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
