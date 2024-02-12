import { Link } from "react-router-dom";
import Button from "../../button/Button";
import "./confirmedBookingPage.css";

const ConfirmedBookingPage = () => {
  return (
    <main className="page-section">
      <div className="container confirmed-content">
        <h1 className="subtitle">Reservation Confirmed</h1>
        <p>Your reservation has been confirmed!</p>
        <p>We expect to to see you soon.</p>
        <Link to={"/"}>
          <Button>Go back to Home page</Button>
        </Link>
      </div>
    </main>
  );
};

export default ConfirmedBookingPage;
