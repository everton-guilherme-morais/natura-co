import Banner from "@/components/sections/Banner";
import ListProducts from "@/components/sections/ListProducts";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx:auto">
        <Banner />
        <ListProducts />
      </div>
    </section>
  );
}