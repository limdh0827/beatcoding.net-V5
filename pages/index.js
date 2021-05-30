import Head from "next/head";
import Activities from "../components/Activities";
import Ad from "../components/Ad";

import Hero from "../components/Hero";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>BeatCoding 비트코딩</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Hero />
      <Intro />
      <Activities />
      <Ad />
    </div>
  );
}
