import Main from "./pages/Main";
import Log from "./pages/Log";
import Sign from "./pages/Sign";
import Notes from "./pages/Import/Notes.jsx";
import YoutubeURL from "./pages/Import/YoutubeURL.jsx";
import Folder from "./pages/Folder.jsx";
import TrueOrFalse from "./pages/Generate/TrueOrFalse.jsx";
import NotFound from "./pages/NotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserDataProvider } from "./context/userDataContext";
import { UserFolderProvider } from "./context/userFolderContext.jsx";
import useGuestAccount from "./custom hook/useGuestAccount.jsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/sign",
    element: <Sign />,
  },
  {
    path: "/log",
    element: <Log />,
  },
  {
    path: "/notes",
    element: <Notes />,
  },
  {
    path: "/yturl",
    element: <YoutubeURL />
  },
  {
    path: "/folder/:id",
    element: <Folder />,
    errorElement: <NotFound />
  },
  {
    path: "/true-or-false/:id",
    element: <TrueOrFalse />,
    errorElement: <NotFound />
  },
  {
    path: "/not-found",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  useGuestAccount();
  return <RouterProvider router={router} />;
};

const RootApp = () => {
  return (
    <UserDataProvider>
      <UserFolderProvider>
        <App />
      </UserFolderProvider>
    </UserDataProvider>
  );
};

export default RootApp;
