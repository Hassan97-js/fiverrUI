import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error.message);

  let errorResponseContent = null;

  /* Check if the given error is an ErrorResponse generated from a 4xx/5xx Response thrown from an action/loader */
  if (isRouteErrorResponse) {
    errorResponseContent = (
      <div className="text-center">
        <h1 className="text-7xl mb-10">Oops!</h1>
        <p className="text-3xl font-normal text-gray-500 mb-12">
          Sorry, an unexpected error has occurred.
        </p>

        <h2 className="text-3xl font-normal text-gray-500 mb-12">{error.status}</h2>

        <p className="text-xl font-bold text-gray-500">
          <i>{error?.message || "Not Found"}</i>
        </p>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen"
      id="error-page">
      {!errorResponseContent && (
        <div className="text-center">
          <h1 className="text-7xl mb-7">Oops!</h1>
          <p className="text-3xl font-normal text-gray-500 mb-12">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="text-xl font-bold text-gray-500">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      )}

      {errorResponseContent}
    </div>
  );
}

export default Error;
