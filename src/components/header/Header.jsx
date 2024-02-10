import "./header.css";
import Nav from "../Nav";
import logo from "../../images/Logo.svg";
import { BsBasket } from "react-icons/bs";

const Header = ({ itemsCount }) => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Little Lemon Restaurant Logo" />
        </div>
        <div className="menu-nav-row">
          <Nav />
          <div className="basket-container">
            <BsBasket size={25} />
            <div className="item-count-container">0</div>
            {/* <div className="item-count-container">{itemsCount}</div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
