import React from "react";
import CoverPic from "../../img/cover.jpg";
import ProfilePic from "../../img/profileImg.jpg";
import "./Profilecard.css";
const Profilecard = () => {
  return (
    <div className="ProfileCard">
      <div className="profileImages">
        <img src={CoverPic}></img>
        <img src={ProfilePic}></img>
      </div>
      <div className="ProfileName">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          {" "}
          <div className="follow">
            <span>6, 890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>
      <span>
        My Profile
      </span>
    </div>
  );
};

export default Profilecard;
