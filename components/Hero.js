import React, { useState } from "react";

function Hero() {
  //   const [videoModalOpen, setVideoModalOpen] = useState(false);

  const heroImage =
    "https://images.unsplash.com/photo-1622241944227-ae279379cc80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";

  const learnMoreBtn = () => {
    // window.scrollTo({ top: 1000, behavior: "smooth" });
    document.getElementById("scroll_1").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative">
      <div className=" mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span className="bg-clip-text text-6xl md:text-8xl text-transparent bg-gradient-to-r from-btc_start to-btc_end tracking-wide">
                BeatCoding <br />
              </span>
              <span className="text-4xl md:text-7xl">Lorem Ipsum</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-lg md:text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <button
                  onClick={learnMoreBtn}
                  className="transition duration-300 ease-in-out text-white  bg-blue-600 hover:bg-btc_start  transform hover:-translate-y-1 hover:scale-110 px-5 py-3 rounded-lg w-10/12 mb-4 sm:w-auto sm:mb-0"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
