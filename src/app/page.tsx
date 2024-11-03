import React from "react";
import Hero from "./(home)/hero/Hero";
import HotProducts from "./(home)/hotProducts/HotProducts";
import Categories from "./(home)/categories/Categories";
import LatestProducts from "./(home)/latestProducts/LatestProducts";
import Phone from "./(home)/phone/Phone";

const Home = () => {
  return (
    <main>
      <Hero />
      <HotProducts />
      <Categories />
      <LatestProducts />
      <Phone />
    </main>
  );
};

export default Home;
