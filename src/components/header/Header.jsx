import "./header.css";
import Nav from "../Nav";
import logo from "../../images/Logo.svg";
import { BsBasket, BsX } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const Header = ({ itemsCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Little Lemon Restaurant Logo" />
          </a>
        </div>

        <div className="menu-nav-row">
          <div className={`mobile-nav ${isMobileMenuOpen ? "" : "mobile-nav-hide"}`}>
            <Nav />
          </div>

          <div className="basket-container">
            <BsBasket size={25} />
            <div className="item-count-container">0</div>
            {/* <div className="item-count-container">{itemsCount}</div> */}
          </div>

          <div className="mobile-menu" onClick={handleToggleMobileMenu}>
            {isMobileMenuOpen ? <BsX size={30} /> : <MdMenu size={30} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
