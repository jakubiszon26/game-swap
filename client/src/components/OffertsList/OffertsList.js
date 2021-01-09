import React from "react";
import Offert from "../Offert/Offert";
import Slide from "react-reveal/Slide";
import Search from "../Search/Search";
export default function OffertsList(props) {
  return (
    <React.Fragment>
      {/* <Search /> */}
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
              user={item.user}
              userId={props.userId}
            />
          </Slide>
        ))}
      </div>
    </React.Fragment>
  );
}
