import React from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { BiWorld } from 'react-icons/bi'
import Image from 'next/image'
import image from '@/(main)/Assets/sagrika.jpeg'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between bg-white items-center px-7 py-3 fixed top-0 left-0 w-full z-50'>
        <div className='flex items-center'>
          <HiMenuAlt1 size={25} className='cursor-pointer' />
          <BiWorld size={35} className='ml-5 p-2 rounded-full cursor-pointer bg-gray-200' />
        </div>
        <div className='flex items-center cursor-pointer'>
          <Image src={image} alt='Image' className='w-[3vw] rounded-full mr-3' />
          <div>
            <p>Sagrika Rastogi</p>
            <p className='-mt-0.5 text-sm text-gray-400'>Therapist</p>
          </div>
        </div>
      </div>
      <div className='py-[2.5vw]'></div>
    </>
  )
}

export default Navbar