import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import Card from "./card";
import Seperator from "./seprator";
import SvgIcon from "./svgIcon";

export default function Trending() {

    const trendingValue = [
        {
            caption:
                <div className="flex flex-col gap-2 items-start text-2xl">
                    <p className="font-semibold">Jade Terrarium</p>
                    <p>$ 350</p>
                </div>
            ,
            image: "/assets/images/trending/trending_1.png"
        },
        {
            caption:
                <div className="flex flex-col gap-2 items-start text-2xl">
                    <p className="font-semibold">Ficus Benjamina</p>
                    <p>$ 350</p>
                </div>
            ,
            image: "/assets/images/trending/trending_2.png"
        },
        {
            caption:
                <div className="flex flex-col gap-2 items-start text-2xl">
                    <p className="font-semibold">Syngorium Plant</p>
                    <p>$ 350</p>
                </div>
            ,
            image: "/assets/images/trending/trending_3.png"
        },
        {
            caption:
                <div className="flex flex-col gap-2 items-start text-2xl">
                    <p className="font-semibold">Cactus Peruvianus</p>
                    <p>$ 350</p>
                </div>
            ,
            image: "/assets/images/trending/trending_4.png"
        },
        {
            caption:
                <div className="flex flex-col gap-2 items-start text-2xl">
                    <p className="font-semibold">Chlorophytum Lemon</p>
                    <p>$ 350</p>
                </div>
            ,
            image: "/assets/images/trending/trending_5.png"
        },
        {
            caption:
                <div className="flex flex-col gap-2 items-start text-2xl">
                    <p className="font-semibold">Aloe Rauhii</p>
                    <p>$ 350</p>
                </div>
            ,
            image: "/assets/images/trending/trending_6.png"
        },
        {
            caption:
                <div className="flex flex-col gap-2 items-start text-2xl">
                    <p className="font-semibold">Areca Palm</p>
                    <p>$ 350</p>
                </div>
            ,
            image: "/assets/images/trending/trending_7.png"
        },
        {
            caption:
                <div className="flex flex-col gap-2 items-start text-2xl">
                    <p className="font-semibold">Sansevieria Black</p>
                    <p>$ 350</p>
                </div>
            ,
            image: "/assets/images/trending/trending_8.png"
        },
    ]
    return (
        <div className="w-full mx-auto max-w-[1200px] px-10 mb-[120px]">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-text text-[48px] leading-[5.5rem] text-center">Trending Plants</h2>
                <Seperator />
            </div>
            <ul className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-10">
                {trendingValue.map((item, index) => (
                    <div className="col-span-1" key={index}>
                        <Card image={item.image} text={"Buy"} caption={item.caption}/>
                    </div>
                ))}
            </ul>
        </div>
    );
}
