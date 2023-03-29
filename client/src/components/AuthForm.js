import React from "react";
import { Grid, Button, TextField } from "@mui/material";

const RenderTextField = ({ name, label, handlerInput, checkError, error, value }) => {
    return (
        <TextField
            margin="dense"
            variant="outlined"
            required
            label={label}
            onChange={handlerInput}
            onBlur={checkError}
            name={name}
            id={name}
            value={value}
            error={Boolean(error)}
            helperText={error}
            type={label === "Password" ? "password" : "text"}
            fullWidth
        />
    );
};

const AuthForm = ({ isNewUser, values, error, handlerInput, handelLogin, checkError }) => {
    return (
        <form onSubmit={handelLogin}>
            <Grid container spacing={2}>
                {isNewUser && (
                    <>
                        <Grid item xs={12} sm={6}>
                            <RenderTextField
                                handlerInput={handlerInput}
                                checkError={checkError}
                                name="firstName"
                                label="First Name"
                                value={values.firstName}
                                error={error.firstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <RenderTextField
                                handlerInput={handlerInput}
                                checkError={checkError}
                                name="lastName"
                                label="Last Name"
                                value={values.lastName}
                                error={error.lastName}
                            />
                        </Grid>
                    </>
                )}
                <Grid item xs={12}>
                    <RenderTextField
                        handlerInput={handlerInput}
                        checkError={checkError}
                        name="email"
                        label="Email Address"
                        value={values.email}
                        error={error.email}
                    />
                </Grid>
                <Grid item xs={12}>
                    <RenderTextField
                        handlerInput={handlerInput}
                        checkError={checkError}
                        name="password"
                        label="Password"
                        value={values.password}
                        error={error.password}
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
