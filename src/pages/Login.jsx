import { useDispatch } from "react-redux";
import { useAuthContext } from "../context/authContext";
import { LoginWrapper } from "./login.styled";
import { useState } from "react";
import { login as reduxLogin } from "../store/userSlice";

export const Login = () => {
  const { login } = useAuthContext();
  const dispatch = useDispatch;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const payload = { email, password };

    try {
      const response = await fetch("http://localhost:9500/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      const { token } = data;
      dispatch(reduxLogin(email));
      login(token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginWrapper>
      <form>
        <div>
          <label>Введите email</label>
          <input type="text" value={email} onChange={emailHandler} />
        </div>
        <div>
          <label>Введите пароль</label>
          <input type="text" value={password} onChange={passwordHandler} />
        </div>
        <button onClick={loginHandler}>Вход</button>
      </form>
    </LoginWrapper>
  );
};
