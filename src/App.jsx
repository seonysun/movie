import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useSupabaseAuth } from "./supabase";
import { loginSlice } from "./redux/loginSlice";
import { useDispatch } from "react-redux";

const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));

function App() {
  const dispatch = useDispatch();
  const { getUserInfo } = useSupabaseAuth();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getUserInfo();
      if (userInfo?.user) {
        dispatch(loginSlice.actions.login(userInfo));
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
