import React from "react";
import BookingForm from "../../bookingForm/BookingForm";

const BookingPage = ({ availableTimes, setAvailableTimes, submitForm }) => {
  return (
    <main className="page-section">
      <div className="container">
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
          submitForm={submitForm}
        />
      </div>
    </main>
  );
};

export default BookingPage;
