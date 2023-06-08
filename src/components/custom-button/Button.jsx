import "./Button.css";

function Button({
  children,
  onClickHandler = () => {},
  className = "",
  ...otherProps
}) {
  return (
    <button className={className} {...otherProps} onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default Button;
