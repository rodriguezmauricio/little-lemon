import "./cards.css";
import { MdOutlineDeliveryDining } from "react-icons/md";

const Cards = ({ img, alt, title, price, description, link }) => {
  return (
    <article className="card-container">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="card-content">
        <div className="title-row">
          <h3>{title}</h3>
          {`$${price}`}
        </div>
        <p>{description}</p>
        <div className="">
          Order a delivery <MdOutlineDeliveryDining />
        </div>
      </div>
    </article>
  );
};

export default Cards;
