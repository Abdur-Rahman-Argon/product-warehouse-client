import React from "react";

const Banner = () => {
  return (
    <div className=" cover bg-[url('https://transport.themesun.com/images/revo-slider/s1_bg.jpg')] py-20 text-white ">
      <h1 className=" text-5xl font-bold ">WARE HOUSEING AND</h1>
      <h1 className="my-2 text-5xl font-bold text-white">TRANSPORT SERVICES</h1>
      <p className=" w-[500px] font- text-[16px] mx-auto my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas ut
        accusantium ipsum vel dolores possimus recusandae pariatur veniam
        sapiente error animi porro iure, vero rem quaerat ipsa eaque,
      </p>
      <button class="btn btn-active btn-primary outline-none my-5">
        Explore With Us
      </button>
    </div>
  );
};

export default Banner;