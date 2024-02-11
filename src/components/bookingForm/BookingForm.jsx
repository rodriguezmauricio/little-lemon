import React, { useState } from "react";
import "./bookingForm.css";
import Button from "../button/Button";

const BookingForm = ({ availableTimes, setAvailableTimes }) => {
  const [formContent, setFormContent] = useState({
    date: "",
    time: "",
    numberOfGuests: "0",
    occasion: "Select Occasion",
  });

  const handleFormContent = (event) => {
    setFormContent({ ...formContent, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  const sendFormContent = (event) => {
    event.preventDefault();
    console.log(formContent);
  };

  return (
    <>
      <h1 className="subtitle">Reserve a Table</h1>
      <form className="booking-form-container" onSubmit={sendFormContent}>
        <label htmlFor="res-date">Choose date</label>
        <input
          className="booking-form-input"
          type="date"
          name="date"
          onChange={handleFormContent}
        />

        <label htmlFor="res-time">Choose time</label>
        <select className="booking-form-input" name="time" onChange={handleFormContent}>
          {availableTimes.map((time) => {
            return (
              <option key={time} value={time}>
                {time}
              </option>
            );
          })}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          className="booking-form-input"
          type="number"
          placeholder="0"
          min="1"
          max="10"
          name="numberOfGuests"
          onChange={handleFormContent}
        />

        <label htmlFor="occasion">Occasion</label>
        <select className="booking-form-input" name="occasion" onChange={handleFormContent}>
          <option>Select occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <Button className="booking-form-input" type="submit">
          Make Your reservation
        </Button>
      </form>
    </>
  );
};

export default BookingForm;
