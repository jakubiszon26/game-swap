import React from "react";
import { Button, Form, Segment, Input, Label, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
class LogInForm extends React.Component {
  state = {
    login: "",
    password: "",
    resData: null,
    registerLogin: "",
    registerPassword: "",
  };
  handleRegister = () => {
    fetch(
      `http://localhost:5000/register?name=${this.state.registerLogin}&password="${this.state.registerPassword}"`
    )
      .then((res) => res.json())
      .then((resText) => alert(resText.resText));
    window.location.reload(true);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    fetch(
      `http://localhost:5000/login?name=${this.state.login}&password=${this.state.password}`
    )
      .then((res) => res.json())
      .then((resData) =>
        this.setState({ resData }, () =>
          this.props.changeLogin(
            resData.isLoged,
            resData.userId,
            resData.userName
          )
        )
      );
  };

  render() {
    return (
      <React.Fragment>
        {this.props.isLoged ? (
          <Segment>
            <h1>Witaj ponownie</h1>
            <br />
            <Link to="/">
              <Button negative content="powrot" />
            </Link>
          </Segment>
        ) : (
          <Segment className="login">
            <Grid divided>
              <Grid.Row>
                <Grid.Column width={8} style={{ textAlign: "center" }}>
                  <div style={{ float: "right" }}>
                    <Form onSubmit={this.handleSubmit}>
                      <h1>Zaloguj sie</h1>
                      <Label>Login:</Label>
                      <Input
                        name="login"
                        onChange={(e) => this.handleChange(e)}
                      />
                      <br></br>
                      <br></br>
                      <Label>Hasło: </Label>
                      <Input
                        name="password"
                        type="password"
                        onChange={(e) => this.handleChange(e)}
                      />
                      <br />
                      <br />

                      <Button type="submit" positive>
                        Zaloguj
                      </Button>
                      <Link to="/">
                        <Button negative>Powrót</Button>
                      </Link>
                    </Form>
                  </div>
                </Grid.Column>
                <Grid.Column
                  width={8}
                  floated="right"
                  style={{ textAlign: "center" }}
                >
                  <div style={{ float: "left" }}>
                    <h2>Rejestracja</h2>
                    <Form onSubmit={this.handleRegister}>
                      <Label>Nowy login: </Label>
                      <Input
                        type="text"
                        name="registerLogin"
                        onChange={(e) => this.handleChange(e)}
                      />
                      <br />
                      <br />
                      <Label>Nowe hasło</Label>
                      <Input
                        type="password"
                        name="registerPassword"
                        onChange={(e) => this.handleChange(e)}
                      />
                      <br /> <br />
                      <Button type="submit" color="blue">
                        zarejestruj się
                      </Button>
                    </Form>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        )}
      </React.Fragment>
    );
  }
}

export default LogInForm;
