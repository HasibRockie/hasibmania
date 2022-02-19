import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Recent from "./Recent";

const Home = () => {
  return <div className="home">
    <Banner></Banner>
    <Recent></Recent>
  </div>;
};

export default Home;
