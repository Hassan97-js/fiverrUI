import "./Button.scss";

const Button = ({
  children,
  sm = false,
  onClick,
  className = "",
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={`btn--default ${className} ${
        sm ? "btn--sm" : ""
      } radius-base px-3 py-2`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
