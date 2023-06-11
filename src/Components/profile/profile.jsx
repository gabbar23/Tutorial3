import React from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const Profile = () => {
  const location = useLocation();
  const { state } = location;

  if (!state) {
    // Handle the case where the state is undefined or empty
    return <div>No data available</div>;
  }

  const { firstName, lastName, email } = state;

  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <Typography variant="h4" gutterBottom>
        Profile Page
      </Typography>
      <Typography variant="body2" gutterBottom>
        First Name: {firstName}
      </Typography>
      <Typography variant="body2" gutterBottom>
        Last Name: {lastName}
      </Typography>
      <Typography variant="body2" gutterBottom>
        Email: {email}
      </Typography>
    </div>
  );
};

export default Profile;
