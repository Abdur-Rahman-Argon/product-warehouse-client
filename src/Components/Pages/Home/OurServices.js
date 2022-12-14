import React from "react";
import icon1 from "./../../../images/icon1.jpg";
import icon2 from "./../../../images/icon2.png";
import icon3 from "./../../../images/icon-3.png";
import icon4 from "./../../../images/icon4.png";
import icon5 from "./../../../images/icon5.png";

const OurServices = () => {
  //   return <Loading></Loading>

  return (
    <div className="flex justify-around flex-wrap">
      <div class="card w-32  lg:w-72 bg-base-100 m-2 shadow-sm border-[1px] border-gray-300 ">
        <figure class="px-10 pt-5 ">
          <img src={icon1} alt="Shoes" class="rounded-xl  w-[130px]" />
        </figure>
        <div class="text-center my-3">
          <h2 class=" text-lg font-bold my-2">SHIPMENT</h2>
        </div>
      </div>

      <div class="card w-32  lg:w-72 bg-base-100 m-2 shadow-sm border-[1px] border-gray-300">
        <figure class="px-10 pt-5 w- ">
          <img src={icon2} alt="Shoes" class="w-[130px] rounded-full" />
        </figure>
        <div class="text-center my-3">
          <h2 class=" text-lg font-bold my-2">TRACKING</h2>
        </div>
      </div>

      <div class="card w-32  lg:w-72 bg-base-100 m-2 shadow-sm border-[1px] border-gray-300">
        <figure class="px-10 pt-5 ">
          <img src={icon3} alt="Shoes" class="rounded-xl  w-[130px]" />
        </figure>
        <div class="text-center my-3">
          <h2 class=" text-lg font-bold my-2">STORAGE</h2>
        </div>
      </div>

      <div class="card w-32  lg:w-72 bg-base-100 m-2 shadow-sm border-[1px] border-gray-300">
        <figure class="px-10 pt-5 ">
          <img src={icon4} alt="Shoes" class="rounded-xl  w-[130px]" />
        </figure>
        <div class="text-center my-3">
          <h2 class=" text-lg font-bold my-2">TRANSPORT</h2>
        </div>
      </div>

      {/* <div class="card w-32  lg:w-72 bg-base-100 m-2 shadow-sm border-[1px] border-gray-300">
        <figure class="px-10 pt-5 ">
          <img src={icon5} alt="Shoes" class="rounded-xl  w-[130px]" />
        </figure>
        <div class="text-center my-3">
          <h2 class=" text-lg font-bold my-2">PALLET</h2>
        </div>
      </div> */}
    </div>
  );
};

export default OurServices;
