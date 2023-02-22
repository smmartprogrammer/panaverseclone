// import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import SmallCards from "../Components/SmallCards";
import MediumCard from "../Components/MediumCard";
import LargeCard from "../Components/LargeCard";
import Footer from "../Components/Footer";
import web333 from "/public/web333.gif";


export default function Home({ exploreData, cardsData }){
  return (
    <div className="">
      <Head>
        <title>Panaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCards
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Apply for a Course</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -mt-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={img} />
            ))}
          </div>
        </section>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
<Image src={web333} layout="fill" objectFit="cover" />
</div>

        {/* <LargeCard

// img="https://links.papareact.com/4cj"
//          title="The Greatest Outdoors"
//           description="wishlists curated by Airbnb."
//           buttonText="Get Inspired"
        />  */}
      </main>
      <Footer />
    </div>
  );
}

// type exploreData= any

// type exploreData= {
// img?: any;
//   distance: "string";
//   location: "string";
// }

async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
