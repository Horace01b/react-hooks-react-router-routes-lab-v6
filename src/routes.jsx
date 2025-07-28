import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";

// Error component for bad routes
function ErrorPage() {
  return (
    <div>
      <h1>Oops! Looks like something went wrong.</h1>
    </div>
  );
}

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/directors", 
    element: <Directors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  }
];

export default routes;