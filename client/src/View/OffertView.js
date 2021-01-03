import React from "react";
import { Button, Grid } from "semantic-ui-react";
import {Link} from 'react-router-dom'
const Data = require("../Data.json");
export default function OffertView(props) {
// eslint-disable-next-line
const offerData = Data.offerts.find(item => item.id == props.match.params.id); 
console.log(offerData + "offerdata");
  return (
    <div>
      <Grid>
        <Grid.Column width={8}>
            <img style={{borderColor: "black", border: "5px solid #555"}}src={offerData.pic}></img>
        </Grid.Column>
        <Grid.Column width={8}>
            <h1>{offerData.title}</h1>
            <p>{offerData.description}</p>
            <h3>Kategoria: {offerData.category}</h3>

          <Button positive content="Napisz do wymieniającego"></Button>
          <Link to='/'><Button negative>Powrót</Button></Link> 

        </Grid.Column>
      </Grid>
    </div>
  );
}
