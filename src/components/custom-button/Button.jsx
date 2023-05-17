import "./Button.scss";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      className={`btn--default ${className} radius-base px-3 py-2`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
