import { useRouteError } from "react-router-dom";
import Header from "../Components/Header";
import ErrorContent from "../Components/Error";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occurred";
  let message = "Something went wrong";

  if (error && error.status === 500) {
    title = title + " Code: 500";
    message = error.message;
  }

  if (error && error.status === 404) {
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
