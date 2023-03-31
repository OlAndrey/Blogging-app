import React, { useState } from "react";
import { Grid, Avatar, Link, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AuthForm from "../components/AuthForm";
import AuthContainer from "../components/AuthContainer";
import { users } from "../const/users";
import { useCheckAuthError } from "../hooks/useCheckAuthError";

const SignUp = (props) => {
    const init = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };
    const [account, setAccount] = useState(init);
    const [error, setError, checkError] = useCheckAuthError(init);

    const handlerInput = (event) => {
        const { name, value } = event.target;
        const accountCopy = {
            ...account
        };
        accountCopy[name] = value;

        setAccount(accountCopy);
    };

    const isRegistryUser = (email) => {
        return users.find((user) => user.email === email);
    };

    const handelLogin = (event) => {
        event.preventDefault();
        if (Object.values(account).find((item) => item === "")) {
            if (!isRegistryUser(account.email)) {
                users.push(account);
                setAccount(init);
            } else
                setError({
                    ...error,
                    email: "The email address is already in use by another account"
                });
        }
    };

    return (
        <AuthContainer>
            <Avatar>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>

            <AuthForm
                isNewUser={true}
                error={error}
                values={account}
                handelLogin={handelLogin}
                handlerInput={handlerInput}
                checkError={(e) => checkError(e.target.name, e.target.value)}
            />

            <Grid container justify="flex-end">
                <Grid item>
                    <Link href="/" variant="body2">
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>
        </AuthContainer>
    );
};

export default SignUp;
