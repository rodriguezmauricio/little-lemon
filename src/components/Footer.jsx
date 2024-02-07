import menuLinks from "../data/navLinks";
import logo from "../images/Logo .svg";

const Footer = () => {
  return (
    <footer>
      <div className="">
        <img src={logo} alt="Little Lemon Restaurant Logo" />
      </div>

      <nav className="">
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

      <div className="">
        <h3>Contact</h3>
        <p>Little Lemon Street, 180, CA.</p>
        <p>555-123-454</p>
        <p>contact@littlelemon.com</p>
      </div>

      <div className="">
        <h3>Social Media Links</h3>
      </div>
    </footer>
  );
};

export default Footer;
