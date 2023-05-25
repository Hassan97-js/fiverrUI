import "./Breadcrumb.css";

const Breadcrumb = ({ classes = "", children }) => {
  return <p className={`breadcrumb ${classes} mb-4 fw-300`}>{children}</p>;
};

export default Breadcrumb;
