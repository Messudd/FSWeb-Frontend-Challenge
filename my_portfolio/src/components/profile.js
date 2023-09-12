import React, { useContext } from "react";
import { dataContext } from "../context/dataContext";
import "../css/profile.css";

const Profile = () => {
  const myState = useContext(dataContext);
  const { profile } = myState.data;
  const themeMode = myState.mode;

  const headColor = {
    color: !(themeMode) && '#B7AAFF'
  }

  const contentColor = {
    color: !(themeMode) && '#FFFFFF'
  }

  return (
    <div className="profile">
      <h1 style={{color: !(themeMode) && '#AEBCCF'}}>Profile</h1>
      <div className="profile-div">
        <div className="profile-left">
          <h3 style={headColor}>Profile</h3>
          <p>
            <span style={contentColor}>Date of birth : </span><span style={contentColor}>{profile.date_of_birth}</span>
          </p>
          <p>
            <span style={contentColor}>City : </span>
            <span style={contentColor}>{profile.city}</span>
          </p>
          <p>
            <span style={contentColor}>Education : </span>
            <span style={contentColor}>{profile.education}</span>
          </p>
          <p>
            <span style={contentColor}>Role : </span>
            <span style={contentColor}>{profile.role}</span>
          </p>
        </div>
        <div className="profile-right">
          <h3 style={headColor}>About Me</h3>
          <p style={contentColor}>{profile.about}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
