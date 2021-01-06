import React, { useState, useEffect } from "react";
import { Button, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default class OffertView extends React.Component {
  state = {
    offer: {},
  };
  componentDidMount() {
    fetch(`http://localhost:5000/offerData?id=${this.props.paramsId}`)
      .then((res) => res.json())
      .then((offers) => this.setState({ offer: offers[0] }));
    console.log(this.state.offer);
  }
  render() {
    console.log("render")
    console.log(this.state.offer)
    const data = this.state.offer
    return (
      <div>
        
      </div>
    );
  }
}
