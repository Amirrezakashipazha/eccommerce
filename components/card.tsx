"use client"
import Image from "@/node_modules/next/image";

import {
    Button
} from "@material-tailwind/react";
import { JSX } from "react";

export default function Card({ image, text, caption }: { image: string, text: string, caption?: JSX.Element }) {
    return (
        <div className="p-8 rounded-[16px] w-full flex flex-col gap-[16px] bg-white">
            <div className={`relative w-full rounded-[8px] ${caption?"h-[160px]":"h-[320px]"}`}>
                <Image
                    src={image}
                    alt="logo"
                    fill
                    className="object-cover rounded-[8px]"
                />
            </div>
            {caption}
            <Button className="h-20 font-medium text-3xl bg-primary-1">
                {text}
            </Button>

        </div>
    )
}