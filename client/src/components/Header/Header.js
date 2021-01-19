import React from "react";
import { Button, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Auth0LogoutButton from "../Auth0LogoutButton/Auth0LogoutButton";
import Auth0LoginButton from "../Auth0LoginButton/Auth0LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import cookie from "react-cookies";
export default function Header(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <Menu inverted>
        <Menu.Item>
          <h1>
            <span style={{ color: "red" }}>GAME </span>
            <span style={{ color: "white" }}>SWAP</span>
          </h1>
        </Menu.Item>
        <Menu.Item position="right">
          <Link to="/create-offer">
            <Button component={Link} to="/create-offer" positive>
              <Icon name="wpforms" />
              Dodaj ofertę
            </Button>
          </Link>
          {!isAuthenticated && (
            <Auth0LoginButton />
          )}
          {isAuthenticated && (
            <Link to="/my-profile">
              <Button color="blue">
                <Icon name="user" />
                Mój profil
              </Button>
            </Link>
          )}
          {isAuthenticated && <Auth0LogoutButton />}
        </Menu.Item>
      </Menu>
    </div>
  );
}
