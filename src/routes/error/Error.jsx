import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen"
      id="error-page">
      <h1 className="text-7xl mb-7">Oops!</h1>
      <p className="text-3xl font-normal text-gray-500 mb-12">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-xl font-bold text-gray-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
