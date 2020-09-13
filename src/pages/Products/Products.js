import React from "react";
import { homeObjFive } from "./Data";
import { InfoSection } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjFive} />
    </>
  );
};

export default Home;
