'use client'
import Image from '@/node_modules/next/image'
import React, { useState } from 'react'
import SvgIcon from "../svgIcon"
import { Input } from "@material-tailwind/react";
import { MenuCustomList } from './menu';
import Link from '@/node_modules/next/link';
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {

  const items: {
    name: string;
    type: "link" | "dropdown",
    child?: string[]
  }[] = [
      {
        name: 'Home',
        type: "link"
      },
      {
        name: 'Plants',
        type: "dropdown",
        child: ["Plants 1", "Plants 2", "Plants 3"]
      },
      {
        name: 'Planters',
        type: "dropdown",
        child: ["Planters 1", "Planters 2", "Planters 3"]
      },
      {
        name: 'Essentials',
        type: "dropdown",
        child: ["Essentials 1", "Essentials 2"]
      },
      {
        name: 'Services',
        type: "dropdown",
        child: ["Services 1", "Services 2", "Services 3", "Services 4"]
      }
    ]

  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false)
  return (

    <header className='w-full'>
      <div className="w-full bg-primary-3 h-16">
        <div className="max-w-[1200px] w-full px-4 mx-auto flex items-center justify-between h-full">

          <div className="w-[104px]"></div>
          <div className="w-full hidden md:block">
            <p className='text-center text-white text-2xl'>
              Use code FIRST50 for a 50% discount on your first order!
            </p>
          </div>
          <div className="w-[104px] flex items-center justify-between">
            <SvgIcon src='/assets/images/account.svg' />
            <SvgIcon src='/assets/images/shopping_cart.svg' />
          </div>
        </div>
      </div>

      <div className="">
        <button className='absolute top-3 left-3' onClick={() => setSideBarOpen(true)}>
          <Bars3Icon
            strokeWidth={2.5}
            className={`h-10 w-10 transition-transform lg:hidden`}
            color="white"
          />
        </button>
        <div className={`w-[300px] h-full lg:w-full lg:h-[80px] py-8 lg:py-0 bg-white absolute top-0 z-10 transition-all transform left-0 ${sideBarOpen ? "translate-x-0" : "translate-x-[-100%] lg:translate-x-0"} lg:relative lg:left-auto`}>
          <div className="max-w-[1200px] w-full px-4 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between h-full gap-4">
            <Image src={'/assets/images/PAP_Logo.png'} width={133} height={51} alt="logo" />
            <div className="">
              <ul className='flex w-full items-center justify-between text-xl flex-col lg:flex-row'>
                {items.map((item, index) => {
                  if (item.type === "link") {
                    return <li key={index} className='w-[75px] text-primary-1'> <Link href="#">{item.name}</Link></li>
                  }
                  return (
                    <li key={index} className="w-full lg:w-auto">
                      <MenuCustomList menuItems={item.child || []} title={item.name} />
                    </li>
                  )
                }
                )}
              </ul>
            </div>
            <div className="w-[203px] h-16">
              <Input label="Search" className="h-full py-6 pr-6 text-xl"
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
                crossOrigin="anonymous" />
            </div>
          </div>
          <button className='absolute top-3 right-3' onClick={() => setSideBarOpen(false)}>
            <XMarkIcon
              strokeWidth={2.5}
              className={`h-10 w-10 transition-transform lg:hidden`}
              color="black"
            />
          </button>
        </div>
      </div>

      <div className="relative w-full h-[120px] sm:h-[220px] lg:h-[320px]">
        <Image
          src="/assets/images/Banner.png"
          alt="logo"
          fill
          className="object-cover"
        />
      </div>

    </header>
  )
}

export default Header