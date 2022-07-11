import React from 'react';

export default function Sponsor() {
    return <div className=" py-5 bg-main relative z-[99]">
        <div className="min-h-[120px] sm:min-h-[240px]  py-4 flex flex-col space-y-10 px-12 lg:px-16">
            <div className="text-white text-center font-semibold text-3xl tracking-wider h-[28px]">Trusted <span className="text-primary">by</span></div>
            <div className="flex flex-wrap lg:flex-row gap-14 lg:gap-8 items-center justify-center">
                <div className="flex  gap-2  justify-center items-center">
                    <img src="/moola_icon.png" className=" w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] lg:h-[70px]  lg:w-[70px] mt-2"/>
                    <img src="/moola_text.png" className=" h-[30px] w-[80px] sm:h-[50px] sm:w-[120px] lg:h-[70px] lg:w-[170px]"/>
                </div>
                    <img src="/ariswap.png" className=" w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] lg:h-[70px]  lg:w-[70px] hidden sm:block" />
                <div className="flex gap-5 items-center justify-center text-3xl lg:text-5xl text-white ">
                    <img src="/ubeswap2.png" className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] lg:h-[70px] lg:w-[70px]" /> <span>Ubeswap</span>
                </div>              
                    <img src="/nomspace.png" className=" w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] lg:h-[70px]  lg:w-[70px]"/>             
                    <img src="/poofcash.png" className="h-[50px] w-[90px] sm:h-[75px] sm:w-[135px] lg:h-[100px] lg:w-[180px]"/> 
                    <img src="/ariswap.png" className=" w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] lg:h-[70px] lg:w-[70px] block sm:hidden" />
            </div>
        </div>

    </div>
}
