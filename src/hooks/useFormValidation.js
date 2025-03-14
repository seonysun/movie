import { useEffect } from "react";

const useFormValidation = (values, setError, type) => {
  useEffect(() => {
    const errors = {};

    if (!values.email) {
      errors.email = "이메일을 입력하세요.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(values.email)
    ) {
      errors.email = "올바른 이메일 형식이 아닙니다.";
    }

    if (!values.password) {
      errors.password = "비밀번호를 입력하세요.";
    } else if (values.password.length < 8) {
      errors.password = "비밀번호는 최소 8자 이상이어야 합니다.";
    }

    if (type === "signup") {
      if (!values.name) {
        errors.name = "이름을 입력하세요.";
      } else if (!/^[a-zA-Z0-9가-힣]{2,8}$/.test(values.name)) {
        errors.name = "2~8자, 숫자, 한글, 영어로만 가능합니다.";
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = "비밀번호를 다시 입력하세요.";
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "비밀번호가 일치하지 않습니다.";
      }
    }

    setError(errors);
  }, [values, setError, type]);

  return Object.keys(values).every((key) => values[key] && !setError[key]);
};

export default useFormValidation;
