import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <span>Home</span>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/work",
        children: [
          { path: "job", element: <h1>Job Work</h1> },

          { path: "personal", element: <h1>Personal Work</h1> },
        ],
      },
      { path: "/finance", element: <h1>Finances</h1> },
      { path: "/bills", element: <h1>Bills</h1> },

      { path: "/goals", element: <h1>Bills</h1> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
