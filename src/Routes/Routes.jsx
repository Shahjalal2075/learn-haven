import { createBrowserRouter } from "react-router-dom";
import Home1 from "../Pages/Home1/Home1";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Layouts/Root";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home1></Home1>
      },
    ]
  },
]);

export default Routes;