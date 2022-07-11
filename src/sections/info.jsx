import React from 'react';

export default function Info() {



  return <div className="bg-[url('../public/background_4.png')] px-20 xl:px-40  py-24 flex flex-col sm:flex-row gap-10 justify-center items-center">
     <div className="rounded-md border border-primary bg-main hover:bg-sec transition-all hover:transition-all flex flex-col items-start gap-8 p-8 px-10 max-w-[250px] sm:max-w-[375px]">
      <div className="flex items-center justify-center gap-4">
        <div className="rounded-full  w-14 h-14"><img src="/patrick.png" alt="" /></div>
        <div className="flex flex-col ">
          <span className="text-2xl text-[#E5E5E5] ">Patrick Baron</span>
          <span className="text-[.7rem] text-[#E5E5E5] ">Founder at Moola Market</span>
        </div>
      </div>
      <div className="text-[.75rem] text-[#E5E5E5] tracking-wider">
        Remox is a treasury management tool designed 
        for crypto-native organizations to run payroll,
        manage their full-time and part-time contributors,
        do budgeting and reporting.
      </div>
    </div>
    <div className="rounded-md border border-primary bg-main hover:bg-sec transition-all hover:transition-all flex flex-col items-start gap-8 p-8 px-10 max-w-[250px] sm:max-w-[375px]">
      <div className="flex items-center justify-center gap-4">
        <div className="rounded-full  w-14 h-14"><img src="/evan.png" alt="" /></div>
        <div className="flex flex-col ">
          <span className="text-2xl text-[#E5E5E5] ">Evan Kereiakes</span>
          <span className="text-[.7rem] text-[#E5E5E5] ">Business Lead at Ubeswap</span>
        </div>
      </div>
      <div className="text-[.75rem] text-[#E5E5E5] tracking-wider">
        Remox is a treasury management tool designed
        for crypto-native organizations to run payroll,
        manage their full-time and part-time contributors, 
        do budgeting and reporting.
      </div>
    </div>
  </div>
}

// const Card = ({ title, content, className }) => {

//   return <div className="card bg-sec min-h-[250px] px-1 justify-center items-center rounded-xl">
//     <div className="py-5 grid grid-rows-2 gap-y-8 ">
//       <div className="text-2xl text-center h-[80px] px-1">
//         {title}
//       </div>
//       <div className={`text-base ${className} text-white text-center px-8`}>
//         {content}
//       </div>
//     </div>
//   </div>
// }