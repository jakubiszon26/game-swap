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
            <img width="600" height="765" style={{borderColor: "black", border: "1px solid #555", textAlign: "center"}}src={`/${offerData.pic}`}></img>
        </Grid.Column>
        <Grid.Column width={8}>
            <h1>{offerData.title}</h1>
            <p>{offerData.description}</p>
            <h3>Kategoria: {offerData.category}</h3>
            <h3>Wymiana za: {offerData.price}</h3>

            <a href="mailto:someone@yoursite.com"><Button positive content="Napisz do wymieniającego"></Button></a> 
          <Link to='/'><Button negative>Powrót</Button></Link> 

        </Grid.Column>
      </Grid>
    </div>
  );
}
