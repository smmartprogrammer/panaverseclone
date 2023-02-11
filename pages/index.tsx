// import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import SmallCards from "../Components/SmallCards";
import { type } from "os";

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
          {exploreData?.map(({ img, distance, location }) => (
            <SmallCards
              key={img}
              img={img}
              distance={distance}
              location={location}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

// type exploreData= any

async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
    },
  };
}
