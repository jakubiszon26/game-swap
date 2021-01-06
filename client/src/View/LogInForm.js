import React from "react";
import {
  Button,
  Form,
  Segment,
  Input,
  Label,
  Grid,
  Divider,
} from "semantic-ui-react";
class LogInForm extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Segment className="login">
          <Grid divided>
            <Grid.Row>
              <Grid.Column width={8} style={{ textAlign: "center" }}>
                <div style={{ float: "right" }}>
                  <Form>
                    <h1>Zaloguj sie</h1>
                    <Label>Login:</Label>
                    <Input name="login" />
                    <br></br>
                    <br></br>
                    <Label>Hasło: </Label>
                    <Input name="password" type="password" />
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
