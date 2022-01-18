import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./LoginContainer.scss";
import "../../../index.css";
import group from "./group.png";
import groupFooter from "./groupFooter.png";
// import { useDispatch } from "react-redux";
// import { setUserAction } from "../../../store/authReducer";
import { SET_USER } from "../../../actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginContainer({ SET_USER , isAuth}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    SET_USER({ email: data.get("email"), password: data.get("password") });
  };
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  let redirect = useNavigate();

  // React.useEffect(() => {
  // if (isAuth) {
  //   redirect("/auth/login");
  // } [redirect, isAuth]);


React.useEffect(() => {
    if (isAuth) {
      redirect("/auth/login");
    }
  }, [redirect, isAuth]);

  return (
    <>
      <div className="logo">
        <img src={group} alt={"logo"} />
      </div>
      <div className="main">
        <Container component="main" maxWidth="xs" className="containerLogin">
          <CssBaseline />
          <Box
            sx={{
              // marginTop: 6,
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
            }}
          >
            <Typography
              component="h2"
              variant="h2"
              marginTop={5}
              marginBottom={5}
            >
              <div className="headerText">Log in</div>
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Typography component="h4" variant="h6">
                <div className="loginText">Email</div>
              </Typography>
              <TextField
                className="input"
                // value={email}
                margin="normal"
                required
                fullWidth
                id="email"
                // label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Typography component="h4" variant="h6">
                <div className="loginText">Password</div>
              </Typography>
              <TextField
                className="input"
                // value={password}
                margin="normal"
                required
                fullWidth
                name="password"
                // label="Password"
                // type="password"
                type={values.showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box
                display="flex"
                // alignItems="center"
                justifyContent="space-between"
              >
                <FormControlLabel
                  control={<Checkbox value="remember" />}
                  label="Remember me"
                />
                <Link href="#">Forgot Password</Link>
              </Box>
              <Button
                className="buttonSignin"
                // onClick={() => dispatch(setUserAction())}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1 }}
              >
                Log in
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {/* {"Don't have an account? Sign Up"} */}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        <Grid container>
          <div className="logoFoter">
            <img src={groupFooter} alt={"logoFooter"} />
          </div>
        </Grid>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return { isAuth: state.auth.isAuth };
};

const mapDispatchToProps = {
  SET_USER,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
