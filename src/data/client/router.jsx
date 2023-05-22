
import {
  Add,
  Error,
  Gig,
  Gigs,
  Home,
  Login,
  Message,
  Messages,
  MyGigs,
  Orders,
  Register,
  Root
} from "../../routes";

const routerConfig = [
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
];

export default routerConfig;
