import React, { useState } from "react";
import "./bookingForm.css";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// set up the validation schema for the form
const schema = yup.object({
  date: yup
    .date()
    .typeError("Select your reservation date")
    .required("Select your reservation date"),
  time: yup
    .string()
    .required("Select reservation hour.")
    .test("is-not-default", "Select time", (value) => value !== "Select time"),
  numberOfGuests: yup
    .number()
    .typeError("Choose a number of guests from 1 to 10.")
    .positive("Choose a number of guests from 1 to 10.")
    .integer("Choose a number of guests from 1 to 10.")
    .required("Choose a number of guests from 1 to 10.")
    .min(1, "Choose a number of guests from 1 to 10.")
    .max(10, "Choose a number of guests from 1 to 10."),
  occasion: yup
    .string()
    .required("Let us know the occasion.")
    .test("is-not-default", "Select an occasion", (value) => value !== "Select occasion"),
});

const BookingForm = ({ availableTimes, setAvailableTimes, submitForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const [formContent, setFormContent] = useState({
    date: "",
    time: "",
    numberOfGuests: "0",
    occasion: "Select Occasion",
  });

  // const handleFormContent = (event) => {
  //   setFormContent({ ...formContent, [event.target.name]: event.target.value });
  //   console.log(event.target.value);
  // };

  const sendFormContent = (data) => {
    console.log(data);
    navigate("/confirmedBooking");
  };

  return (
    <>
      <h1 className="subtitle">Reserve a Table</h1>
      <form className="booking-form-container" onSubmit={handleSubmit(sendFormContent)}>
        <label htmlFor="res-date">Choose date</label>
        <input className="booking-form-input" {...register("date")} type="date" />
        <p className="error-message">{errors.date?.message}</p>

        <label htmlFor="res-time">Choose time</label>
        <select className="booking-form-input" {...register("time")}>
          {availableTimes.map((time) => {
            return (
              <option key={time} value={time}>
                {time}
              </option>
            );
          })}
        </select>
        <p className="error-message">{errors.time?.message}</p>

        <label htmlFor="guests">Number of guests</label>
        <input
          className="booking-form-input"
          {...register("numberOfGuests")}
          type="number"
          placeholder="0"
          min="1"
          max="10"
        />
        <p className="error-message">{errors.numberOfGuests?.message}</p>

        <label htmlFor="occasion">Occasion</label>
        <select className="booking-form-input" {...register("occasion")}>
          <option>Select occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <p className="error-message">{errors.occasion?.message}</p>
        <Button className="booking-form-input" type="submit">
          Make Your reservation
        </Button>
      </form>
    </>

    // <>
    //   <h1 className="subtitle">Reserve a Table</h1>
    //   <form className="booking-form-container" onSubmit={sendFormContent}>
    //     <label htmlFor="res-date">Choose date</label>
    //     <input
    //       className="booking-form-input"
    //       type="date"
    //       name="date"
    //       onChange={handleFormContent}
    //     />

    //     <label htmlFor="res-time">Choose time</label>
    //     <select className="booking-form-input" name="time" onChange={handleFormContent}>
    //       {availableTimes.map((time) => {
    //         return (
    //           <option key={time} value={time}>
    //             {time}
    //           </option>
    //         );
    //       })}
    //     </select>

    //     <label htmlFor="guests">Number of guests</label>
    //     <input
    //       className="booking-form-input"
    //       type="number"
    //       placeholder="0"
    //       min="1"
    //       max="10"
    //       name="numberOfGuests"
    //       onChange={handleFormContent}
    //     />

    //     <label htmlFor="occasion">Occasion</label>
    //     <select className="booking-form-input" name="occasion" onChange={handleFormContent}>
    //       <option>Select occasion</option>
    //       <option>Birthday</option>
    //       <option>Anniversary</option>
    //     </select>

    //     <Button className="booking-form-input" type="submit">
    //       Make Your reservation
    //     </Button>
    //   </form>
    // </>
  );
};

export default BookingForm;
