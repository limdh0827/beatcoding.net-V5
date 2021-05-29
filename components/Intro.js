const Intro = () => {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        id="scroll_1"
        className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"
      ></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className=" text-xl  font-bold">소개</h2>
            <h2 className="flex justify-center items-center space-x-3 text-5xl font-bold mb-4">
              <img
                src="/btc.svg"
                alt="BeatCoding Logo"
                className="ml-2 my-auto h-14"
              />
              <span>비트코딩</span>
            </h2>
            <p className="text-xl text-gray-600 mt-10" data-aos="zoom-y-out">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              facere at maxime, nisi voluptatibus necessitatibus quis
            </p>

            <div
              className="mt-14 flex flex-col items-start md:flex-row justify-center md:items-center space-y-10 p-5 md:space-x-14"
              data-aos="fade-left"
            >
              <div className="flex  flex-col text-left">
                <p className="text-lg text-gray-700 ">누구?</p>
                <hr className="my-2" />
                <p className="text-2xl font-bold transform transition duration-300 ease-in-out hover:scale-110">
                  유성고등학교 1 학년 👨‍🎓
                </p>
              </div>

              <div className="flex  flex-col text-left">
                <p className="text-lg text-gray-700 ">언제?</p>
                <hr className="my-2" />
                <p className="text-2xl font-bold transform transition duration-300 ease-in-out hover:scale-110">
                  매주 금요일 창체시간 🏫
                </p>
              </div>
              <div className="flex  flex-col text-left">
                <p className="text-lg text-gray-700 ">선수 지식?</p>
                <hr className="my-2" />
                <p className="text-2xl font-bold transform transition duration-300 ease-in-out hover:scale-110">
                  필요 없음. 😎
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg
                    className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img
                    className="relative rounded-full"
                    src="https://images.unsplash.com/photo-1622241944227-ae279379cc80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                    width="96"
                    height="96"
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ I love this product and would recommend it to anyone. Could
                  be not easier to use, and our multiple websites are wonderful.
                  We get nice comments all the time. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  Darya Finger
                </cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span>{" "}
                  <a className="text-blue-600 hover:underline" href="#0">
                    @Dropbox
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
