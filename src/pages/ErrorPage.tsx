import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  isRouteErrorResponse(error);

  return (
    <>
      <h1 className="text-3xl font-bold m-4">Oops...</h1>
      <p className="text-3xl font-bold m-4">
        {isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected error"}
      </p>
    </>
  );
};

export default ErrorPage;
