import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { authUser, dismissError } from "../../store/userSlice";

import s from "./Authorization.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Authorization() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { error, isLoading } = useSelector((store) => store.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState({});

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar({ message: error, variant: "error" });
      dispatch(dismissError());
    }
  }, [error]);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      enqueueSnackbar({ message: "There is no E-mail", variant: "error" });
    }
    if (!password) {
      enqueueSnackbar({ message: "There is no password", variant: "error" });
    }

    dispatch(authUser({ login: email, password })).then(() => {
      navigate("/");
      enqueueSnackbar({
        message: "Great job, You've authorized",
        variant: "success",
      });
    });
  };

  return (
    <form className={s.email_address} onSubmit={onSubmit}>
      <div className={s.inputs}>
        <Input
          value={email}
          onChange={onEmailChange}
          placeholder="Your email"
          label="Email address"
        />
        <Input
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          label="Password"
        />
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Loading" : "Sign In"}
      </Button>
    </form>
  );
}

export default Authorization;
