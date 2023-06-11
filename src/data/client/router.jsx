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
  Root,
  submitLogin,
  submitRegister
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
        path: "register",
        errorElement: <Error />,
        element: <Register />,
        action: submitRegister
      },
      {
        path: "login",
        errorElement: <Error />,
        element: <Login />,
        action: submitLogin
      },
      {
        path: "business",
        element: <h1>Fiverr Business</h1>
      },
      {
        path: "explore",
        element: <h1>Fiverr Explore</h1>
      },
      {
        path: "english",
        element: <h1>Fiverr English</h1>
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
        path: "add",
        element: <Add />
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
        path: "gig/:id",
        element: <Gig />
      }
    ]
  }
];

export default routerConfig;
