import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <div>
        <NavLink to={"/login"}>Login</NavLink>
      </div>
      <div>
        <NavLink to={"/signUp"}>Sign up</NavLink>
      </div>
      <div>
        <NavLink to={"/profile"}>Profile</NavLink>
      </div>
      <div>
        <NavLink to={"/forgotPassword"}>forgot password</NavLink>
      </div>
      <div>
        <NavLink to={"/newPassword"}>new password</NavLink>
      </div>
      <div>
        <NavLink to={"/test"}>test</NavLink>
      </div>
    </div>
  );
};

export default Header;
