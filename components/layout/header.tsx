'use client'
import Image from '@/node_modules/next/image'
import React from 'react'
import SvgIcon from "../svgIcon"
import { Button, Input } from "@material-tailwind/react";
import { MenuCustomList } from './menu';
import Link from '@/node_modules/next/link';
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
  return (

    <header className='w-full'>
      <div className="w-full bg-primary-3 h-16">
        <div className="max-w-[1200px] w-full px-4 mx-auto flex items-center justify-between h-full">

          <div className="w-[104px]"></div>
          <div className="w-full">
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
      <div className="w-full h-[80px] bg-white">
        <div className="max-w-[1200px] w-full px-4 mx-auto flex items-center justify-between h-full">
          <Image src={'/assets/images/PAP_Logo.png'} width={133} height={51} alt="logo" />
          <div className="">
            <ul className='flex w-full items-center justify-between text-xl'>
              {items.map((item, index) => {
                if (item.type === "link") {
                  return <li key={index} className='w-[75px] text-primary-1'> <Link href="#">{item.name}</Link></li>
                }
                return (
                  <li key={index}>
                    <MenuCustomList menuItems={item.child || []} title={item.name} />
                  </li>
                )
              }
              )}
            </ul>
          </div>
          <div className="w-[203px] h-16">
            <Input label="Search" className="h-full py-6 pr-6 text-xl" />
          </div>
        </div>
      </div>

      <div className="relative w-full h-[320px]">
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