import React from "react";
import BookingForm from "../../bookingForm/BookingForm";

const BookingPage = ({ formContent, handleFormContent, availableTimes, setAvailableTimes }) => {
  return (
    <main className="page-section">
      <div className="container">
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
      </div>
    </main>
  );
};

export default BookingPage;
