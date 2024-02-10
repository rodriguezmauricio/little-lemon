import "./App.css";

import Main from "./components/pages/homePage/Main";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import BookingPage from "./components/pages/bookingPage/BookingPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bookATable" element={<BookingPage />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
