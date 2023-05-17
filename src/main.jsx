import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Root,
  Home,
  Login,
  Register,
  Error,
  MyGigs,
  Gigs,
  Orders,
  Messages,
  Message,
  Add,
  Gig
} from "./routes";

import "./scss/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "gigs",
        element: <Gigs />
      },
      {
        path: "mygigs",
        element: <MyGigs />
      },
      {
        path: "orders",
        element: <Orders />
      },
      {
        path: "messages",
        element: <Messages />
      },
      {
        path: "message/:id",
        element: <Message />
      },
      {
        path: "add",
        element: <Add />
      },
      {
        path: "gig/:id",
        element: <Gig />
      }
    ]
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "login",
    element: <Login />
  }
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
