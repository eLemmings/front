import React from "react";
import styles from "./scss/LoginView.module.scss";
import Logo from "../components/Logo";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { TextField, Grid, Link, Button } from "@material-ui/core";
import "./scss/global.scss";

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
              <p>Witaj w</p>
              <p>
                Lem<span className={styles.accentColor}>Med</span>
              </p>
              <br></br>
              <p>Zaloguj się</p>
              <form
                onSubmit={this.handleSubmit}
                className={styles.form}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    InputLabelProps={{ style: { fontSize: "1rem" } }}
                    inputProps={{ style: { fontSize: "1.2rem" } }}
                    id="user_login"
                    label="Login "
                    color="primary"
                    name="user_login"
                    type="text"
                  />
                </div>

                <div>
                  <TextField
                    InputLabelProps={{ style: { fontSize: "1rem" } }}
                    inputProps={{ style: { fontSize: "1.2rem" } }}
                    id="user_password"
                    label="Hasło"
                    color="primary"
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
