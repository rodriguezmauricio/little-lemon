import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import BookATable from "./components/pages/BookATable";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bookATable" element={<BookATable />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
