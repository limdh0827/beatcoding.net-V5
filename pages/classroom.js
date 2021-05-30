import Head from "next/head";
import Link from "next/link";

const Classroom = () => {
  return (
    <>
      <Head>
        <title>비트코딩 - 웹사이트 준비중</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
        <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center">
          <div className="text-center pb-12 md:pb-16 ">
            <h1
              className="font-extrabold leading-tighter tracking-tighter mb-4 drop-shadow-2xl	"
              data-aos="flip-left"
            >
              <span className="bg-clip-text text-6xl md:text-8xl text-transparent bg-gradient-to-r from-btc_start to-btc_end tracking-wide">
                BeatCoding
              </span>

              <span className="text-4xl md:text-7xl text-black font-black animate-pulse">
                <br />
                준비중 🚧
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-lg md:text-xl text-black mb-8 drop-shadow-2xl"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <br />
                비트코딩 웹사이트에 새로운 기능과 디자인이 추가되고 있습니다.
              </p>
              <Link href="/">
                <a>
                  <span className="text-2xl text-blue-500 font-bold transform transition duration-300 ease-in-out hover:scale-110">
                    홈으로 돌아가기 &rarr;
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Classroom;
