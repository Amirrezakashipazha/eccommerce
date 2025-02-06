"use client"
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import Card from "./card";
import Seperator from "./seprator";
import SvgIcon from "./svgIcon";

import {
    Button
} from "@material-tailwind/react";
export default function LandscapeGardening() {

    return (
        <div className="w-full mx-auto max-w-[1200px] px-10 mb-[120px] gap-10 flex">
            <div className=" w-full">
                <h2 className="text-7xl text-text">Landscape Gardening</h2>
                <Seperator />
                <p className="text-text text-3xl leading-[28px]">
                    Whether it is growing your own food or setting
                    up your roof-top garden, we provide the highest
                    quality landscaping services, contributing to a greener world and substantial living!
                </p>
                <p className="text-text text-3xl my-8">
                    Schedule your service appointment today!
                </p>
                <p className="text-error text-xl">*Service only available in Telangana and AndhraPradesh.</p>
                <Button className="h-20 font-medium text-xl px-24 bg-primary-1 mt-14">
                    Book Now!
                </Button>
            </div>
            <div className="relative h-[440px] w-full">
                <Image
                    src="/assets/images/image_Landscape_Gardening.png"
                    alt="logo"
                    fill
                    className="object-cover rounded-[28px]"
                />
            </div>
        </div>
    );
}
