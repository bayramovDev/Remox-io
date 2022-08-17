import React from 'react'
import TypeAnimation from 'react-type-animation'

function TextAnimation() {
    return <div className="font-semibold  text-white min-h-[100px]  sm:min-h-[300px] 2xl:min-h-[500px] bg-main relative z-[99] py-4 flex flex-col items-center w-full justify-center space-y-10 px-12 xl:px-32">
        <div className="min-h-[150px] sm:min-h-[390px] w-full   py-4 flex flex-col items-center justify-center gap-10 sm:gap-20 px-12 lg:px-16 2xl:px-0">
            <div className="text-white text-center font-semibold text-3xl pt-8 sm:pt-24 sm:text-5xl tracking-wider h-[28px]">Supported <span className="text-primary">by</span></div>
            <div className="flex flex-col gap-16 w-full h-full items-center justify-center">
                {/* <img src="/founder_group.png" alt="" className="w-full h-full object-cover" /> */}
                <div className="w-full h-full flex flex-col sm:flex-row items-center py-10 sm:py-0 gap-10 sm:gap-0 justify-center sm:justify-between ">
                <div className="sm:w-[350px]"><img src="/orangeDAO.png" alt="" className="w-[190px] h-[80px] sm:w-[260px] sm:h-[120px] object-cover" /> </div>
               <a href=""target="_blank"><img src="/flori-ventures.png" alt="" className="w-[85px] h-[140px] cursor-pointer  sm:w-[130px] sm:h-[210px] object-cover" /></a> 
               <a href=""target="_blank"><img src="/allogoiv.png" alt="" className="w-[235px] h-[60px] cursor-pointer  sm:w-[350px] sm:h-[90px] object-cover" /></a> 
                </div>
                <div className="w-full h-full flex flex-col gap-16 sm:gap-0 sm:flex-row justify-between items-center px-12">
                    <div className="flex items-center justify-start gap-2 border  py-3 px-5 min-w-[29rem] border-primary rounded-lg hover:bg-sec transition-all hover:transition-all">
                        <img src="/Rene_pp.png" alt="" className="w-20 h-20 rounded-full" />
                        <div className="flex flex-col gap-1">
                            <div className="text-3xl font-bold">Rene Reinsberg</div>
                            <div className="text-[#aaaaaa] text-xl">Celo Foundation</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-2 border  py-3 px-5 min-w-[29rem] border-primary rounded-lg hover:bg-sec transition-all hover:transition-all">
                        <img src="/Marek_pp.png" alt="" className="w-20 h-20 rounded-full" />
                        <div className="flex flex-col gap-1">
                            <div className="text-3xl font-bold">Marek Olszewski</div>
                            <div className="text-[#aaaaaa] text-xl">Valora & Celo Foundation</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="text-2xl sm:text-4xl flex items-center justify-center !mt-0 gap-2 md:text-6xl min-h-[225px] sm:min-h-[450px]">One platform for <TypeAnimation
            className="text-primary"
            cursor={true}
            sequence={['multi-wallet management', 1000, 'contributor management', 1000, 'payroll management', 1000, 'expense management', 1000, 'budgeting & reporting', 1000, 'risk assessment', 1000, 'portfolio management', 1000]}
            wrapper={'span'}
            repeat={Infinity}
        />
        </div>
    </div>
}

export default TextAnimation