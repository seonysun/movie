import { useState } from "react";
import Input from "../components/common/Input";
import { useSupabaseAuth } from "../supabase";
import useFormValidation from "../hooks/useFormValidation";

const SignUpForm = () => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useFormValidation(values, setError, "signup");

  const { signUp } = useSupabaseAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { email, password, name } = values;
    const userInfo = await signUp({ email, password, name });
    console.log(userInfo);
  };

  return (
    <div className="flex flex-col items-center h-screen mt-[8%]">
      <p className="text-3xl font-semibold mb-4">회원가입</p>
      <form
        onSubmit={handleSignUp}
        className="flex flex-col gap-3 w-1/3 items-center"
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
          name="name"
          label="닉네임"
          value={values.name}
          placeholder="2~8자, 숫자, 한글, 영어로만 입력하세요"
          errorMessage={error.name}
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
        <Input
          name="confirmPassword"
          label="비밀번호 확인"
          type="password"
          value={values.confirmPassword}
          placeholder="비밀번호를 다시 입력하세요"
          errorMessage={error.confirmPassword}
          onChange={handleInput}
        />
        <button type="submit" className="btn-purple w-full mt-2">
          가입하기
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
