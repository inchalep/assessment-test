import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../components/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
