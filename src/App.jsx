import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

//import Navigation from "./components/Navigation/Navigation";
//import HomePage from "./pages/HomePage/HomePage";
//import MoviesPage from "../src/pages/MoviesPage/MoviesPage";
//import MovieDetailsPage from "../src/pages/MovieDetailsPage/MovieDetailsPage";
//import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../src/pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../src/pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
