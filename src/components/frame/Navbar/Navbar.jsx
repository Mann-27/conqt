import React from "react";

const Navbar = () => {
  return (
    <>
      <ul className="w-full h-10 text-white text-lg bg-blue-600 flex justify-between">
        <li>Inventory Management System</li>
        <li className="pr-3 cursor-pointer">Home</li>
      </ul>
    </>
  );
};

export default Navbar;
