import { useRouteError } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";

function ErrorPage() {
  const error = useRouteError();

  let errorMsg = "Something went wrong";

  console.log(error);

  if (error.status === 404) {
    errorMsg = "Cannot find resource";
  }

  if (error.status === 500) {
    errorMsg = error.data.message;
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <h1>Error</h1>
      <p>{errorMsg}</p>
      <p>Error code: {error.status} </p>
    </div>
  );
}

export default ErrorPage;
