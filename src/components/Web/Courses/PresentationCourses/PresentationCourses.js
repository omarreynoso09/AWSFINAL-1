import React from "react";
import AcademyLogo from "../../../../assets/img/png/academy-logo.png";

import "./PresentationCourses.scss";

export default function PresentationCourses() {
  return (
    <div className="presentation-courses">
      <img src={AcademyLogo} alt="Hansel Reynoso Courses" />
      <p>
        At Hansel Reynoso Academy you will find the best online courses in web
        development. Join us and start your journey as Web Developer or CMS
        Developer. Honestly, these courses have the type of content that I would
        have liked to find when I started in the world of professional web
        development.
      </p>
      <p>¡¡¡Take a look at the specials!!!</p>
    </div>
  );
}
