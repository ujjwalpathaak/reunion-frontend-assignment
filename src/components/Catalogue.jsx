import React from "react";
import { useSelector } from "react-redux";
import PropertyCard from "./PropertyCard";
import { getCatalogueItems } from "../features/catalogueSlice";

const Catalogue = () => {
  let items = useSelector(getCatalogueItems);

  return (
    <div className="overflow-x-auto flex justify-center flex-wrap w-[65vw]">
      {items.map((listing, i) => {
        return <PropertyCard key={i} listing={listing} />;
      })}
    </div>
  );
};

export default Catalogue;