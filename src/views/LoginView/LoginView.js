import React from "react";
import styles from "./LoginView.module.scss";
import Logo from "../../components/Logo/Logo";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { TextField, Grid, Link, Button } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2cc39d",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

class LoginView extends React.Component {
  state = {
    text: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/diares");
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Grid container>
          <Grid item xs={8} sm={9} md={10}></Grid>
          <Grid item xs={4} sm={3} md={2}>
            <Logo />
          </Grid>
          <Grid item xs={12}>
            <div className={styles.wrapperLogin}>
              <p className="textMedium letterSpacing1">Witaj w</p>
              <p>
                Lem<span className={styles.accentColor}>Med</span>
              </p>
              <br></br>
              <p className="textSmall">Zaloguj się</p>
              <ThemeProvider theme={theme}>
                <form
                  onSubmit={this.handleSubmit}
                  className={styles.form}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="user_login"
                      label="login"
                      color="secondary"
                      name="user_login"
                      type="text"
                    />
                  </div>

                  <div>
                    <TextField
                      id="user_password"
                      label="register"
                      color="secondary"
                      type="password"
                      name="user_password"
                    />
                  </div>
                  <br></br>
                  <div>
                    <Button type="submit" color="primary" variant="contained">
                      Zaloguj się
                    </Button>
                  </div>
                </form>
              </ThemeProvider>
              <p className="smallCaption">
                Nie masz konta?{" "}
                <Link
                  onClick={() => this.props.history.push("/register")}
                  component="button"
                  variant="body1"
                >
                  Zarejestruj się
                </Link>
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginView;
