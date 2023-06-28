import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import AppContextProvider from "context";

export default function App() {
  return (
    <AppContextProvider>
      <RouterProvider router={routes} fallbackElement={<p>Loading...</p>} />
    </AppContextProvider>
  );
}
