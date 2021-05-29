import React, { useEffect } from "react";
import "../styles/global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;