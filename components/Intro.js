import Link from "next/link";

const Intro = () => {
  const scrollToJoin = () => {
    document
      .querySelector("#scroll_join")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        id="scroll_1"
        className="absolute left-0 right-0 m-auto w-px p-px h-32 transform -translate-y-full "
      ></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-32">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className=" text-xl  font-bold" data-aos="zoom-y-out">
              소개
            </h2>
            <h2
              className="flex justify-center items-center space-x-3 text-5xl font-bold mb-4"
              data-aos="zoom-y-out"
            >
              <img
                src="/btc.svg"
                alt="BeatCoding Logo"
                className="ml-2 my-auto h-14"
              />
              <span>비트코딩</span>
            </h2>
            <p
              className="text-xl text-gray-600 mt-10"
              data-aos="zoom-y-out"
              data-aos-delay="200"
            >
              코딩의 기초부터 함께 배우고, 배운 내용으로 코딩의 중요성을 깨닫게
              하는 동아리입니다.
            </p>

            <div
              className="mt-14 flex flex-col md:flex-row justify-center items-center space-y-9 md:space-y-0 md:space-x-10"
              data-aos="fade-left"
            >
              <div className="flex flex-col md:text-left" data-aos-delay="450">
                <p className="text-base text-gray-700 ">누구?</p>
                {/* <hr className="my-2" /> */}
                <p className="text-2xl font-bold transform transition duration-300 ease-in-out hover:scale-110">
                  유성고등학교 1 학년 👨‍🎓
                </p>
              </div>

              <div className="flex  flex-col md:text-left">
                <p className="text-base text-gray-700 ">언제?</p>
                {/* <hr className="my-2" /> */}
                <p className="text-2xl font-bold transform transition duration-300 ease-in-out hover:scale-110">
                  매주 금요일 창체시간 🏫
                </p>
              </div>

              <div className="flex  flex-col md:text-left">
                <p className="text-base text-gray-700 ">선수 지식?</p>
                {/* <hr className="my-2" /> */}
                <p className="text-2xl font-bold transform transition duration-300 ease-in-out hover:scale-110">
                  필요 없음. 😎
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-14" data-aos="flip-left">
            <div className="relative flex items-start border-2 border-gray-200 rounded-lg bg-btc-logo bg-no-repeat bg-center bg-fixed bg-contain shadow-xl  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <div className="text-center  py-8 pt-20 mx-auto ">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 "></div>
                <blockquote className="text-2xl font-bold mb-4 drop-shadow-2xl		">
                  Beat + Coding, 코딩을 부수다.
                  <br />
                  <span className="text-xl">
                    코딩을 몰라도 가입할 수 있습니다. <br />
                  </span>
                  <br />
                  <span className="text-3xl">🖥 컴덕 환영 🤗</span>
                  <br />
                  <br />
                </blockquote>
                <cite className="block font-normal text-md text-right not-italic mb-1">
                  <span>비트코딩</span>{" "}
                  <a
                    onClick={scrollToJoin}
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    가입하기 &rarr;
                  </a>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
