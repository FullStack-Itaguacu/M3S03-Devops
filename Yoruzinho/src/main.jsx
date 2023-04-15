import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import ContextProvider from  "./context/ContextProvider"//../context/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
