import React from "react";
import { Card, Image } from "semantic-ui-react";
import Slide from "react-reveal/Slide";

export default function Offert(props) {
  return (
    <div>
        <a href={`/offert/${props.id}`}>
          <Card width="100%" style={{ margin: 15 }}>
            <Card.Header>
              <Image height="370px" width="290px" src={`/${props.pic}`} />
            </Card.Header>
            <Card.Description>
              <h3>{props.title}</h3>
            </Card.Description>
            <Card.Content>
              Wymiana za <strong>{props.price}</strong>
            </Card.Content>
          </Card>
        </a>
    </div>
  );
}
