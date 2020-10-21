import React from "react";
import styles from "./scss/RegisterView.module.scss";
import Logo from "../components/Logo";
import { TextField, Grid, Link, Button } from "@material-ui/core";

class RegisterView extends React.Component {
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
              <p>Rejestracja</p>
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
                <div>
                  <TextField
                    InputLabelProps={{ style: { fontSize: "1rem" } }}
                    inputProps={{ style: { fontSize: "1.2rem" } }}
                    id="user_password_confirm"
                    label="Potwierdz Hasło"
                    color="primary"
                    type="password"
                    name="user_password_confirm"
                  />
                </div>
                <div>
                  <TextField
                    InputLabelProps={{ style: { fontSize: "1rem" } }}
                    inputProps={{ style: { fontSize: "1.2rem" } }}
                    id="e-mail"
                    label="E-mail"
                    color="primary"
                    type="text"
                    name="e-mail"
                  />
                </div>

                <br></br>
                <div>
                  <Button type="submit" color="primary" variant="contained">
                    Zarejestruj się
                  </Button>
                </div>
              </form>
              <p className="smallCaption">
                Wróć do{" "}
                <Link
                  onClick={() => this.props.history.push("/")}
                  component="button"
                  variant="body1"
                >
                  logowania
                </Link>
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default RegisterView;
