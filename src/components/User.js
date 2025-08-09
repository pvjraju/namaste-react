import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  useEffect(() => {}, []);
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @pvjraju26</h4>
    </div>
  );
};

export default User;
