import React, { useRef } from 'react';
import { useEffect } from 'react';
import TextLoop from "react-text-loop";

export default function Header() {


  return <div className="w-full h-full">

    <div className="text-center flex flex-col items-center px-8  sm:px-0   space-y-12 pt-24 tracking-wider h-[250px] sm:h-[350px] lg:h-[450px] justify-center w-full">
      <h1 className="text-white font-semibold text-3xl sm:text-5xl w-full">

        <span>Simplified  and Collaborative<br /></span>
        <div className="sm:pt-6">
          Treasury Management for <TextLoop noWrap={false} interval={1000} className={'!w-[10.5rem] sm:!w-[13.5rem] '}>
            <span className="text-primary">DAOs</span>
            <span className="text-primary">Companies </span>
            <span className="text-primary">Individuals</span>
          </TextLoop>{" "} </div>
      </h1>

      <h2 className="text-[#E5E5E5]  leading-6 px-3  sm:px-1 text-left md:text-center tracking-wider break-words font-semibold md:px-0">
        Connect your organization wallets, onboard your contributors, automate your payroll, <br className="hidden sm:block" />
        manage your organization expenses, do budgeting & reporting and make investments <br className="hidden sm:block" />
        in DeFi while mitigating risks with dynamic risk assessments.
      </h2>
      <div className="grid grid-cols-2 gap-20 w-[72%] lg:w-[33%]  ">
        <div className="w-[100px] sm:w-full  text-sm lg:text-lg  font-semibold  flex items-center lg:self-center justify-center sm:px-1 h-[25px] sm:h-full  sm:py-2  rounded-md  bg-primary border-primary text-white hover:bg-[#ff5413] dark:hover:bg-[#ff5413] hover:border-[#ff5413]   hover:text-white transition-all duration-400 cursor-pointer">Coming Soon</div>
       <a href="https://demo.remox.io/" target="_blank"> <div className="text-sm lg:text-lg  font-semibold  bg-main  text-primary border-primary hover:bg-[#f0f0f0] dark:bg-darkSecond dark:hover:bg-[#131313] hover:text-primary hover:transition-all transition-all duration-400  flex items-center lg:self-center justify-center sm:px-1 h-[25px] sm:h-full  sm:py-2  w-[100px] sm:w-full  rounded-md border cursor-pointer"  >View Demo</div></a>
      </div>
    </div>

  </div>
}
