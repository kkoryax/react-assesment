import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/home";
import { Owner } from "./pages/owner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">404 - Page Not Found 🧙‍♂️</h1>
      </div>
    ),
    children: [
      {path: "/", element: <Home />},
      {path: "owner", element: <Owner />}
    ],
  },
])

export default function App() {
  return <RouterProvider router = {router} />;
}

