import React from "react";
import { Helmet } from "react-helmet";
import HomeCourses from "../components/Web/HomeCourses/HomeCourses";
import HomeAboutMe from "../components/Web/HomeAboutme/HomeAboutMe";
import ReviewsCourses from "../components/Web/Reviews/Reviews";
import MainBanner from "../components/Web/MainBanner/MainBanner";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Hansel Reynoso</title>
        <meta
          name="description"
          content="Home | Web developer Portfolio"
          data-react-helmet="true"
        />
      </Helmet>
      <MainBanner />
      <HomeCourses />
      <HomeAboutMe />
      <ReviewsCourses />
    </>
  );
}
