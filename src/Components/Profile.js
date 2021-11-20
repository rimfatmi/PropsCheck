import React from "react";

function Profile({ name, email }) {
  return (
    <div>
      <h1>Hello </h1>
      <h2>Name : {name} </h2>
      <h2>Name : {email} </h2>
    </div>
  );
}

Profile.defaultprops = {
  name: "Rim Fatmi",
  email: "rim@gmail.com"
};
export default Profile;
