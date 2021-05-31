import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition.js";

function Activities() {
  const courseImages = [
    "/courses/course-python-1.png",
    "/courses/course-python-2.png",
    "/courses/course-web-1.png",
  ];

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative ">
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-0 "
        aria-hidden="true"
      />
      <div
        id="scroll_2"
        className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"
      ></div>

      <div className="relative max-w-6xl mx-auto pl-2 pr-2">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className=" text-xl  font-bold">활동</h2>
            <h1 className="text-5xl  font-bold mb-4">Activities</h1>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className=" mb-3">
                  모든 활동 계획은 추후 변경될 수 있습니다.
                </h3>
              </div>

              <div className="mb-8">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      파이썬 기초편: What the F*** Python?!
                    </div>
                    <div className="text-gray-600">
                      파이썬이 활용되는 분야와 목적, 그리고 장단점을 배우고,
                      기본 문법(자료형, 제어문, 함수, 클래스 등) 을 배웁니다.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      width="256px"
                      height="255px"
                      viewBox="0 0 256 255"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                    >
                      <defs>
                        <linearGradient
                          x1="12.9593594%"
                          y1="12.0393928%"
                          x2="79.6388325%"
                          y2="78.2008538%"
                          id="linearGradient-1"
                        >
                          <stop stopColor="#387EB8" offset="0%"></stop>
                          <stop stopColor="#366994" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient
                          x1="19.127525%"
                          y1="20.5791813%"
                          x2="90.7415328%"
                          y2="88.4290372%"
                          id="linearGradient-2"
                        >
                          <stop stopColor="#FFE052" offset="0%"></stop>
                          <stop stopColor="#FFC331" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <g>
                        <path
                          d="M126.915866,0.0722755491 C62.0835831,0.0722801733 66.1321288,28.1874648 66.1321288,28.1874648 L66.2044043,57.3145115 L128.072276,57.3145115 L128.072276,66.0598532 L41.6307171,66.0598532 C41.6307171,66.0598532 0.144551098,61.3549438 0.144551098,126.771315 C0.144546474,192.187673 36.3546019,189.867871 36.3546019,189.867871 L57.9649915,189.867871 L57.9649915,159.51214 C57.9649915,159.51214 56.8001363,123.302089 93.5968379,123.302089 L154.95878,123.302089 C154.95878,123.302089 189.434218,123.859386 189.434218,89.9830604 L189.434218,33.9695088 C189.434218,33.9695041 194.668541,0.0722755491 126.915866,0.0722755491 L126.915866,0.0722755491 L126.915866,0.0722755491 Z M92.8018069,19.6589497 C98.9572068,19.6589452 103.932242,24.6339846 103.932242,30.7893845 C103.932246,36.9447844 98.9572068,41.9198193 92.8018069,41.9198193 C86.646407,41.9198239 81.6713721,36.9447844 81.6713721,30.7893845 C81.6713674,24.6339846 86.646407,19.6589497 92.8018069,19.6589497 L92.8018069,19.6589497 L92.8018069,19.6589497 Z"
                          fill="url(#linearGradient-1)"
                        ></path>
                        <path
                          d="M128.757101,254.126271 C193.589403,254.126271 189.540839,226.011081 189.540839,226.011081 L189.468564,196.884035 L127.600692,196.884035 L127.600692,188.138693 L214.042251,188.138693 C214.042251,188.138693 255.528417,192.843589 255.528417,127.427208 C255.52844,62.0108566 219.318366,64.3306589 219.318366,64.3306589 L197.707976,64.3306589 L197.707976,94.6863832 C197.707976,94.6863832 198.87285,130.896434 162.07613,130.896434 L100.714182,130.896434 C100.714182,130.896434 66.238745,130.339138 66.238745,164.215486 L66.238745,220.229038 C66.238745,220.229038 61.0044225,254.126271 128.757101,254.126271 L128.757101,254.126271 L128.757101,254.126271 Z M162.87116,234.539597 C156.715759,234.539597 151.740726,229.564564 151.740726,223.409162 C151.740726,217.253759 156.715759,212.278727 162.87116,212.278727 C169.026563,212.278727 174.001595,217.253759 174.001595,223.409162 C174.001618,229.564564 169.026563,234.539597 162.87116,234.539597 L162.87116,234.539597 L162.87116,234.539597 Z"
                          fill="url(#linearGradient-2)"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      파이썬 활용편: 디스코드 봇 만들기
                    </div>
                    <div className="text-gray-600">
                      배운 내용들을 토대로, 파이썬으로 작성된 채팅 봇을 제작할
                      예정입니다
                      <br />
                      (개인별 프로젝트)
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      width="256px"
                      height="255px"
                      viewBox="0 0 256 255"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                    >
                      <defs>
                        <linearGradient
                          x1="12.9593594%"
                          y1="12.0393928%"
                          x2="79.6388325%"
                          y2="78.2008538%"
                          id="linearGradient-1"
                        >
                          <stop stopColor="#387EB8" offset="0%"></stop>
                          <stop stopColor="#366994" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient
                          x1="19.127525%"
                          y1="20.5791813%"
                          x2="90.7415328%"
                          y2="88.4290372%"
                          id="linearGradient-2"
                        >
                          <stop stopColor="#FFE052" offset="0%"></stop>
                          <stop stopColor="#FFC331" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <g>
                        <path
                          d="M126.915866,0.0722755491 C62.0835831,0.0722801733 66.1321288,28.1874648 66.1321288,28.1874648 L66.2044043,57.3145115 L128.072276,57.3145115 L128.072276,66.0598532 L41.6307171,66.0598532 C41.6307171,66.0598532 0.144551098,61.3549438 0.144551098,126.771315 C0.144546474,192.187673 36.3546019,189.867871 36.3546019,189.867871 L57.9649915,189.867871 L57.9649915,159.51214 C57.9649915,159.51214 56.8001363,123.302089 93.5968379,123.302089 L154.95878,123.302089 C154.95878,123.302089 189.434218,123.859386 189.434218,89.9830604 L189.434218,33.9695088 C189.434218,33.9695041 194.668541,0.0722755491 126.915866,0.0722755491 L126.915866,0.0722755491 L126.915866,0.0722755491 Z M92.8018069,19.6589497 C98.9572068,19.6589452 103.932242,24.6339846 103.932242,30.7893845 C103.932246,36.9447844 98.9572068,41.9198193 92.8018069,41.9198193 C86.646407,41.9198239 81.6713721,36.9447844 81.6713721,30.7893845 C81.6713674,24.6339846 86.646407,19.6589497 92.8018069,19.6589497 L92.8018069,19.6589497 L92.8018069,19.6589497 Z"
                          fill="url(#linearGradient-1)"
                        ></path>
                        <path
                          d="M128.757101,254.126271 C193.589403,254.126271 189.540839,226.011081 189.540839,226.011081 L189.468564,196.884035 L127.600692,196.884035 L127.600692,188.138693 L214.042251,188.138693 C214.042251,188.138693 255.528417,192.843589 255.528417,127.427208 C255.52844,62.0108566 219.318366,64.3306589 219.318366,64.3306589 L197.707976,64.3306589 L197.707976,94.6863832 C197.707976,94.6863832 198.87285,130.896434 162.07613,130.896434 L100.714182,130.896434 C100.714182,130.896434 66.238745,130.339138 66.238745,164.215486 L66.238745,220.229038 C66.238745,220.229038 61.0044225,254.126271 128.757101,254.126271 L128.757101,254.126271 L128.757101,254.126271 Z M162.87116,234.539597 C156.715759,234.539597 151.740726,229.564564 151.740726,223.409162 C151.740726,217.253759 156.715759,212.278727 162.87116,212.278727 C169.026563,212.278727 174.001595,217.253759 174.001595,223.409162 C174.001618,229.564564 169.026563,234.539597 162.87116,234.539597 L162.87116,234.539597 L162.87116,234.539597 Z"
                          fill="url(#linearGradient-2)"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      자기 소개 (포트폴리오) 웹사이트 만들기
                    </div>
                    <div className="text-gray-600">
                      나만의 포트폴리오 웹페이지를 만들어봅니다.
                      <br />
                      순수 HTML, CSS, JS를 배우며, 웹에 대한 개념을 배울 수
                      있습니다.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 2000 2000"
                      enableBackground="new 0 0 2000 2000"
                    >
                      <g></g>
                      <g>
                        <g>
                          <polygon
                            fill="#E34E26"
                            points="352.732,1718.4 208.627,101.984 1791.373,101.984 1647.093,1718.528 999.615,1898.016 		"
                          />
                          <polygon
                            fill="#EF662A"
                            points="1000,234.108 1000,1760.716 1523.565,1615.585 1646.918,234.108 		"
                          />
                          <polygon
                            fill="#FFFFFF"
                            points="503.468,432.378 556.906,1031.897 1244.048,1031.897 1220.988,1289.041 999.744,1348.857 
                            778.919,1289.128 764.155,1124.017 565.155,1124.017 593.611,1442.302 999.697,1555.086 1406.296,1442.302 1460.806,833.669 
                            738.229,833.669 720.086,630.648 1478.168,630.648 1478.773,630.648 1496.532,432.378 		"
                          />
                          <g>
                            <polygon
                              fill="#EBEBEB"
                              points="1000,432.378 503.468,432.378 556.906,1031.897 1000,1031.897 1000,833.669 738.229,833.669 
                              720.086,630.648 1000,630.648 			"
                            />
                            <polygon
                              fill="#EBEBEB"
                              points="1000,1348.771 999.744,1348.857 778.919,1289.128 764.155,1124.017 565.155,1124.017 
                              593.611,1442.302 999.697,1555.086 1000,1555.001 			"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded "
                      src={courseImages[0]}
                      width="500"
                      height="462"
                      alt="Activities"
                    />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={courseImages[1]}
                      width="500"
                      height="462"
                      alt="Activities"
                    />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={courseImages[2]}
                      width="500"
                      height="462"
                      alt="Activities"
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activities;
