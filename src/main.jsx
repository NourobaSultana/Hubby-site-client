import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import AllGroups from "./Pages/AllGroups.jsx";
import CreateGroup from "./Pages/CreateGroup.jsx";
import MyGroups from "./Pages/MyGroups.jsx";
import Login from "./Auth/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allgroups",
        Component: AllGroups,
      },
      {
        path: "creategroup",
        Component: CreateGroup,
      },

      {
        path: "mygroup",
        Component: MyGroups,
      },

      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
