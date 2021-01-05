import React from "react";
import Offert from "../Offert/Offert";
import Slide from "react-reveal/Slide";
const data = require("../../Data.js");
export default function OffertsList(props) {
  return (
    <div className="cards">
      {props.offers.map((item) => (
        <Slide>
          <Offert
            key={item.id}
            id={item.id}
            description={item.description}
            pic={item.pic}
            price={item.price}
            title={item.title}
          />
        </Slide>
      ))}
    </div>
  );
}
