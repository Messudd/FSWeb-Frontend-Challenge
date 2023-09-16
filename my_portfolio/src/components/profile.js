import React, { useContext } from "react";
import { dataContext } from "../context/dataContext";
import "../css/profile.css";
import AnimatedPage from "./animatedPage";

const Profile = () => {
  const myState = useContext(dataContext);
  const { profile, other } = myState.data;
  const themeMode = myState.mode;

  const headColor = {
    color: !themeMode && "#B7AAFF",
  };
  const contentColor = {
    color: !themeMode && "#FFFFFF",
  };

  return (
    <AnimatedPage>
      <div className="profile">
        <h1 style={{ color: !themeMode && "#AEBCCF" }}>{other.profil}</h1>
        <div className="profile-div">
          <div className="profile-left">
            <h3 style={headColor}>{other.profil}</h3>
            <p>
              <span style={contentColor}>{other.DT}</span>
              <span style={contentColor}>{profile.date_of_birth}</span>
            </p>
            <p>
              <span style={contentColor}>{other.loc}</span>
              <span style={contentColor}>{profile.city}</span>
            </p>
            <p>
              <span style={contentColor}>{other.degree}</span>
              <span style={contentColor}>{profile.education}</span>
            </p>
            <p>
              <span style={contentColor}>{other.rl}</span>
              <span style={contentColor}>{profile.role}</span>
            </p>
          </div>
          <div className="profile-right">
            <h3 style={headColor}>{other.aboutMe}</h3>
            <p style={contentColor}>{profile.about}</p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Profile;
