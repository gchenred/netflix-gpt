import Login from "./components/Login";
import Browse from "./components/Browse";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router";
import appStore from "../utilities/appStore";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utilities/userSlice";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
};

export default App;
