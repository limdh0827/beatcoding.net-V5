import React, { useState } from "react";
import Link from "next/link";

function Hero() {
  const learnMoreBtn = () => {
    // window.scrollTo({ top: 1000, behavior: "smooth" });
    // document.getElementById("scroll_1").scrollIntoView({ behavior: "smooth" });
    document.querySelector("#scroll_1").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative">
      <div className=" mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="h-screen flex flex-col justify-center items-center">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16 ">
            <h1 className="font-extrabold leading-tighter tracking-tighter mb-4">
              <span className="bg-clip-text text-6xl md:text-8xl text-transparent bg-gradient-to-r from-btc_start to-btc_end tracking-wide">
                BeatCoding <br />
              </span>
              <span className="text-4xl md:text-7xl">비트코딩</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                2021년{" "}
                <Link href="https://yshs.djsch.kr/main.do">
                  <a target="_blank">
                    <span className="underline text-blue-500">
                      유성고등학교
                    </span>
                  </a>
                </Link>{" "}
                창체 동아리
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center sm:space-x-7">
                <button
                  onClick={learnMoreBtn}
                  className="transition duration-300 ease-in-out text-white font-normal tracking-wide  bg-blue-600 hover:bg-btc_start  transform hover:-translate-y-1 hover:scale-110 px-5 py-3 rounded-lg w-10/12 mb-4 sm:w-auto sm:mb-0 focus:outline-none"
                >
                  더 알아보기 &darr;
                </button>
                <Link href="/classroom">
                  <button className="transition duration-300 ease-in-out text-white font-normal tracking-wide  bg-blue-600 hover:bg-btc_start  transform hover:-translate-y-1 hover:scale-110 px-5 py-3 rounded-lg w-10/12 mb-4 sm:w-auto sm:mb-0 focus:outline-none">
                    교실로 이동하기 &rarr;
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/* <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={heroImage}
                  width="768"
                  height="432"
                  alt="Hero"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
