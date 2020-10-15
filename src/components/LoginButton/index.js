import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Rombo} from '../Rombo';
import StyledLoginButton from './styled';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
      !isAuthenticated &&(
      <StyledLoginButton onClick={() => loginWithRedirect()}>
        <Rombo Color="#35BDE4" ColorAdentro="#181E35" Tamanio="35"></Rombo> 
        Log In
      </StyledLoginButton>));
};

export default LoginButton;