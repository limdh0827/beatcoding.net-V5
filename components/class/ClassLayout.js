import Link from "next/link";
import Moment from "react-moment";
export default function ClassLayout({ title, isRoot, isToday, children }) {
  return (
    <>
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-start">
            {isRoot ? (
              <h1 className="pt-28 pb-10 text-5xl md:text-6xl font-black">
                {title}
                {"  "}
                {/* <Moment
                  className="text-lg font-light"
                  format="오늘은 MM월 DD일"
                >
                  {new Date()}
                </Moment> */}
              </h1>
            ) : (
              <h1 className="pt-28 pb-10 text-5xl md:text-6xl font-black">
                <Link href="/classroom">
                  {isToday ? (
                    <button className="mr-5 my-auto bg-btc_start hover:bg-btc_end text-white rounded-full transform hover:scale-110 transition duration-250 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button className="mr-5 bg-blue-500 hover:bg-btc_end text-white rounded-full transform hover:scale-110 transition duration-250 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  )}
                </Link>
                {title}
              </h1>
            )}

            <main className="w-full">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
