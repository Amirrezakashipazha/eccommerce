import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import SvgIcon from "./svgIcon";

export default function Category() {

    const categoryValue = [
        {
            title: "gifting",
            image: "/assets/images/category/cat_1.png"
        }, {
            title: "seeds",
            image: "/assets/images/category/cat_2.png"
        }, {
            title: "Succulents",
            image: "/assets/images/category/cat_3.png"
        }, {
            title: "CREEPERS",
            image: "/assets/images/category/cat_4.png"
        }, {
            title: "CACTUS",
            image: "/assets/images/category/cat_5.png"
        },{
            title: "BONSAI",
            image: "/assets/images/category/cat_6.png"
        },
    ]
    return (
        <div className="w-full mx-auto max-w-[1200px]  px-10 mt-14 mb-[120px]">
            <Link className="text-primary-1 flex gap-1 items-center text-2xl justify-end mb-9" href={"#"}
            >
                See all
                <SvgIcon src="/assets/images/more.svg" />
            </Link>
            <ul className="w-full flex flex-row-reverse justify-between items-center">
                {categoryValue.map((item, index) => (
                    <li key={index} className="flex flex-col items-center justify-center gap-10 hover:scale-110 cursor-pointer transition-all">
                        <Image src={item.image} width={180} height={180} alt={item.title} />
                        <p className="text-2xl font-bold tracking-[3px]">{item.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
