import React from "react";

import s from "./Navigation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/userSlice";
import { Link } from "react-router-dom";

function Navigation() {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={s.navigation}>
      <Link to={`/user/${user.id}`}>
        <div>{user.login}</div>
      </Link>
      <div></div>
      <button onClick={onLogOut}>Feed</button>
      <button onClick={onLogOut}>Friends</button>
      <button onClick={onLogOut}>LogOut</button>
    </div>
  );
}

export default Navigation;
