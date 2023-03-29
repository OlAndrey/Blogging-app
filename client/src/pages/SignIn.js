import React, { useState } from "react";
import { Grid, Avatar, Link, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { users } from "../const/users";
import AuthForm from "../components/AuthForm";
import AuthContainer from "../components/AuthContainer";

const SignIn = (props) => {
    const [account, setAccount] = useState({
        email: "",
        password: ""
    });

    const handlerInput = (property, event) => {
        const accountCopy = {
            ...account
        };
        accountCopy[property] = event.target.value;

        setAccount(accountCopy);
    };

    const isVarifiedUser = (email, password) => {
        return users.find(
            (user) => user.email === email && user.password === password
        );
    };

    const handelLogin = (event) => {
        event.preventDefault();
        console.log(isVarifiedUser(account.username, account.password));
        if (isVarifiedUser(account.username, account.password)) {
            setAccount({
                email: "",
                password: ""
            });
        }
    };

    return (
        <AuthContainer>
            <Avatar>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <AuthForm handelLogin={handelLogin} handlerInput={handlerInput} />
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
