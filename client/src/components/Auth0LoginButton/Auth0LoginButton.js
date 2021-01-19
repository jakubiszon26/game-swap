import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button} from 'semantic-ui-react'

const Auth0LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button color="blue" onClick={() => loginWithRedirect()}>Zaloguj się</Button>;
};

export default Auth0LoginButton;