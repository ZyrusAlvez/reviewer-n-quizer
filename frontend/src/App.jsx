import Main from "./pages/Main";
import Log from "./pages/Log";
import Sign from "./pages/Sign";
import Notes from "./pages/Notes";
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
  },
  {
    path : "/notes",
    element: <Notes />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App