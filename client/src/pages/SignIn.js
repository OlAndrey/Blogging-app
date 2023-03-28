import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import AuthForm from "../components/AuthForm";
import useSignInStyles from "../styles/SignInStyles";
import { users } from "../const/users";


const SignIn = (props) => {
    const [account, setAccount] = useState({
        username: "",
        password: ""
    });
    const classes = useSignInStyles();

    const handelAccount = (property, event) => {
        const accountCopy = {
            ...account
        };
        accountCopy[property] = event.target.value;

        setAccount(accountCopy);
    };

    const isVarifiedUser = (username, password) => {
        return users.find((user)=> user.username === username && user.password === password);
    };

    const handelLogin = (event) => {
        event.preventDefault()
        console.log(isVarifiedUser(account.username, account.password))
        if (isVarifiedUser(account.username, account.password)) {
            setAccount({
                username: "",
                password: ""
            });
        }
    };

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid
                className={classes.size}
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={1}
                square
            >
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <AuthForm handelLogin={handelLogin} handelAccount={handelAccount} />
                </div>
            </Grid>
        </Grid>
    );
}

export default SignIn; 