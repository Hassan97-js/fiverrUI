const Breadcrumb = ({ classes = "", children }) => {
  return (
    <p className={`breadcrumb text-neutral-700 text-lg ${classes} mb-4 font-thin`}>
      {children}
    </p>
  );
};

export default Breadcrumb;
