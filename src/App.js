import "./App.css";

import Main from "./components/pages/homePage/Main";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import BookingPage from "./components/pages/bookingPage/BookingPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useReducer, useState } from "react";

const reducer = (state, action) => {
  return state;
};

function App() {
  const updateTimes = (date) => {
    // setAvailableTimes([...availableTimes]);
  };

  const initializeTimes = ["Select time", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const [state, dispatch] = useReducer(reducer, initializeTimes);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/bookATable"
            element={<BookingPage availableTimes={state} setAvailableTimes={dispatch} />}
          />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
