import Image from "next/image";
import Hero from "./index_components/Hero";
import Services from "./index_components/Services";
import FeaturedProducts from "./index_components/FeaturedProducts";
import Patners from "./index_components/Patners";
import CallToAction from "./index_components/CallToAction";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <Patners />
      <CallToAction />
      {/* <FeaturedProducts /> */}
    </main>
  );
}
