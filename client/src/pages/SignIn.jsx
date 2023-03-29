import React, { useState } from "react";
import { Grid, Avatar, Link, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { users } from "../const/users";
import AuthForm from "../components/AuthForm";
import AuthContainer from "../components/AuthContainer";
import { useCheckAuthError } from "../hooks/useCheckAuthError";

const SignIn = (props) => {
    const initState = {
        email: "",
        password: ""
    };
    const [account, setAccount] = useState(initState);
    const [error, setError, checkError] = useCheckAuthError(initState);

    const handlerInput = (event) => {
        const { name, value } = event.target;
        const accountCopy = {
            ...account
        };
        accountCopy[name] = value;

        setAccount(accountCopy);
    };

    const isVarifiedUser = (email, password) => {
        return users.find(
            (user) => user.email === email && user.password === password
        );
    };

    const handelLogin = (event) => {
        event.preventDefault();
        if (isVarifiedUser(account.email, account.password)) {
            setAccount(initState);
        } else
            setError({
                ...error,
                password: "Email or password is incorrect!!!",
                email: "Email or password is incorrect!!!"
            });
    };

    return (
        <AuthContainer>
            <Avatar>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <AuthForm
                error={error}
                handelLogin={handelLogin}
                handlerInput={handlerInput}
                values={account}
                checkError={(e) => checkError(e.target.name, e.target.value)}
            />
            <Grid container>
                <Grid item>
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </AuthContainer>
    );
};

export default SignIn;
