import React from "react";
import { Button, Grid, Segment } from "semantic-ui-react";
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
    console.log("render");
    console.log(this.state.offer);
    const data = this.state.offer;
    return (
      <div>
        <Grid>
          <Grid.Column width="8">
            <img src={`/${data.pic}`} alt={data.pic} width="600" height="726" />
          </Grid.Column>
          <Grid.Column width="8">
            <Segment>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <h3>Wymiana za: {data.price}</h3>
             <a href={`mailto:${data.email}`}><Button positive>Napisz do wymieniającego</Button></a> 
              <Link to="/">
                <Button negative>Powrót</Button>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
