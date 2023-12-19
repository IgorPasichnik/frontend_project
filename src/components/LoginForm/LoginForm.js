import { useEffect, useState, useCallback } from "react";
import FormInput from "./FormInput";

export const LoginForm = () => {
  const [user, setUser] = useState("");
  const [isUserError, setIsUserError] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    const payload = {
      user: user,
      email: email,
    };
    fetch("", { data: payload });
  };

  useEffect(() => {
    if (user.length < 4 && user.length > 0) {
      setIsUserError(true);
    } else {
      setIsUserError(false);
    }
  }, [user]);

  useEffect(() => {
    if (email.length < 4 && email.length > 0) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
  }, [email]);

  const setUserValue = useCallback((value) => {
    setUser(value);
  }, []);

  const setEmailValue = useCallback((value) => {
    setEmail(value);
  }, []);

  return (
    <form
      style={{
        width: "300px",
        height: "300px",
        border: "1px solid black",
        padding: "10px",
      }}
      onSubmit={loginHandler}
    >
      <h2>Форма входа</h2>
      <FormInput
        name="name"
        value={user}
        setValue={(value) => setUser(value)}
        isError={isUserError}
      />
      <FormInput
        name="email"
        value={email}
        setValue={(value) => setEmail(value)}
        isError={isEmailError}
      />

      <button type="submit">Войти</button>
    </form>
  );
};
