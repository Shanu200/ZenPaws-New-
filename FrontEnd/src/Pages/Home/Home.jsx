import React from "react";

import Hero from "../../Components/Hero/Hero";
import Menus from "../../Components/Menus/Menus";
import Banner from "../../Components/Banners/Banner";
import Banner2 from "../../Components/Banners/Banner2";
import Banner3 from "../../Components/Banners/Banner3";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
     
      <Hero />
      <Menus />
      <Banner />
      <Banner2 />
      <Banner3 />
      <Footer />
      
    </div>
  );
};

export default Home;
