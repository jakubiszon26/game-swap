import React from "react";
import { Button, Form, Segment, Input, Label, Grid } from "semantic-ui-react";
class LogInForm extends React.Component {
  state = {
    login: "",
    password: "",
    resData: null
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
      .then(resData => this.setState({resData}, () => this.props.changeLogin(resData.isLoged, resData.userId)));
      
  };

  render() {
    return (
      <React.Fragment>
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
                    <Button negative>Powrót</Button>
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
                  <Form>
                    <Label>Nowy login: </Label>
                    <Input type="text" />
                    <br />
                    <br />
                    <Label>Nowe hasło</Label>
                    <Input type="password" />
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
      </React.Fragment>
    );
  }
}

export default LogInForm;
