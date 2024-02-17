import menuLinks from "../../data/navLinks";
import logo from "../../images/Logo .svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer data-testid="footer">
      <div className="container">
        <div className="footer_col">
          <img src={logo} alt="Little Lemon Restaurant Logo" />
        </div>

        <nav className="footer_col">
          <h3 className="section-title footer-title">Doormat Navigation</h3>
          <ul>
            {menuLinks.map((item) => {
              return (
                <a href={item.link} key={item.text}>
                  <li>{item.text}</li>
                </a>
              );
            })}
          </ul>
        </nav>

        <div className="footer_col">
          <h3 className="section-title footer-title">Contact</h3>
          <div className="">
            <li>Little Lemon Street, 180, CA.</li>
            <li>555-123-454</li>
            <li>contact@littlelemon.com</li>
          </div>
        </div>

        <div className="footer_col">
          <h3 className="section-title footer-title">Social Media Links</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
