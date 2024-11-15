import React from "react";
import Button from "../Button/Button";
const Items = () => {
  return (
    <>
      <section className="  m-11 flex-col  text-center ">
        <form className="  flex gap-5  font-semi-bold text-center items-center justify-center cursor-pointer">
          <input type="checkbox" value="Item" id="Item" name="Item" />
          <label className="text-base " htmlFor="Item">
            Item
          </label>
          <input
            type="checkbox"
            value="Supplier"
            id="Supplier"
            name="Supplier"
          />
          <label className="text-base " htmlFor="Supplier">
            Supplier
          </label>
        </form>

        <form className="m-5">
          <h1 className="  m-11 flex-col  text-center text-3xl font-extrabold ">
            Item Details
          </h1>
          <div className=" flex-col  border-black-3 width-[500]px bg-violet-100 border-r-50">
            <div className="p-5 flex gap-80 text-start ">
              <div>
                <label
                  className="font-bold text-base text-left"
                  htmlFor="Item Name"
                >
                  Item Name
                </label>

                <input
                  className="w-full pl-2   border-black"
                  placeholder="Enter Item Name"
                  type="text"
                />
              </div>

              <div className="flex-col">
                <label className="font-bold  text-base " htmlFor="Quantity">
                  Quantity
                </label>
                <input
                  className="w-full pl-2  border-black"
                  placeholder="Enter Quantity"
                  type="number"
                />
              </div>
            </div>

            <div className=" p-5 flex gap-80 text-start">
              <div>
                <label className="font-bold  text-base " htmlFor="Unit Price ">
                  Unit Price
                </label>
                <input
                  className="w-full border-black pl-2"
                  placeholder="Enter Unit price "
                  type="currency"
                />
              </div>

              <div>
                <label className="font-bold  text-base " htmlFor="Item Name">
                  Date of submission
                </label>
                <input className="w-full  border-black" type="date" />
              </div>
            </div>
          </div>
        </form>
      </section>

      {/* <Button className="hidden" /> */}
    </>
  );
};

export default Items;
