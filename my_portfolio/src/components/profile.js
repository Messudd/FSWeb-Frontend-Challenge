import React, { useContext } from "react";
import { dataContext } from "../context/dataContext";
import "../css/profile.css";

const Profile = () => {
  const myState = useContext(dataContext);
  const { profile } = myState.data;
  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="profile-div">
        <div className="profile-left">
          <h3>Profile</h3>
          <p>
            <span>Date of birth : </span><span>{profile.date_of_birth}</span>
          </p>
          <p>
            <span>City : </span>
            <span>{profile.city}</span>
          </p>
          <p>
            <span>Education : </span>
            <span>{profile.education}</span>
          </p>
          <p>
            <span>Role : </span>
            <span>{profile.role}</span>
          </p>
        </div>
        <div className="profile-right">
          <h3>About Me</h3>
          <p>{profile.about}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
