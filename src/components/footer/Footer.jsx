import menuLinks from "../../data/navLinks";
import logo from "../../images/Logo .svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_col">
          <img src={logo} alt="Little Lemon Restaurant Logo" />
        </div>

        <nav className="footer_col">
          <h3>Doormat Navigation</h3>
          <ul>
            {menuLinks.map((item) => {
              return (
                <a href={item.link}>
                  <li key={item.text}>{item.text}</li>
                </a>
              );
            })}
          </ul>
        </nav>

        <div className="footer_col">
          <h3>Contact</h3>
          <div className="">
            <p>Little Lemon Street, 180, CA.</p>
            <p>555-123-454</p>
            <p>contact@littlelemon.com</p>
          </div>
        </div>

        <div className="footer_col">
          <h3>Social Media Links</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
