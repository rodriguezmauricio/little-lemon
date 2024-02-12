import "./button.css";

const Button = ({ children }) => {
  return (
    <button className="button" aria-label="On click">
      {children}
    </button>
  );
};

export default Button;
