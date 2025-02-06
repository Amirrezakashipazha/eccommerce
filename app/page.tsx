// import Image from "next/image";

import BestSelling from "@/components/bestSelling";
import Category from "@/components/category";
import Trending from "@/components/trending";
import Blog from "@/components/blog"
import HotSale from "@/components/hot_sale";
import LandscapeGardening from "@/components/landscapegardening"
import Celebs from "@/components/celebs"

export default function LangingPage() {
  return (
    <div className="">
     
     <Category/>
     <BestSelling/>
     <Trending/>
     <Blog/>
     <HotSale/>
     <LandscapeGardening/>
     <Celebs/>
    </div>
  );
}
