import React from "react";
import Offert from "../Offert/Offert"
import Slide from 'react-reveal/Slide'
const Data = require("../../Data.json");
export default function OffertsList(props) {
  return (
    <div className="cards">
        {Data.offerts.map(item => <Slide><Offert key={item.id} id={item.id} description={item.description} pic={item.pic} price={item.price} title={item.title}/></Slide>)}

    </div>
  );
}
