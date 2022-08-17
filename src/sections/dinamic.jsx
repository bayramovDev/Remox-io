import React, { Ref, useRef, useState, useEffect } from 'react'
import TypeAnimation from 'react-type-animation';
import { InView } from 'react-intersection-observer';
// import { motion, useViewportScroll } from "framer-motion"
// import ScrollOut from "scroll-out";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { Controller, Scene, } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
// import { useInViewport } from 'react-in-viewport';
import "intersection-observer";
import { useIsVisible } from "react-is-visible";

const SomeComponent = ({ onVisible, ...props }) => {
    const nodeRef = useRef();
    const isVisible = useIsVisible(nodeRef);

    React.useEffect(() => {
        onVisible(isVisible);
    }, [onVisible, isVisible]);

    return <div ref={nodeRef} {...props} />;
};


function Dinamic() {
    const [inViews, setinViews] = useState(false)
    const [inView2, setinView2] = useState(false)
    const [inView3, setinView3] = useState(false)
    const [inView4, setinView4] = useState(false)
    const [inView5, setinView5] = useState(false)
    const [inView6, setinView6] = useState(false)
    const [inView7, setinView7] = useState(false)
    const [inView8, setinView8] = useState(false)
    const [inView9, setinView9] = useState(false)


    const data = [
        {
            id: 0,
            url: 'dashboards',
            header: 'Multi-wallet Management',
            text: 'Connect all your organizational wallets to monitor digital asset allocation and  transaction history.  Manage your expenses and track your cash flow in one simplified dashboard.'
        },
        {
            id: 1,
            url: 'app_contributor_white',
            header: 'Contributor Management',
            text: 'Onboard your full & part-time contributors and manage your working teams'
        },
        {
            id: 2,
            url: 'app_payroll_white',
            header: 'Payroll Management',
            text: 'Automate your recurring payments to meet payment deadlines. Manage crypto payroll and mass payouts to keep the process organized, easy and efficient.'
        },
        {
            id: 3,
            url: 'app_request_white',
            header: 'Expense Management',
            text: 'Share payment link with your community. Manage grant, bug bounty, contributor payouts and reimbursements by tracking requests and approvals.'
        },
        {
            id: 4,
            url: 'app_budget_white',
            header: 'Collaborative Budgeting',
            text: 'Prepare a fully transparent budget for your organization. Share insights with your community in proposals for collaborative decision making.'
        },
        {
            id: 5,
            url: 'app_risk_white',
            header: 'Risk Assessment',
            text: 'Monitor risks in crypto assets and DeFi protocols Mitigate Potential losses associated with technical and economic risks.'
        },
        {
            id: 6,
            url: 'portfolio',
            header: 'Portfolio Management',
            text: 'Create your collaborative investment portfolio based on your risk appetite and return goal to grow your digital assets in DeFi.'
        },
        {
            id: 7,
            url: 'transactions',
            header: 'Bookkeeping & Accounting',
            text: 'Record and track your transactions with custom labeling. Prepare real time financial statements and share with your community.'
        },
        {
            id: 8,
            url: 'insights',
            header: 'Insights & Reporting',
            text: 'Monitor your budget expenses and cash flow movement with detailed insights in one place. Understand how money is spent and where it is spent across your wallets, through live reporting.'
        }

    ]
    return <>


        <section class="hidden sm:flex">
            <div className='h-screen w-1/2 flex justify-center items-center z-2  sticky top-0'>
                <div className="w-full h-full flex justify-center items-center  ml-4">
                    <div className=" bg-[url('../public/ipad.png')] bg-cover bg-local bg-center bg-no-repeat w-[300px] h-[190px] sm:w-[480px] sm:h-[300px]  lg:w-[650px] lg:h-[400px] flex items-center justify-center">
                        <div className="w-[92.5%] h-[86%] sm:w-[94%] sm:h-[87.5%]  lg:w-[92.5%] lg:h-[90%] mr-1 sm:mr-2 rounded-md">
                            <img src={`/${inViews ? 'dashboards.png' : inView2 ? 'app_contributor_white.png' : inView3 ? 'app_payroll_white.png' : inView4 ? 'app_request_white.png' : inView5 ? 'app_budget_white.png' : inView6 ? 'app_risk_white.png' : inView7 ? 'portfolio.png' : inView8 ? 'transactions.png' : 'Insights.png'  && !inViews && 'Insights.png' }`} alt="" className="w-full  h-full  rounded-md" />
                        </div>
                    </div>
                </div>
                <div className="bg-[url('../public/background_5.png')] w-full h-screen absolute z-[-1]  right-[-100%]"></div>
                <div className="bg-[url('../public/background_5.png')] w-[105%] h-screen absolute z-[-1] "></div>
            </div>

            <div className="w-1/2 flex flex-col">
                <div className='flex items-center justify-center h-screen'>
                    <SomeComponent onVisible={(isVisible) => isVisible ? setinViews(true) : setinViews(false)}>
                        <div className="flex flex-col justify-center gap-10 items-center text-center w-full h-[60vh]">
                            <div className="text-white text-5xl tracking-wider font-bold">Multi-wallet Management</div>
                            <div className=" text-gray-300 text-2xl  tracking-wider w-[70%]">Connect all your organizational wallets to monitor digital asset allocation and  transaction history.  Manage your expenses and track your cash flow in one simplified dashboard.</div>
                        </div>
                    </SomeComponent>
                </div>
                <div className='flex items-center justify-center h-screen'>
                    <SomeComponent onVisible={(isVisible) => isVisible ? setinView2(true) : setinView2(false)}>
                        <div className="flex flex-col justify-center gap-10 items-center text-center w-full h-1/2">
                            <div className="text-white text-5xl tracking-wider font-bold">Contributor Management</div>
                            <div className=" text-gray-300 text-2xl  tracking-wider w-[70%]">Onboard your full & part-time contributors and manage your working teams</div>
                        </div>
                    </SomeComponent>
                </div>
                <div className='flex items-center justify-center h-screen'>
                    <SomeComponent onVisible={(isVisible) => isVisible ? setinView3(true) : setinView3(false)}>
                        <div className="flex flex-col justify-center gap-10 items-center text-center w-full h-[60vh]">
                            <div className="text-white text-5xl tracking-wider font-bold">Payroll Management</div>
                            <div className=" text-gray-300 text-2xl  tracking-wider w-[70%]">Automate your recurring payments to meet payment deadlines. Manage crypto payroll and mass payouts to keep the process organized, easy and efficient.</div>
                        </div>
                    </SomeComponent>
                </div>
                <div className='flex items-center justify-center h-screen'>
                    <SomeComponent onVisible={(isVisible) => isVisible ? setinView4(true) : setinView4(false)}>
                        <div className="flex flex-col justify-center gap-10 items-center text-center w-full h-[60vh]">
                            <div className="text-white text-5xl tracking-wider font-bold">Expense Management</div>
                            <div className=" text-gray-300 text-2xl  tracking-wider w-[70%]">Share payment link with your community. Manage grant, bug bounty, contributor payouts and reimbursements by tracking requests and approvals.</div>
                        </div>
                    </SomeComponent>
                </div>
                <div className='flex items-center justify-center h-screen'>
                    <SomeComponent onVisible={(isVisible) => isVisible ? setinView5(true) : setinView5(false)}>
                        <div className="flex flex-col justify-center gap-10 items-center text-center w-full h-[60vh]">
                            <div className="text-white text-5xl tracking-wider font-bold">Collaborative Budgeting</div>
                            <div className=" text-gray-300 text-2xl  tracking-wider w-[70%]">Prepare a fully transparent budget for your organization. Share insights with your community in proposals for collaborative decision making.</div>
                        </div>
                    </SomeComponent>
                </div>
                <div className='flex items-center justify-center h-screen'>
                    <SomeComponent onVisible={(isVisible) => isVisible ? setinView6(true) : setinView6(false)}>
                        <div className="flex flex-col justify-center gap-10 items-center text-center w-full h-[60vh]">
                            <div className="text-white text-5xl tracking-wider font-bold">Risk Assessment</div>
                            <div className=" text-gray-300 text-2xl  tracking-wider w-[70%]">Monitor risks in crypto assets and DeFi protocols Mitigate Potential losses associated with technical and economic risks.</div>
                        </div>
                    </SomeComponent>
                </div>
                <div className='flex items-center justify-center h-screen'>
                    <SomeComponent onVisible={(isVisible) => isVisible ? setinView7(true) : setinView7(false)}>
                        <div className="flex flex-col justify-center gap-10 items-center text-center w-full h-[60vh]">
                            <div className="text-white text-5xl tracking-wider font-bold">Portfolio Management</div>
                            <div className=" text-gray-300 text-2xl  tracking-wider w-[70%]">Create your collaborative investment portfolio based on your risk appetite and return goal to grow your digital assets in DeFi.</div>
                        </div>
                    </SomeComponent>
                </div>
                <div className='flex items-center justify-center h-screen'>
                    <SomeComponent onVisible={(isVisible) => isVisible ? setinView8(true) : setinView8(false)}>
                        <div className="flex flex-col justify-center gap-10 items-center text-center w-full h-[60vh]">
                            <div className="text-white text-5xl tracking-wider font-bold">Bookkeeping & Accounting</div>
                            <div className=" text-gray-300 text-2xl  tracking-wider w-[70%]">Record and track your transactions with custom labeling. Prepare real time financial statements and share with your community.</div>
                        </div>
                    </SomeComponent>
                </div>
                <div className='flex items-center justify-center h-screen'>
                    <SomeComponent onVisible={(isVisible) => isVisible ? setinView9(true) : setinView9(false)}>
                        <div className="flex flex-col justify-center gap-10 items-center text-center w-full h-[60vh]">
                            <div className="text-white text-5xl tracking-wider font-bold">Insights & Reporting</div>
                            <div className=" text-gray-300 text-2xl font-medium  tracking-wider w-[70%]">Monitor your budget expenses and cash flow movement with detailed insights in one place. Understand how money is spent and where it is spent across your wallets, through live reporting.</div>
                        </div>
                    </SomeComponent>
                </div>
            </div>
        </section>

        {
            data.map((item, index) => {
                return <div key={index} className={`bg-[url('../public/background_5.png')]  ${index === 6 ? "min-h-[320px] " : 'min-h-[370px] '} z-[99] bg-cover  flex sm:hidden  items-start pt-4 justify-center w-full h-full`}>
                    <div className="flex sm:hidden flex-col gap-6 items-center">
                        <div className="bg-[url('../public/ipad.png')]  bg-cover bg-local bg-center ml-4 bg-no-repeat w-[300px] h-[190px] sm:w-[480px] sm:h-[300px]  lg:w-[630px] lg:h-[400px] flex items-center justify-center">
                            <div className="w-[92.5%] h-[86%] sm:w-[94%] sm:h-[87.5%]  lg:w-[92.5%] lg:h-[87.5%] mr-1 sm:mr-2 rounded-md"> <img src={`/${item.url}.png`} alt="" className="w-full h-full rounded-md" /> </div>
                        </div>
                        <div className="border-box flex flex-col gap-4 items-start px-28 sm:px-0 sm:items-center justify-start pt-4 sm:pt-16 sm:pb-32 text-left w-full h-full">
                            <div className="text-white text-3xl tracking-wider font-bold">{item.header}</div>
                            <div className=" text-white tracking-wider font-medium">{`${item.text}`}</div>
                        </div>
                    </div>
                </div>
            })
        }
    </>
}

export default Dinamic