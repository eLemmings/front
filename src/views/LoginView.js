import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../components/Logo";
import { useHistory } from "react-router-dom";
import { API, getCookie, setCookie } from "../API";
import Box from "@material-ui/core/Box";

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
  textField: {
    fontSize: "3rem",
  },
}));

const LoginView = () => {
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const Api = new API("http://127.0.0.1:5000");
    Api.loginUser(email, password).then((data) => {
      setCookie("token", data.token, 3);
      history.push("/diaries");
    });
  };

  return (
    <Container component="main" maxWidth="xs">
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
            Zaloguj się{" "}
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
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
              Zaloguj się
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => history.push("/register")}
                >
                  Nie masz konta? Zarejestruj się
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Container>
  );
};

export default LoginView;
