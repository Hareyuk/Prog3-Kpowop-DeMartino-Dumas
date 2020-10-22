import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton"

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) 
    {return (
    <div>
    <LoginButton/>
    </div>)
    }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>Sujeto #0003</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
