import { useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Activities from "../components/Activities";
import Ad from "../components/Ad";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

export default function Home() {
  const notify = () =>
    toast.dark("π§βπ» π 2νκΈ°λ μΉ ν©λλ€ π₯", {
      position: "bottom-center",
      pauseOnFocusLoss: false,
      autoClose: 8000,
      className: "bg-black	",
      bodyClassName: "text-white text-lg font-medium",
    });

  useEffect(() => {
    notify();
  });

  return (
    <>
      <Head>
        <title>BeatCoding λΉνΈμ½λ©</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <div className="w-screen">
          <ToastContainer />

          <Header title="λΉνΈμ½λ©" />

          <Hero />
          <Intro />
          <Activities />

          <Ad />
        </div>
      </motion.div>
    </>
  );
}
