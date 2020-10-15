import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Rombo} from '../Rombo';
import StyledLogOutButton from './styled';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
      isAuthenticated &&(
    <StyledLogOutButton onClick={() => logout({ returnTo: window.location.origin })}>
      <Rombo Color="#E31075" ColorAdentro="#181E35" Tamanio="35"></Rombo> 
      Log Out
    </StyledLogOutButton>
  ))
};

export default LogoutButton;