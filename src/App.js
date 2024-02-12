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
    availableTimes: [],
  });

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    console.log("useEffect called");
    const today = new Date();

    const initializeTimes = async () => {
      const availableTimes = await fetchAPI(today);
      console.log("availableTimes:", availableTimes); // Debugging log
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
