import React, { Ref, useRef, useState,useEffect } from 'react'
import TypeAnimation from 'react-type-animation';
import { InView, useInView } from 'react-intersection-observer';

function Dinamic() {
        

    const data = [
        {
            id: 0,
            url: 'dashboard',
            header: 'Track and Manage wallets',
            text: 'Connect your organizational wallets to monitor your digital asset allocation and cash flow'
        },
        {
            id: 1,
            url: 'dashboard',
            header: 'Onboard Contributors',
            text: 'Create and manage your teams of  full & part-time contributors and bounty program participants '
        },
        {
            id: 2,
            url: 'dashboard',
            header: 'Automated Payroll',
            text: 'Automate your recurring payments and manage upcoming expenses'
        },
        {
            id: 3,
            url: 'dashboard',
            header: 'Payment Request',
            text: '(Share request link with community and manage payment requests)'
        },
        {
            id: 4,
            url: 'dashboard',
            header: 'Budgeting & Reporting',
            text: 'Prepare fully transparent budget and real time financial statements for your  organziation. Share insights of reportings with your community <br />in proposals.'
        },
        {
            id: 5,
            url: 'dashboard',
            header: 'Risk Assessment',
            text: 'Monitor risks in DeFi  protocols and mitigate<br />potential losses associated with technical and economic risks'
        },
        {
            id: 6,
            url: 'dashboard',
            header: 'Portfolio Management',
            text: ' Create your investment portfolio based on your risk apetite and <br />return goal to grow your project assets in DeFi '
        }
    ]

    return <><div className="font-semibold  text-white min-h-[120px]  sm:min-h-[240px] bg-main relative z-[99] py-4 flex items-center w-full justify-center space-y-10 px-12 lg:px-48">
        <div className="text-2xl sm:text-4xl md:text-[2.75rem]">One platform for <TypeAnimation
            className="text-primary"
            cursor={true}
            sequence={['multi-wallet management', 1000, 'contributor management', 1000, 'payroll management', 1000, 'expense management', 1000, 'budgeting & reporting', 1000, 'risk assessment', 1000, 'portfolio management', 1000]}
            wrapper={'span'}
            repeat={Infinity}
        />
        </div>
    </div>
        <div className={`bg-[url('../public/background_5.png')] min-h-[400px] sm:min-h-[690px]  bg-center bg-no-repeat hidden sm:flex items-center justify-center w-full h-full`}>
            <div className="w-full h-full relative">
                    <section className="flex flex-col gap-10 items-start px-8 sm:px-0 sm:items-center justify-start pt-8 sm:pt-16 sm:pb-32 text-center w-full h-full">
                        <div className="text-white text-4xl tracking-wider font-semibold">Track and Manage wallets</div>
                        <div className=" text-white tracking-wider">Connect your organizational wallets to <br /> monitor your digital asset allocation and <br /> cash flow</div>
                    </section>
                    <section className="flex flex-col gap-10 items-start px-8 sm:px-0 sm:items-center justify-start pt-8 sm:py-32 text-center w-full h-full">
                        <div className="text-white text-4xl tracking-wider font-semibold">Onboard Contributors</div>
                        <div className=" text-white tracking-wider">Create and manage your teams of <br /> full & part-time contributors and<br /> bounty program participants </div>
                    </section>
                    <section className="flex flex-col gap-10 items-start px-8 sm:px-0 sm:items-center justify-start pt-8 sm:py-32 text-center w-full h-full">
                        <div className="text-white text-4xl tracking-wider font-semibold">Automated Payroll</div>
                        <div className=" text-white tracking-wider">Automate your recurring <br />payments and manage <br />upcoming expenses</div>
                    </section>
                    {/* <div className="flex flex-col gap-10 items-start px-8 sm:px-0 sm:items-center justify-start pt-8 sm:py-32 text-center w-full h-full">
                        <div className="text-white text-4xl tracking-wider font-semibold">Payment Request</div>
                        <div className=" text-white tracking-wider">(Share request link<br />with community and<br />manage payment requests)</div>
                    </div>
                    <div className="flex flex-col gap-10 items-start px-8 sm:px-0 sm:items-center justify-start pt-8 sm:py-32 text-center w-full h-full">
                        <div className="text-white text-4xl tracking-wider font-semibold">Budgeting & Reporting</div>
                        <div className=" text-white tracking-wider">Prepare fully transparent <br />budget and real time financial <br />statements for your <br /> organziation. Share insights of <br />reportings with your community <br />in proposals.</div>
                    </div>
                    <div className="flex flex-col gap-10 items-start px-8 sm:px-0 sm:items-center justify-start pt-8 sm:py-32 text-center w-full h-full">
                        <div className="text-white text-4xl tracking-wider font-semibold">Risk Assessment</div>
                        <div className=" text-white tracking-wider">Monitor risks in DeFi <br /> protocols and mitigate<br />potential losses associated with <br />technical and economic risks</div>
                    </div>
                    <div className="flex flex-col gap-10 items-start px-8 sm:px-0 sm:items-center justify-start pt-8 sm:py-32 text-center w-full h-full">
                        <div className="text-white text-4xl tracking-wider font-semibold">Portfolio Management</div>
                        <div className=" text-white tracking-wider"> Create your investment portfolio <br />based on your risk apetite and <br />return goal to grow your project<br />assets in DeFi </div>
                    </div> */}
                    <div className="absolute top-10 left-0 h-full w-full">
                    <div className=" bg-[url('../public/ipad.png')]  bg-cover bg-local bg-center ml-4 bg-no-repeat w-[300px] h-[190px] sm:w-[480px] sm:h-[300px]  lg:w-[630px] lg:h-[400px] flex items-center justify-center">
                    <div className="w-[92.5%] h-[86%] sm:w-[94%] sm:h-[87.5%]  lg:w-[92.5%] lg:h-[87.5%] mr-1 sm:mr-2 rounded-md"> <img src={`/dashboard.png`} alt="" className="w-full h-full object-cover  rounded-md" /> </div>
                </div>
                    </div>
                </div>
    
        </div>
        {data.map((item, index) => {
            return <div key={index} className="bg-[url('../public/background_5.png')] min-h-[400px] sm:min-h-[690px] relative z-[99] bg-center bg-no-repeat flex sm:hidden  items-center justify-center w-full h-full">
                <div className="flex sm:hidden flex-col gap-6 items-center">
                    <div className="bg-[url('../public/ipad.png')]  bg-cover bg-local bg-center ml-4 bg-no-repeat w-[300px] h-[190px] sm:w-[480px] sm:h-[300px]  lg:w-[630px] lg:h-[400px] flex items-center justify-center">
                        <div className="w-[92.5%] h-[86%] sm:w-[94%] sm:h-[87.5%]  lg:w-[92.5%] lg:h-[87.5%] mr-1 sm:mr-2 rounded-md"> <img src={`/${item.url}.png`} alt="" className="w-full h-full object-cover  rounded-md" /> </div>
                    </div>
                    <div className="border-box flex flex-col gap-10 items-start px-28 sm:px-0 sm:items-center justify-start pt-8 sm:pt-16 sm:pb-32 text-left w-full h-full">
                        <div className="text-white text-3xl tracking-wider font-semibold">{item.header}</div>
                        <div className=" text-white tracking-wider ">{`${item.text}`}</div>
                    </div>
                </div>
            </div>
        })}
    </>
}

export default Dinamic