import { useAuthContext } from "../context/authContext";
import { LoginWrapper } from "./login.styled";
import { useState } from "react";

export const Login = () => {
  const { login } = useAuthContext();
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
      login(token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginWrapper>
      <form>
        <div>
          <label></label>
          <input type="text" value={email} onChange={emailHandler} />
        </div>
        <div>
          <label></label>
          <input type="text" value={password} onChange={passwordHandler} />
        </div>
        <button onClick={loginHandler}>Вход</button>
      </form>
    </LoginWrapper>
  );
};
