import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CardFallback from "./components/common/CardFallback";

const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
