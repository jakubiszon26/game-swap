import React from "react";
import data from "../../Data.js"
import Offert from "../Offert/Offert"

export default function OffertsList(props) {
  return (
    <>
        {data.offerts.map(item => <Offert key={item.id} id={item.id} description={item.description} pic={item.pic} price={item.price} title={item.title}/>)}

    </>
  );
}
