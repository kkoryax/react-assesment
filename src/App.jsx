import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { Owner } from "./pages/Owner";
import { User } from "./pages/User";
import { Admin } from "./pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">404 - Page Not Found 😭🙏</h1>
      </div>
    ),
    children: [
      {path: "/", element: <Home />},
      {path: "owner", element: <Owner />},
      {path: "user", element: <User />},
      {path: "admin", element: <Admin />}
    ],
  },
])

export default function App() {
  return <RouterProvider router = {router} />;
}

