import React from "react";
import { Button, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import cookie from "react-cookies";
function handleLogOut(changeIsLogedOut) {
  cookie.remove("userId", { path: "/" });
  cookie.remove("isLoged", { path: "/" });

  changeIsLogedOut(true);
  window.location.reload(true);
}
export default function Header(props) {
  return (
    <div>
      <Menu inverted>
        <Menu.Item>
          <h1>
            <span style={{color: "red"}}>GAME </span>
            <span style={{color: "white"}}>SWAP</span>
          </h1>
        </Menu.Item>
        <Menu.Item position="right">
          <Link to="/create-offer">
            <Button component={Link} to="/create-offer" positive>
              <Icon name="wpforms" />
              Dodaj ofertę
            </Button>
          </Link>
          {!props.isLoged && (
            <Link to="/login">
              <Button color="blue" style={{ marginLeft: "5px" }}>
                <Icon name="sign in" />
                Zaloguj się
              </Button>
            </Link>
          )}
          {props.isLoged && (
            <Link to="/my-profile">
              <Button color="blue">
                <Icon name="user" />
                Mój profil
              </Button>
            </Link>
          )}
          {props.isLoged && (
            <Button
              
              negative
              onClick={() => handleLogOut(props.changeIsLogedOut)}
            ><Icon name="sign out"/>Wyloguj</Button>
          )}
        </Menu.Item>
      </Menu>
    </div>
  );
}
