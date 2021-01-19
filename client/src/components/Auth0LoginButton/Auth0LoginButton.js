import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth0LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button positive onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;