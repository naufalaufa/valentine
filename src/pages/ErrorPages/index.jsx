import { useRouteError } from "react-router-dom";

const ErrorPages = () => {
  const error = useRouteError();
  return (
    <>
      <div>
        <p>{error.message}</p>
        <p>Error</p>
      </div>
    </>
  );
};

export default ErrorPages;
