import React from "react";

const NavigationBar = () => {
  return (
    <div className="text-white bg-black/50 w-[100vw] min-h-[60px] h-[8vh] flex justify-center items-center">
      <div className="w-[90vw] h-full flex justify-between  items-center">
        <div className="flex justify-between align-center ml-3 ">
          <h1 className="text-3xl font-bold drop-shadow-lg">99bricks</h1>
          <div className="space-x-5 ml-4 flex items-center justify-center">
            <button className="font-semibold transition underline h-fit w-12 flex align-center justify-center">
              Rent
            </button>
            <button className="font-semibold transition hover:underline h-fit w-12 flex align-center justify-center">
              Buy
            </button>
            <button className="font-semibold transition hover:underline h-fit w-12 flex align-center justify-center ">
              Sell
            </button>
          </div>
        </div>
        <div className="space-x-3 mr-3">
          <button className="hover:bg-white hover:text-black border w-16 p-1 rounded-lg transition">
            Login
          </button>
          <button className="hover:bg-white hover:text-black border w-16 p-1 rounded-lg transition">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;