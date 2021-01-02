import React from "react";
import { Button, Grid } from "semantic-ui-react";
import data from "../Data.js";
import {Link} from 'react-router-dom'
export default function OffertView(props) {
// eslint-disable-next-line
const d = data.offerts.find(item => item.id == props.match.params.id); 
console.log(d)
  return (
    <>
      <Grid>
        <Grid.Column width={8}>
            <img src=""></img>
        </Grid.Column>
        <Grid.Column width={8}>
            <h1>{d.title}</h1>
          <Button positive content="Napisz do wymieniającego"></Button>
         <Link to="/"><Button negative content="powrót"></Button></Link> 
        </Grid.Column>
      </Grid>
    </>
  );
}
