import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { makeStyles } from '@mui/styles';

const useAuthFormStyles = makeStyles((theme) => ({
    form: {
      width: "100%", // Fix IE 11 issue.
    },
}))

const AuthForm = ({ handelAccount, handelLogin }) => {
    const classes = useAuthFormStyles();
    
    return (
        <form className={classes.form} noValidate>
            <TextField
                onChange={(event) => handelAccount("username", event)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
            />
            <TextField
                onChange={(event) => handelAccount("password", event)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handelLogin}
            >
                Sign In
            </Button>
            <Grid container>
                <Grid item>
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </form>
    );
};

export default AuthForm;