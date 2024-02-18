import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import SendMoney from "./components/SendMoney";

const router = createBrowserRouter([
  {
    element: <SignUp />,
    path: "/signup",
  },
  {
    element: <SignIn />,
    path: "/signin",
  },
  {
    element: <Dashboard />,
    path: "/dashboard",
  },
  {
    element: <SendMoney />,
    path: "/send",
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
