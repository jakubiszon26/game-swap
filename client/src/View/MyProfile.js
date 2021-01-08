import React from "react";
import { Button, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Offert from "./../components/Offert/Offert";

class MyProfile extends React.Component {
  state = {
    username: null,
    offers: null,
    isOffers: false,
  };
  componentDidMount() {
    fetch(`http://localhost:5000/getUserData?userId=${this.props.userId}`)
      .then((res) => res.json())
      .then((resData) =>
        this.setState({
          username: resData.username,
        })
      );

    fetch(`http://localhost:5000/getUserOffers?id=${this.props.userId}`)
      .then((res) => res.json())
      .then((userOffers) =>
        this.setState({ offers: userOffers, isOffers: true })
      );
  }
  render() {
    return (
      <React.Fragment>
        <Segment>
          <h1>Witaj {this.state.username}!</h1>
          <h2>Twoje oferty: </h2>
          <Segment>
            <div className="cards">
              {this.state.isOffers &&
                this.state.offers.map((item) => (
                  <Offert
                    key={item.id}
                    id={item.id}
                    description={item.description}
                    pic={item.pic}
                    price={item.price}
                    title={item.title}
                  />
                ))}
            </div>
          </Segment>
        </Segment>
        <Link to="/">
          <Button negative>Powrót</Button>
        </Link>
      </React.Fragment>
    );
  }
}

export default MyProfile;
