'use client'
import React from 'react'
import { IoLocation } from "react-icons/io5";
import { BiCurrentLocation } from "react-icons/bi";
import Iframe from 'react-iframe';
import { Drawer } from 'vaul';





export default function page() {
  return (
  

<nav className="bg-white w-screen ">
  <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="h" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/logo.png" className="h-8" alt="Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap ">CargoSwift</span>
  </a>
  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
      </button>
      {/* <!-- Dropdown menu --> */}
     

  </div>

  </div>
  <div className='mt-10 flex mx-5 rounded-xl text-xl text-gray-700 border  '>
<div className='mx-2 my-1 '> <IoLocation /> </div>
    <h1 className='rounded-xl'>Tokyo </h1>
</div>

<div className='mt-2 flex mx-5 rounded-xl text-xl text-gray-700  '>
<div className='mx-2 my-1 text-blue-400'> <BiCurrentLocation></BiCurrentLocation> </div>
<h1 className=' text-blue-400 '> Current Location </h1>
</div>

<div className='my-10 mx-4'>
<Iframe width="100%" height="500"  url="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=+(tokyo)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></Iframe>
</div>




<div>
<Drawer.Root>

      <Drawer.Trigger asChild>  
        <div className='bg-black text-center mb-20 p-5 text-white mx-4 rounded-md focus-none'>Next</div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4  mb-16 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 " />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                Select Weight in KG
              </Drawer.Title>
              <div>
              <div className="flex flex-row h-10 w-1/2 rounded-lg mx-auto relative bg-transparent mt-1">
    <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
      <span className="m-auto text-2xl font-thin">−</span>
    </button>
    <input type="number" className="outline-none focus:outline-none text-center w-1/2 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="550"></input>
  <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
    <span className="m-auto text-2xl font-thin">+</span>
  </button>
</div>
<a href='/onboard2'>
<div className='bg-black   rounded-md p-3 m-3 text-md text-white'><h1 className='text-center'>Proceed</h1></div>
</a>

</div>


            </div>
          </div>
       
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>

    </div>

<div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 ">
    <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <button type="button" className="inline-flex flex-col items-center justify-center px-5  ">
            <svg className="w-5 h-5 mb-2 text-black  group-hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            <span className="text-sm text-gray-500 group-hover:text-black">Home</span>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5  ">
            <svg className="w-5 h-5 mb-2 text-gray-500 group-hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"/>
                <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"/>
            </svg>
            <span className="text-sm text-gray-500 group-hover:text-black">Wallet</span>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5  ">
            <svg className="w-5 h-5 mb-2 text-gray-500 group-hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
            </svg>
            <span className="text-sm text-gray-500 group-hover:text-black">Settings</span>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5  ">
            <svg className="w-5 h-5 mb-2 text-gray-500 group-hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
            <span className="text-sm text-gray-500 group-hover:text-black">Profile</span>
        </button>
    </div>
</div>


</nav>

  )
}
