import Link from "next/link";
import Header from "../header";

export default function Layout({ children }) {
  return (
    <>
      <Header title="Classroom" isClass />
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-start">
            <h1 className="pt-28 pb-10 text-6xl font-black">모든 수업</h1>
            <main className="">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
