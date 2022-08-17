import React, { useState, useEffect } from 'react';


export default function Sponsor() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    useEffect(() => {
        document.querySelector('body').style.overflowX = "hidden"
    }, [])


    return <div className="w-full py-5 bg-main relative z-[99]">
        <div className="min-h-[175px] sm:min-h-[500px] w-full flex flex-col items-center justify-start gap-10 sm:gap-20 px-12 lg:px-12 2xl:px-0">
            <div className="text-white text-center font-semibold text-3xl sm:text-5xl tracking-wider pt-6 sm:pt-12">Trusted <span className="text-primary">by</span></div>
            {/* <div className="flex sm:hidden flex-wrap lg:flex-row gap-14 lg:gap-20 pb-5 items-center justify-center">
            <img src="/moola.png" className="w-[102px] h-[30px] object-cover"/>
            <img src="/ari.png" className="w-[62px] h-[30px] "/>
            <img src="/poofcash.png" className="w-[70px] h-[26px] object-cover"/>
            <img src="/ubeswap.png" className="w-[120px] h-[25px] "/>
            <img src="/nomspace.png" className="w-[130px] h-[30px] "/>
                 {/* <div className="flex  gap-3  justify-center items-center">
                   
                    <img src="/moola_text.png" className=" h-[30px] w-[80px] sm:h-[50px] sm:w-[120px] lg:h-[70px] lg:w-[170px]"/>
                </div> 
                 <img src="/moola.png" className=" w-[130px] h-[30px] sm:w-[130px] sm:h-[70px] lg:h-[80px]  lg:w-[260px] mt-2"/>
                    <img src="/ariswap.png" className=" w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] lg:h-[70px]  lg:w-[70px] hidden sm:block" />
                <div className="flex gap-5 items-center justify-center text-3xl lg:text-5xl text-white ">
                    <img src="/ubeswap2.png" className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] lg:h-[70px] lg:w-[70px]" /> <span>Ubeswap</span>
                </div>              
                    <img src="/nomspace.png" className=" w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] lg:h-[70px]  lg:w-[70px]"/>             
                    <img src="/poofcash.png" className="h-[50px] w-[90px] sm:h-[75px] sm:w-[135px] lg:h-[100px] lg:w-[180px]"/> 
                    <img src="/ariswap.png" className=" w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] lg:h-[70px] lg:w-[70px] block sm:hidden" /> */}
            {/* </div>  */}
            {/* <div className="hidden sm:block animate-area"></div> */}
            <div className="flex flex-col items-center w-[90%] sm:w-[70%]  gap-8 sm:gap-16 h-full ">
                <div className="w-full h-full flex items-center justify-between"><a href="" target="_blank"><img src="/sponsor_moola.png" alt="" className="w-[120px] h-[35px]  sm:w-[260px] sm:h-[80px] cursor-pointer" /></a>
                    <a href="" target="_blank"><img src="/sponsor_ari.png" alt="" className="w-[50px] h-[30px] sm:w-[150px] sm:h-[90px]  cursor-pointer" /></a>
                    <a href="" target="_blank"><img src="/sponsor_poof.png" alt="" className="w-[60px] h-[35px] sm:w-[200px] sm:h-[80px]  cursor-pointer" /></a></div>
                <div className="w-full h-full flex items-center justify-between gap-4">
                    <a href="" target="_blank"><img src="/sponsor_nomspace.png" alt="" className="w-[140px] h-[35px] sm:w-[380px]  sm:h-[80px] cursor-pointer xl:ml-20" /></a>
                    <a href="" target="_blank"><img src="/sponsor_ubeswap.png" alt="" className=" w-[130px] h-[30px] sm:w-[370px]  sm:h-[70px] cursor-pointer" /></a>
                </div>
            </div>

        </div>

    </div >
}
