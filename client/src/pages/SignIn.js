import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import AuthForm from "../components/AuthForm";
import { makeStyles } from '@mui/styles';

const useSignInStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around"
    }
}))

export default function SignIn(props) {
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
        // return users.find((user)=> user.username === username && user.password === password);
    };

    const handelLogin = () => {
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
                    <AuthForm />
                </div>
            </Grid>
        </Grid>
    );
}
