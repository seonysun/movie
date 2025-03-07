import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <nav className="flex gap-3">
        <Link to="/">홈</Link>
        <Link to="/details">상세페이지</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
