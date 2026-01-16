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
import GroupDetails from "./Pages/GroupDetails.jsx";
import UpdateGroup from "./Pages/UpdateGroup.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import SignUp from "./Auth/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/creategroup"),
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
        path: "creategroup/:id",
        loader: () => fetch(`http://localhost:3000/creategroup/:id`),
        Component: GroupDetails,
      },

      {
        path: "mygroup",
        Component: MyGroups,
      },

      {
        path: "updategroup/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/creategroup/${params.id}`),
        Component: UpdateGroup,
      },
      {
        path: "login",
        Component: Login,
      },

      {
        path: "signup",
        Component: SignUp,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
