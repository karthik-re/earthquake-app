import { useRouteError } from "react-router-dom";
import Header from "../Components/Header";
import ErrorContent from "../Components/Error";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occurred";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <Header />
      <ErrorContent title={title}>
        <p>{message}</p>
      </ErrorContent>
    </>
  );
};

export default ErrorPage;
