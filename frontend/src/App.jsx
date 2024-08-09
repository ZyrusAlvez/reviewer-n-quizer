import Main from "./pages/main/Main";
import Log from "./pages/log-in/Log";
import Sign from "./pages/sign-in/Sign";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
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

export default App