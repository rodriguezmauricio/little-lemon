import menuLinks from "../data/navLinks";

const Nav = () => {
  return (
    <nav>
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
  );
};

export default Nav;
