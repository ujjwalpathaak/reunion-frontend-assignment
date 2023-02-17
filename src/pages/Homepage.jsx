import React from "react";
import Catalogue from "../components/Catalogue";
import NavigationBar from "../components/NavigationBar";
import SearchBar from "../components/SearchBar";

const Homepage = () => {
  return (
    <div className="bg-slate-100 flex flex-col justify-center">
      <div className="bg-center bg-no-repeat bg-cover bg-[url('/homepage-image.jpg')] h-[35vh] flex flex-col justify-between items-center">
        <NavigationBar />
        <SearchBar />
      </div>
      <div className="mt-3 h-[64vh] w-full flex flex-col justify-between items-center">
        <Catalogue />
      </div>
    </div>
  );
};

export default Homepage;
