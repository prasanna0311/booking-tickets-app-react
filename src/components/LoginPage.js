import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


/** import from materail ui */
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  image: {
    height: "20",
    width: "40",
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const myData = {
      email,
      password,
    };
    axios
      .post("https://bookingticketsappnode.herokuapp.com/users/login", myData)
      .then((response) => {
        // return  response;
        localStorage.setItem("auth", JSON.stringify(response.data));
        const token = localStorage.getItem("token");
        history.push(`/Home`);
      })
      .catch((error) => {
        //return  error;
        history.push(`/`);
      });
  };

  return (
    <Grid container  className={classes.root} direction="column" alignItems="center">
     
      <Grid item   component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Typography component="h2" variant="h2">
            Booking Tickets
          </Typography>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              // name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {console.log(email)}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              // name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs sm={6} >
                <Link variant="body1" to="/forgot-password">
                  Forgot password?
                </Link>
              </Grid>
              <Grid justifyContent="flex-end" >
                <Link variant="body1" to="/signUp">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
