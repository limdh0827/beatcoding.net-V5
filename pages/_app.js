import React, { useEffect } from "react";
import "../styles/global.css";
import "../styles/markdown.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

import Footer from "../components/Footer";

function MyApp({ Component, pageProps, router }) {
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
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
