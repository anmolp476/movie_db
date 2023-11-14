import Queries from '@/components/Queries'
import React from 'react'
import CreateTables from '@/components/CreateTables'
import CreateViews from '@/components/CreateViews'
import DropTables from '@/components/DropTables'
import DropViews from '@/components/DropViews'
import PopulateTables from '@/components/PopulateTables'
import Image from 'next/image'

const User = () => {
  return (
    <div className="font-mono text-green-500 text-center">
      <div className="text-[65px] p-2 flex flex-row border border-white items-center">
        <div className="p-5">
          <Image 
          src="/logoFinal.png"
          alt="logo"
          width={100}
          height={100}/>
        </div>
        <h1>MovieDB | CPS510 Term Project | User Menu</h1>
        <div className="p-5">
          <Image 
          src="/userLogo.png"
          alt="logo"
          width={100}
          height={100}/>
        </div>
      </div>
      <div className="flex flex-row border-4 border-black p-10 gap-11">
        <div className="text-[35px] flex flex-col gap-3 p-2 justify-start">
          <div className='mt-11 w-full border border-white'>
            <button className=''>Logout</button>
          </div>
        </div>
        <div className="text-[40px] w-full h-[600px] overflow-y-scroll border border-white p-3">
          <div className="border border-white flex flex-row gap-11 p-1">
            <Queries></Queries>
            <button className="hover:bg-green-500 hover:text-white"> | Preset 1 | </button>
            <button className="hover:bg-green-500 hover:text-white"> | Preset 2 | </button>
            <button className="hover:bg-green-500 hover:text-white"> | Preset 3 | </button>
            <button className="hover:bg-green-500 hover:text-white"> | Preset 4 | </button>
          </div>
          <p id="output">
            testing
          </p>
        </div>
      </div>
      <div>
        Developed by Deep Patel and Anmol Panchal, November 2023
      </div>
    </div>
  );
}

export default User