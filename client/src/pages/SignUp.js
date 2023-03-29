import React, { useState } from "react";
import { Grid, Avatar, Link, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AuthForm from "../components/AuthForm";
import AuthContainer from "../components/AuthContainer";
import { users } from "../const/users";

const SignUp = (props) => {
    const [account, setAccount] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handlerInput = (event) => {
        const { name, value } = event.target;
        const accountCopy = {
            ...account
        };
        accountCopy[name] = value;

        setAccount(accountCopy);
    };

    const isRegistryUser = (email, password) => {
        return users.find(
            (user) => user.email === email && user.password === password
        );
    };

    const handelLogin = (event) => {
        event.preventDefault();
        if (!isRegistryUser(account.email, account.password)) {
            users.push(account);
            setAccount({
                firstName: "",
                lastName: "",
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
                Sign up
            </Typography>

            <AuthForm
                isNewUser={true}
                handelLogin={handelLogin}
                handlerInput={handlerInput}
            />

            <Grid container justify="flex-end">
                <Grid item>
                    <Link href="#" variant="body2">
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>
        </AuthContainer>
    );
};

export default SignUp;
