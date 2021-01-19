import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; 
import {Button} from 'semantic-ui-react'

const Auth0LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button negative onClick={() => logout({ returnTo: window.location.origin })}>
      Wyloguj się
    </Button>
  );
};

export default Auth0LogoutButton;