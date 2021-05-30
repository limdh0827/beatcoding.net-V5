import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = ({ title, isClass }) => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <>
      <header
        className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
          !top && "bg-white blur shadow-lg"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="flex-shrink-0 mr-4">
              {/* Logo */}

              <Link href={isClass ? "/classroom" : "/"}>
                <a className="block" aria-label="Cruip">
                  <div className="transform hover:scale-105 transition duration-250 ease-in-out flex flex-row justify-center items-center space-x-3.5 ">
                    <svg
                      className="h-12 w-12"
                      viewBox="0 0 480 480"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M240 480C372.548 480 480 372.548 480 240C480 107.452 372.548 0 240 0C107.452 0 0 107.452 0 240C0 372.548 107.452 480 240 480ZM240 450C355.98 450 450 355.98 450 240C450 124.02 355.98 30 240 30C124.02 30 30 124.02 30 240C30 355.98 124.02 450 240 450Z"
                        fill="#F7931A"
                      />
                      <path
                        d="M211.008 363.333C172.918 353.127 146.682 334.743 132.3 308.183C118.143 281.682 116.288 248.936 126.736 209.945C131.93 190.562 139.592 174.136 149.724 160.666C159.916 146.97 171.697 136.358 185.068 128.829C198.499 121.074 213.265 116.455 229.364 114.971C245.463 113.487 262.077 115.04 279.207 119.63C289.123 122.287 297.927 125.492 305.618 129.243C313.37 132.77 320.016 136.363 325.558 140.022C331.16 143.455 335.718 146.73 339.232 149.845C342.745 152.961 345.252 155.323 346.753 156.933L320.126 195.454C313.94 189.69 306.364 184.158 297.398 178.856C288.656 173.615 278.2 169.364 266.029 166.103C257.916 163.929 249.552 163.137 240.939 163.728C232.551 164.38 224.5 166.933 216.784 171.387C209.354 175.677 202.567 182.072 196.425 190.572C190.282 199.072 185.399 210.083 181.776 223.606C178.877 234.424 177.286 244.869 177.004 254.938C177.007 264.843 178.694 273.871 182.067 282.022C185.664 290.233 191.201 297.514 198.679 303.866C206.217 309.992 216.071 314.686 228.242 317.947C235.905 320 242.9 321.391 249.227 322.12C255.554 322.849 261.235 323.285 266.27 323.426C271.365 323.342 275.927 322.994 279.956 322.383C283.985 321.771 287.645 321.182 290.938 320.615L294.151 366.769C285.506 369.284 273.939 370.533 259.449 370.515C244.96 370.498 228.813 368.104 211.008 363.333Z"
                        fill="#F7931A"
                      />
                      <rect
                        x="233.467"
                        y="72.33"
                        width="29"
                        height="61"
                        transform="rotate(15 233.467 72.33)"
                        fill="#F7931A"
                      />
                      <rect
                        x="165.397"
                        y="326.368"
                        width="29"
                        height="61"
                        transform="rotate(15 165.397 326.368)"
                        fill="#F7931A"
                      />
                      <rect
                        x="286.593"
                        y="86.565"
                        width="29"
                        height="61"
                        transform="rotate(15 286.593 86.565)"
                        fill="#F7931A"
                      />
                      <rect
                        x="218.523"
                        y="340.604"
                        width="29"
                        height="61"
                        transform="rotate(15 218.523 340.604)"
                        fill="#F7931A"
                      />
                    </svg>
                    {isClass ? (
                      <span className="font-sans font-bold text-xl md:text-2xl tracking-wide ">
                        Classroom
                      </span>
                    ) : (
                      <span className="font-sans font-bold text-xl md:text-2xl tracking-wide ">
                        비트코딩
                      </span>
                    )}
                  </div>
                </a>
              </Link>
            </div>

            {/* Site navigation */}
            <nav className="flex flex-grow">
              <ul className="flex flex-grow justify-end flex-wrap items-center text-base md:text-lg font-semibold">
                {/* <li>
                <Link href="/signin">
                  <a className="text-gray-600 hover:text-gray-900 hover:underline transform hover:scale-105 px-5 py-3 flex items-center transition duration-250 ease-in-out">
                    About
                  </a>
                </Link>
              </li> */}
                <li>
                  {isClass ? (
                    <Link href="/">
                      <a className="text-gray-600 hover:text-gray-900 hover:underline transform hover:scale-105 px-5 py-3 flex items-center transition duration-250 ease-in-out">
                        교실 나가기 &rarr;
                      </a>
                    </Link>
                  ) : (
                    <Link href="/classroom">
                      <a className="text-gray-600 hover:text-gray-900 hover:underline transform hover:scale-105 px-5 py-3 flex items-center transition duration-250 ease-in-out">
                        교실 입장하기 &rarr;
                      </a>
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
