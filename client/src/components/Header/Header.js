import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
function handleLogOut(changeIsLogedOut) {
  localStorage.clear();
  changeIsLogedOut(true);
  window.location.reload(true);
}
export default function Header(props) {
  return (
    <div>
      <Menu inverted>
        <Menu.Item>
          <h1>GAME SWAP</h1>
        </Menu.Item>
        <Menu.Item position="right">
          <Link to="/create-offer">
            <Button
              component={Link}
              to="/create-offer"
              positive
              content="Dodaj ofertę"
            />
          </Link>
          {!props.isLoged ? (
            <Link to="/login">
              <Button
                color="blue"
                content="Zaloguj się"
                style={{ marginLeft: "5px" }}
              />
            </Link>
          ) : (
            <Button
              content="wyloguj"
              negative
              onClick={() => handleLogOut(props.changeIsLogedOut)}
            />
          )}
        </Menu.Item>
      </Menu>
    </div>
  );
}
