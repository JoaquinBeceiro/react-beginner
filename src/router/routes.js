import { createBrowserRouter } from "react-router-dom";
import { HomeView, AboutView } from "views";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/about",
    element: <AboutView />,
  },
]);
