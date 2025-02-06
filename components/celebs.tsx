"use client";
import Image from "next/image";
import Seperator from "./seprator";

export default function Celebs() {
  const celbImage = [
    "/assets/images/celb/celb_1.png",
    "/assets/images/celb/celb_2.png",
    "/assets/images/celb/celb_3.png",
    "/assets/images/celb/celb_4.png",
    "/assets/images/celb/celb_5.png",
    "/assets/images/celb/celb_6.png",
    "/assets/images/celb/celb_7.png",
  ];

  return (
    <div className="w-full mx-auto max-w-[1200px] mb-[120px] flex flex-col items-center justify-center gap-10 px-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-text text-[48px] leading-[5.5rem] text-center">
          Celebs You Love, Love Us
        </h2>
        <Seperator />
      </div>
      <ul className="w-full grid grid-rows-2 gap-4">
        <div className="grid grid-cols-4 gap-4">
          {celbImage.slice(0, 4).map((item, index) => (
            <div key={index} className="relative w-full rounded-[8px] h-[310px] hover:scale-90 cursor-pointer transition-all duration-500">
              <Image
                src={item}
                alt={`celeb-${index + 1}`}
                fill
                className="object-cover rounded-[8px]"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {celbImage.slice(4).map((item, index) => (
            <div key={index + 4} className="relative w-full rounded-[8px] h-[310px] hover:scale-90 cursor-pointer transition-all duration-500">
              <Image
                src={item}
                alt={`celeb-${index + 5}`}
                fill
                className="object-cover rounded-[8px]"
              />
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}
