import React from "react";
import Button from "../Button/Button";
const Suppliers = () => {
  return (
    <>
      <section className=" m-11 flex-col  text-center">
        <form className="  m-5 flex-col  justify-center items-center text-center  ">
          <h2 className=" m-10 text-3xl font-extrabold ">Supplier Details </h2>
          <div className="flex-col  border-black-3 width-[500]px bg-violet-100  border-r-50 text-center ">
            <div className="p-5 flex gap-80 text-start ">
              <div>
                <label
                  className=" font-bold text-base text-left"
                  htmlFor="Supplier Name"
                >
                  Supplier Name
                </label>

                <input
                  className="w-full pl-2   border-black"
                  placeholder="Enter Supplier Name"
                  type="text"
                />
              </div>

              <div className="flex-col">
                <label className="font-bold text-base " htmlFor="Company Name">
                  Company Name
                </label>
                <input
                  className="w-full pl-2  border-black"
                  placeholder="Enter Company Name"
                  type="text"
                />
              </div>
            </div>
            <div className="p-5 flex gap-80 text-start ">
              <div className="flex-col">
                <label className="font-bold text-base " htmlFor="Company Name">
                  Country
                </label>
                <select
                  className="w-full pl-2  border-black"
                  placeholder="Enter Company Name"
                  type="number"
                >
                  <option value="India">USA</option>
                  <option value="America">India</option>
                  <option value="Japan">Japan</option>
                </select>
              </div>

              <div className="flex-col">
                <label className="font-bold text-base " htmlFor="Company Name">
                  State
                </label>
                <select
                  className="w-full pl-2  border-black"
                  placeholder="Enter Company Name"
                  type="number"
                >
                  <option value="Maharashtra">Florida</option>
                  <option value="Kerelai">Kerela</option>
                  <option value="Gujarat">Gujarat</option>
                </select>
              </div>
            </div>

            <div className="font-bold p-5 flex gap-80 text-base text-start">
              <div>
                <label htmlFor="City">City</label>
                <select
                  className="w-full border-black"
                  type="text"
                  placeholder="Select City"
                >
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chennai">Chennai</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-base " htmlFor="Email Address">
                  Email Address
                </label>
                <input
                  className="text-xs w-full border-black pl-2"
                  placeholder="Enter Email Address"
                  type="email"
                />
              </div>
            </div>

            <div className="flex-col text-start text-base pl-5 ">
              <label
                className=" font-bold text-base text-left"
                htmlFor="Supplier Name"
              >
                Phone Number
              </label>

              <input
                className="w-full pl-2   border-black"
                placeholder="Enter Supplier Name"
                type="text"
              />
            </div>

            <Button />
          </div>
        </form>
      </section>
    </>
  );
};

export default Suppliers;
