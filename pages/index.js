import Head from "next/head";
import Activities from "../components/Activities";
import Ad from "../components/Ad";
import Header from "../components/header";

import Hero from "../components/Hero";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>BeatCoding 비트코딩</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header title="비트코딩" />
      <Hero />
      <Intro />
      <Activities />
      <Ad />
    </div>
  );
}
