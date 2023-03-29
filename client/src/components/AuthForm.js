import React from "react";
import { Grid, Button, TextField } from "@mui/material";

const RenderTextField = ({ name, label, handlerInput }) => {
    return (
        <TextField
            margin="dense"
            variant="outlined"
            required
            label={label}
            onChange={handlerInput}
            name={name}
            id={name}
            type={label === "Password" ? "password" : "text"}
            fullWidth
        />
    );
};

const AuthForm = ({ handlerInput, handelLogin, isNewUser }) => {
    return (
        <form onSubmit={handelLogin}>
            <Grid container spacing={2}>
                {isNewUser && (
                    <>
                        <Grid item xs={12} sm={6}>
                            <RenderTextField
                                handlerInput={handlerInput}
                                name="firstName"
                                label="First Name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <RenderTextField
                                handlerInput={handlerInput}
                                name="lastName"
                                label="Last Name"
                            />
                        </Grid>
                    </>
                )}
                <Grid item xs={12}>
                    <RenderTextField
                        handlerInput={handlerInput}
                        name="email"
                        label="Email Address"
                    />
                </Grid>
                <Grid item xs={12}>
                    <RenderTextField
                        handlerInput={handlerInput}
                        name="password"
                        label="Password"
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ margin: "1em 0" }}
            >
                {isNewUser ? "Sign Up" : "Sign In"}
            </Button>
        </form>
    );
};

export default AuthForm;
