import React from 'react';
import Main from "./pages/main/Main";
import Log from "./pages/log-in/Log";
import Sign from "./pages/sign-in/Sign";
import Decide from "./pages/main/Decide";
import Functions from "./pages/main/Functions";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/Functions",
    element: <Functions />
  },
  {
    path: "/Decide",
    element: <Decide />
  },
  {
    path: "/sign",
    element: <Sign />
  },
  {
    path: "/log",
    element: <Log />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
