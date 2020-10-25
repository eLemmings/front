import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../components/Logo";
import { API } from "../API";
import {
  Snackbar,
  Box,
  Container,
  Typography,
  Grid,
  Link,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RegisterView = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarToggle, setSnackbarToggle] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const Api = new API();
    Api.registerUser(login, email, password)
      .then((data) => {
        if (data.code === 200) {
          history.push("/");
        } else if (parseInt(String(data.code).charAt(0)) === 4) {
          setSnackbarContent(`wpis ${data.description}`);
          setSnackbarToggle(true);
        } else {
          setSnackbarContent(
            `${Object.keys(data)[0]}: ${data[Object.keys(data)[0]]}`
          );
          setSnackbarToggle(true);
        }
      })
      .catch((error) => {
        setSnackbarContent(error.toString());
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Snackbar
        open={snackbarToggle}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={8000}
        onClose={() => setSnackbarToggle(false)}
        message={<div>{snackbarContent}</div>}
      ></Snackbar>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "80vh" }}
      >
        <div className={classes.wrapper}>
          <Box mb={2}>
            <Logo />
          </Box>
          <Typography component="h1" variant="h5">
            Zarejestruj się{" "}
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="login"
                  variant="outlined"
                  required
                  fullWidth
                  id="login"
                  label="Login"
                  autoFocus
                  onChange={(e) => setLogin(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Adres e-mail"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Hasło"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Zarejestruj się
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => history.push("/")}
                >
                  Masz już konto? Zaloguj się
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Container>
  );
};

export default RegisterView;
