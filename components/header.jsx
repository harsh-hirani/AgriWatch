
'use client'
import Image from 'next/image'
import "./pages/App.css"
import Link from 'next/link';
import React, { useState } from 'react';
const Header=()=>{
    return(
        <>
        
          

<nav class="bg- border-gray-200 dark:bg-gray-50">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
    <Image
      src="/imgs/logo.png"
      width={50}
      height={50}
      alt="Picture of the author"
    /><span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black ">Agriwatch</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-1 00 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-100 md:dark:bg-gray-50 dark:border-gray-700">
      <li><Link href="/">Home</Link></li>
        <li><Link href="/cropprice">See prices</Link></li>
        <li><Link href="/news">News</Link></li>
        <li><Link href="/help">Help</Link></li>
      </ul>
    </div>
  </div>
</nav>


        </>
    )

}
export default Header;