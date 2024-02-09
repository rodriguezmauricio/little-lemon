import "./cards.css";
import { MdOutlineDeliveryDining } from "react-icons/md";

const Cards = ({ img, alt, title, price, description, link }) => {
  return (
    <article className="card-container">
      <div
        className="img-container"
        style={{
          // backgroundColor: "red",
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <img src={img} alt="" /> */}
      </div>
      <div className="card-content">
        <div className="title-row">
          <h3 className="card-title">{title}</h3>
          <span className="card-title price">{`$${price}`}</span>
        </div>
        <p>{description}</p>
        <div className="button-row">
          <span>Order a delivery</span> <MdOutlineDeliveryDining size={25} />
        </div>
      </div>
    </article>
  );
};

export default Cards;
