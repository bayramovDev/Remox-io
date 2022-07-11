import React, { useRef } from 'react';
import { useEffect } from 'react';
import TextLoop from "react-text-loop";

export default function Header() {


  return <div className="w-full h-full">

    <div className="text-center flex flex-col items-center space-y-12 tracking-wider h-[250px] sm:h-[350px] lg:h-[450px] justify-center w-full">
      <div className="text-white font-semibold text-4xl sm:text-5xl w-full">



        <span>Treasury Management, <br /></span>
        <div className="pt-6">Simplified for  <TextLoop noWrap={false} interval={1000} className={'!w-[13.5rem] '}>
            <span className="text-primary">DAOs</span>
            <span className="text-primary">Companies </span>
            <span className="text-primary">Individuals</span>

          </TextLoop>{" "} </div>

      </div>

      <h2 className="text-white leading-5 text-sm px-12 sm:px-1 text-left md:text-center tracking-wider break-words md:px-0">
        Connect your organization wallets, onboard your contributors, automate your payroll, <br className="hidden sm:block" />
        manage your organization expenses, do budgeting & reporting and make investments <br className="hidden sm:block" />
        in DeFi while mitigating risks with dynamic risk assessments.
      </h2>
      <div className="grid grid-cols-2 gap-10 w-[55%] lg:w-[35%]  ">
        <div className=" w-full  text-sm lg:text-base flex items-center lg:self-center justify-center px-1 py-2  rounded-md  bg-primary border-primary text-white hover:bg-[#ff5413] dark:hover:bg-[#ff5413] hover:border-[#ff5413]   hover:text-white transition-all duration-400 cursor-pointer">Connect Wallet</div>
        <div className="text-sm lg:text-base  bg-main  text-primary border-primary hover:bg-[#f0f0f0] dark:bg-darkSecond dark:hover:bg-[#131313] hover:text-primary hover:transition-all transition-all duration-400  flex items-center lg:self-center justify-center px-1 py-2  w-full rounded-md border cursor-pointer">Schedule a Demo</div>
      </div>
    </div>

  </div>
}
