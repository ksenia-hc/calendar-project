import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../modal/Modal";
import { months } from "../../utils/dateUtils.js";

import "./header.scss";

const Header = ({
  setTodaysDate,
  prevWeek,
  weekDates,
  nextWeek,
  requestForEvents,
}) => {
  const [isModalVisible, toggleModalVisibility] = useState(false);

  const firstDayOfCurrentWeek = weekDates[0];
  const lastDayOfCurrentWeek = weekDates[weekDates.length - 1];

  const monthDisplayed =
    firstDayOfCurrentWeek.getMonth() === lastDayOfCurrentWeek.getMonth()
      ? `${months[firstDayOfCurrentWeek.getMonth()]}`
      : `${months[firstDayOfCurrentWeek.getMonth()]} - ${
          months[lastDayOfCurrentWeek.getMonth()]
        }`;

  return (
    <>
      <header className="header">
        <button
          className="button create-event-btn"
          onClick={() => toggleModalVisibility(!isModalVisible)}
        >
          <i className="fas fa-plus create-event-btn__icon"></i>
          Create
        </button>
        <div className="navigation">
          <button
            className="navigation__today-btn button"
            onClick={setTodaysDate}
          >
            Today
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={prevWeek}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={nextWeek}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <span className="navigation__displayed-month">{monthDisplayed}</span>
        </div>
      </header>
      {isModalVisible && (
        <Modal
          closeModal={() => toggleModalVisibility(!isModalVisible)}
          requestForEvents={requestForEvents}
        />
      )}
    </>
  );
};

Header.propTypes = {
  setTodaysDate: PropTypes.func.isRequired,
  prevWeek: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
  nextWeek: PropTypes.func.isRequired,
  requestForEvents: PropTypes.func.isRequired,
};

export default Header;
