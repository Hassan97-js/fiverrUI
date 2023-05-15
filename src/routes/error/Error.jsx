import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  const h1Styles = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1.3rem"
  };

  const pStyles = {
    fontSize: "1.5rem",
    marginBottom: "1rem"
  };

  return (
    <div className="flex-center flex-column min-vh-screen" id="error-page">
      <h1 style={h1Styles}>Oops!</h1>
      <p style={pStyles}>Sorry, an unexpected error has occurred.</p>
      <p style={pStyles} className="text-muted">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
