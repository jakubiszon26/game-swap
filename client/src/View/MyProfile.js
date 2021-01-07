import React from "react";
import { Button, Segment } from "semantic-ui-react";
import {Link} from "react-router-dom";

class MyProfile extends React.Component {
  state = {
    username: null,
  };
  componentDidMount() {
    fetch(`http://localhost:5000/getUserData?userId=${this.props.userId}`)
      .then((res) => res.json())
      .then((resData) =>
        this.setState({
          username: resData.username,
        })
      );
  }
  render() {
    return (
      <React.Fragment>
        <Segment>
          <h1>Witaj {this.state.username}!</h1>
          <h2>Twoje oferty: </h2>
        </Segment>
        <Link to="/">
          <Button negative>Powrót</Button>
        </Link>
        
      </React.Fragment>
    );
  }
}

export default MyProfile;
