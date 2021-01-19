import React, { useState, useEffect } from "react";
import { Button, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Offert from "./../components/Offert/Offert";
import {useAuth0} from '@auth0/auth0-react'


export default function MyProfile() {
  const { user, isAuthenticated } = useAuth0();
  const { state, setState } = useState({
    offers: null,
    isOffers: false,
    test: "test"
  });

  useEffect(() => {
    fetch(`http://localhost:5000/getUserOffers?id=${user.identities.user_id}`)
      .then((res) => res.json())
      .then((userOffers) =>
        setState({ offers: userOffers, isOffers: true })
      );
  }, []);
  return (
    <React.Fragment>
      <Segment>
        <h1>Witaj {user.name}!</h1>
        <h2>Twoje oferty: </h2>
        {/* <Segment>
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
        </Segment> */}
      </Segment>
      <Link to="/">
        <Button negative>Powrót</Button>
      </Link>
    </React.Fragment>
  );
}
