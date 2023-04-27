import React, { useState } from "react";
import Authorization from "../../components/Autorizhation/Authorization";
import s from "./AuthorizationPage.module.scss";
import { Link } from "react-router-dom";
import Registration from "../../components/Registration";

function AuthorizationPage({ variant = "authorization" }) {
  return (
    <div className={s.wrapper}>
      <div className={s.auth_block}>
        <div className={s.auth_register}>
          <Link
            to="/"
            className={`${s.tab} ${
              variant === "authorization" ? s.active : ""
            }`}
          >
            Sign up
          </Link>
          
          <Link
            to="/registration"
            className={`${s.tab} ${variant === "registration" ? s.active : ""}`}
          >
            Register
          </Link>
        </div>
        {(variant === "authorization") ? <Authorization /> : <Registration />}
      </div>
    </div>
  );
}

export default AuthorizationPage;
