import Head from "next/head";
import Activities from "../components/Activities";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>BeatCoding 비트코딩</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Intro />
      <Activities />
      <Footer />
    </div>
  );
}
