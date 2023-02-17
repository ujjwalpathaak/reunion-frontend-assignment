import React from "react";
const PropertyCard = ({ listing }) => {
  return (
    <div className="bg-slate-200 border-2 border-slate-100 rounded-lg m-3 w-72 hover:border-2 hover:border-black hover:bg-slate-200 transition">
      <img className="h-[200px] w-full rounded-t-lg" src={listing.image} />
      <div className="pl-1">
        <h1 className="font-bold text-2xl">{listing.name}</h1>
        <h6 className="font-medium">₹ {listing.price}</h6>
        <p className="inline mr-1 text-xs">📍 {listing.address}</p>
        <p className="inline mr-1 text-xs">🏠 {listing.type}</p>
        <p className="inline mr-1 text-xs">🛏️ {listing.beds}</p>
      </div>
    </div>
  );
};

export default PropertyCard;