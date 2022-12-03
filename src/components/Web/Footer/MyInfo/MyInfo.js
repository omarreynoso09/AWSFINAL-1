import React from "react";
import LogoWhite from "../../../../assets/img/png/logo-white.png";
import SocialLink from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={LogoWhite} alt="Hansel Reynoso" />
      <h4>
        Enter the world of web development, enjoy creating projects,let your
        imagination flow and create art!!!!
      </h4>
      <SocialLink />
    </div>
  );
}
