import React, { Fragment } from "react";
import BestGear from "../../components/BestGear/BestGear";
import CategoryNavigation from "../../components/CategoryNavigation/CategoryNavigation";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

const SpeakerPage = () => {
  return (
    <Fragment>
      <Nav />
      <h1>Speaker</h1>
      <CategoryNavigation />
      <BestGear />
      <Footer />
    </Fragment>
  );
};

export default SpeakerPage;
