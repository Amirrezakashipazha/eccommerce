"use client"
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import Card from "./card";
import Seperator from "./seprator";
import SvgIcon from "./svgIcon";

import {
    Button
} from "@material-tailwind/react";

export default function Blog() {

    const blogValue = [

        {
            title: '8 Best Low Maintenance Plants For a Busy Home',
            image: "/assets/images/blog/blog_1.png"
        },
        {
            title: '8 Best Low Maintenance Plants For a Busy Home',
            image: "/assets/images/blog/blog_1.png"
        },
    ]
    return (
        <div className="w-full mx-auto max-w-[1200px] px-10 mb-[120px]">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-text text-[48px] leading-[5.5rem] text-center">Blogs</h2>
                <Seperator />
            </div>
            <div className="w-full flex justify-center items-center gap-10">
                {blogValue.map((item, index) => (
                    <div key={index} className="relative w-full h-[286px] rounded-[24px] bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(${item.image})` }}>
                        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
                            <p className="text-5xl text-center pb-11 text-white">{item.title}</p>
                            <Button className="h-20 w-full text-center font-medium text-3xl bg-primary-1">
                                Read
                            </Button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
