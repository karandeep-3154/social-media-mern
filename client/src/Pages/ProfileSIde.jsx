import React from "react";
import './ProfileSide.css'
import LogoSearch from "./LogoSearch";
import Profilecard from "./ProfileCard/Profilecard";
import FollowersCard from "./ProfileCard/FollowersCard/FollowersCard";
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <Profilecard />
      <FollowersCard/>
    </div>
  );
};

export default ProfileSide;
