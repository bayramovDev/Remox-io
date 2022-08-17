import React from 'react';

export default function Info() {



  return <div className="bg-[url('../public/background_footer.png')] bg-no-repeat bg-cover px-20 xl:px-36  py-24 flex flex-col sm:flex-row gap-14 justify-center items-center">
     <div className="rounded-md border border-primary bg-main hover:bg-sec transition-all hover:transition-all flex flex-col items-start gap-8 p-8 px-10 min-w-[250px] sm:min-w-[545px] sm:min-h-[330px]">
      <div className="flex items-center justify-center gap-4">
        <div className="rounded-full  w-14 h-14"><img src="/patrick.png" alt="" /></div>
        <div className="flex flex-col ">
          <span className="text-3xl font-bold text-[#E5E5E5] ">Patrick Baron</span>
          <span className=" text-[#aaaaaa]">Founder at Moola Market</span>
        </div>
      </div>
      <div className="text-lg text-[#E5E5E5] tracking-wider">
        
        Remox is a treasury management tool designed 
        for crypto-native organizations to run payroll,
        manage their full-time and part-time contributors,
        do budgeting and reporting.
      </div>
    </div>
    <div className="rounded-md border border-primary bg-main hover:bg-sec transition-all hover:transition-all flex flex-col items-start gap-8 p-8 px-10 min-w-[250px] sm:min-w-[545px] sm:min-h-[330px]">
      <div className="flex items-center justify-center gap-4">
        <div className="rounded-full  w-14 h-14"><img src="/evan.png" alt="" /></div>
        <div className="flex flex-col ">
          <span className="text-3xl font-bold text-[#E5E5E5] ">Evan Kereiakes</span>
          <span className=" text-[#aaaaaa]">Business Lead at Ubeswap</span>
        </div>
      </div>
      <div className="text-lg text-[#E5E5E5] tracking-wider">
        Remox is a treasury management tool designed
        for crypto-native organizations to run payroll,
        manage their full-time and part-time contributors, 
        do budgeting and reporting.
      </div>
    </div>
  </div>
}
