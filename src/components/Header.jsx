import { useDispatch, useSelector } from "react-redux";
import { HeaderWrapper } from "./header.styled";
import { getUserEmail, logout as reduxLogout } from "../store/userSlice";
import { useAuthContext } from "../context/authContext";

export const Header = () => {
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();
  const { logout } = useAuthContext();

  const logoutHandler = () => {
    dispatch(reduxLogout());
    logout();
  };

  return (
    <HeaderWrapper>
      <div>{email}</div>
      <button onClick={logoutHandler}>Выйти</button>
    </HeaderWrapper>
  );
};
