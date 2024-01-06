"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./heroCarousel.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import banner1 from "../../../../public/assets/images/banner-1.png";
import banner2 from "../../../../public/assets/images/banner-2.png";
import banner3 from "../../../../public/assets/images/banner-3.png";

export default class HeroCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div className="w-full  ">
        <Slider {...settings}>
          <div className="w-11/12  bg-[#f8f8fa] mx-auto ">
            <div class="container relative ">
              <Image src={banner1} alt="" />
              <div class="absolute top-[30%] left-10 ">
                <h4>Spring-Summer 2024</h4>
                <h1 className="text-[50px] font-extrabold ">BEST OF COLLECTION!</h1>
                <p className="w-[60%] text-xs">
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  essecillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat nonproident
                </p>
                <button className=" border-[2px] border-black rounded-full px-3 py-2 mt-3">
                    Shop now
                </button>
              </div>
            </div>
          </div>
          <div className="w-11/12   bg-[#f8f8fa] mx-auto ">
            <div class="container relative">
              <Image src={banner2} alt="" />
              <div class="absolute top-[30%] right-0 ">
                <h4>2024 New Arrivals</h4>
                <h1 className="text-[50px] font-extrabold ">SALE OFF! UP TO 70%</h1>
                <p className="w-[60%] text-xs">
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  essecillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat nonproident
                </p>
                <button className=" border-[2px] border-black rounded-full px-3 py-2 mt-3">
                    Shop now
                </button>
              </div>
            </div>
          </div>
          <div className="w-11/12  bg-[#f8f8fa] mx-auto ">
            <div class="container relative">
              <Image src={banner3} alt="" />
              <div class="absolute top-[30%] right-[20%]  flex flex-col justify-center items-center">
                <h4>Summer 2024</h4>
                <h1 className="text-[50px] font-extrabold ">FLASH SALE</h1>
                <p className="w-[60%] text-xs">
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  essecillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat nonproident
                </p>
                <button className=" border-[2px] border-black rounded-full px-3 py-2 mt-3">
                    Shop now
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
