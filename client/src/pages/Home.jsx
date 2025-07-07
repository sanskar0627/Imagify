import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Description from "../components/Description";
import Testimoninals from "../components/Testimoninals";
import GenrateBtn from "../components/GenrateBtn";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimoninals />
      <GenrateBtn />
    </div>
  );
};

export default Home;
