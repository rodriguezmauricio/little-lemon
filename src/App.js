import "./App.css";
import Main from "./components/pages/homePage/Main";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import BookingPage from "./components/pages/bookingPage/BookingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useReducer } from "react";
import fakeAPI from "./data/api";
import ConfirmedBookingPage from "./components/pages/confirmedBookingPage/ConfirmedBookingPage";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_AVAILABLE_TIMES":
      return {
        ...state,
        availableTimes: action.payload,
      };
    default:
      return state;
  }
};

function App() {
  // const navigate = useNavigate();

  const { fetchAPI, submitAPI } = fakeAPI;

  const [state, dispatch] = useReducer(reducer, {
    availableTimes: ["Select time", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  });

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const today = new Date();

    const initializeTimes = async () => {
      const availableTimes = await fetchAPI(today);
      dispatch({ type: "SET_AVAILABLE_TIMES", payload: availableTimes });
    };

    initializeTimes();
  }, [fetchAPI]);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/bookATable"
            element={
              <BookingPage
                availableTimes={state.availableTimes}
                setAvailableTimes={dispatch}
                submitForm={submitForm}
              />
            }
          />
          <Route path="/confirmedBooking" element={<ConfirmedBookingPage />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
