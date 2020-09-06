import React from "react";
import { homeObjFour } from "./Data";
import { InfoSection } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
