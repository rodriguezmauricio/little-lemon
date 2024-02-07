import Nav from "./Nav";
import logo from "../images/Logo.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Little Lemon Restaurant Logo" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
