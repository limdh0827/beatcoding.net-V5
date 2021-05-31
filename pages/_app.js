import React, { useEffect } from "react";
import "../styles/global.css";
import "../styles/markdown.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

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
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
