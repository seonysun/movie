import { Link, useNavigate } from "react-router-dom";
import Input from "../components/common/Input";
import { useSupabaseAuth } from "../supabase";
import { useState } from "react";
import useFormValidation from "../hooks/useFormValidation";
import { useDispatch } from "react-redux";
import { loginSlice } from "../redux/loginSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleInput = async (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useFormValidation(values, setError, "signin");

  const { login, getUserInfo, loginWithGoogle, loginWithKakao } =
    useSupabaseAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = values;
    await login({ email, password });

    const userInfo = await getUserInfo();
    dispatch(loginSlice.actions.login(userInfo));
    alert(`${userInfo.user.userName}님 로그인 되었습니다!`);

    navigate("/");
  };

  return (
    <div className="flex flex-col items-center h-screen mt-[5%]">
      <p className="text-3xl font-semibold mb-4">로그인</p>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-2 w-1/3 items-center"
      >
        <Input
          name="email"
          label="이메일"
          type="email"
          value={values.email}
          placeholder="이메일 주소를 입력하세요"
          errorMessage={error.email}
          onChange={handleInput}
        />
        <Input
          name="password"
          label="비밀번호"
          type="password"
          value={values.password}
          placeholder="비밀번호를 입력하세요"
          errorMessage={error.password}
          onChange={handleInput}
        />
        <button type="submit" className="btn-purple w-full mt-2">
          로그인
        </button>
      </form>
      <div className="my-2 flex w-1/3 items-center gap-2">
        <button onClick={() => loginWithKakao()} className="btn-yellow w-full">
          Kakao
        </button>
        <button onClick={() => loginWithGoogle()} className="btn-blue w-full">
          Google
        </button>
      </div>
      <p className="text-sm">
        계정이 없다면 지금{" "}
        <Link to="/signup" className="underline">
          가입
        </Link>
        하세요!
      </p>
    </div>
  );
};

export default SignIn;
