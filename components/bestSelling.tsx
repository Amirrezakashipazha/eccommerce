import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import Card from "./card";
import Seperator from "./seprator";
import SvgIcon from "./svgIcon";

export default function BestSelling() {

    const sellingValue = [
        {
            title: "gifting",
            image: "/assets/images/best_selling/best_1.png"
        }, {
            title: "seeds",
            image: "/assets/images/best_selling/best_2.png"
        }, {
            title: "Succulents",
            image: "/assets/images/best_selling/best_3.png"
        }
    ]
    return (
        <div className="w-full mx-auto max-w-[1200px] px-10 mb-[120px]">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-text text-[48px] leading-[5.5rem] text-center">Best Selling</h2>
                <Seperator />
            </div>
            <ul className="w-full flex flex-row-reverse justify-between items-center gap-10">
                {sellingValue.map((item, index) => (
                    // <li key={index} className="flex flex-col items-center justify-center gap-10">
                    //     <Image src={item.image} width={180} height={180} alt={item.title} />
                    //     <p className="text-2xl font-bold tracking-[3px]">{item.title}</p>
                    // </li>
                    <Card key={index} image={item.image} text={"Shop Now"} />
                ))}
            </ul>
        </div>
    );
}
