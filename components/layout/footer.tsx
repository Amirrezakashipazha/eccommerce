import React from 'react'
import Image from '@/node_modules/next/image'
import SvgIcon from "../svgIcon"

const Footer = () => {
  return (
    <div className="w-full bg-primary-2 text-xl text-white px-10">
      <div className='max-w-[1200px] w-full px-4 mx-auto flex items-center justify-between h-full py-16'>
        <ul className='flex flex-cow justify-between items-start w-full'>
          <li>
            <Image src={'/assets/images/PAP_Logo_footer.png'} width={260} height={78} alt="logo" />

          </li>
          <li>
            <ul className='flex flex-col gap-3'>
              <li className='font-bold'>Quick Links</li>
              <li>About Us</li>
              <li>Bulk Order</li>
              <li>Gifts</li>
              <li>Organic Garden</li>
            </ul>
          </li>
          <li>
            <ul className='flex flex-col gap-3'>
              <li className='font-bold'>Legal</li>
              <li>TC</li>
              <li>Privacy Policy</li>
              <li>Returns </li>
              <li>Shipping</li>
              <li>Cancellation</li>
            </ul>
          </li>
          <li>
            <ul className='flex flex-col gap-3'>
              <li className='font-bold'>Support</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </li>
          <li>
            <Image src={'/assets/images/Compant_Badge.png'} width={178} height={160} alt="logo" />

          </li>
          <li>
            <p>© 2021 Plan A Plant
              All Rights Reserved</p>
            <ul className='flex gap-6 mt-24'>
              <li>
                <div className="w-[48px] h-[48px] bg-primary-3 rounded-full flex items-center justify-center">
                  <SvgIcon src={"/assets/images/facebook.svg"}/>
                </div>
              </li>
              <li>
                <div className="w-[48px] h-[48px] bg-primary-3 rounded-full flex items-center justify-center">
                  <SvgIcon src={"/assets/images/twitter.svg"}/>
                </div>
              </li>
              <li>
                <div className="w-[48px] h-[48px] bg-primary-3 rounded-full flex items-center justify-center">
                  <SvgIcon src={"/assets/images/instagram.svg"}/>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Footer