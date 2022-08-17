import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
// import { motion, useViewportScroll,useTransform } from "framer-motion"
import { Controller, Scene } from 'react-scrollmagic';
// import Plx from 'react-plx';import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { Tween, Timeline } from 'react-gsap';


export default function Main() {

  useEffect(() => {
    document.querySelector('body').style.overflowX = "hidden"
  }, [])


  return <>
    <div className=" pt-8 pb-12 sm:pb-0 sm:pt-48 w-full h-full flex flex-col items-center">
      <Controller>
        <div className='h-[600px] w-full hidden sm:block'>
          <Scene duration={500} triggerHook="onEnter" >
            <Timeline
              target={
                <div className={`bg-[url('../public/ipad.png')] scale-[0.8] mx-auto  -translate-y-[48.5%]  bg-cover  top-30  bg-local bg-center bg-no-repeat w-[350px] h-[220px] sm:w-[630px]  sm:h-[400px] lg:w-[850px] lg:h-[520px] flex items-center justify-center`}>
                  <img src="/dashboards.png" alt="" className="w-[92.5%] h-[86%] sm:w-[94%] sm:h-[87.5%]  lg:w-[92.5%] lg:h-[90%] mr-1 sm:mr-2 lg:mr-4  rounded-md" />
                </div>
              }
            >
              <Tween
                duration={500}
                from={{
                  transform: "scale(0.8)",
                }}
              />
              <Tween
                duration={500}
                to={{
                  transform: "scale(1.1)",
                }}

              />
            </Timeline>
          </Scene>
        </div>
      </Controller>
      <div className={` flex sm:hidden mx-auto bg-[url('../public/ipad.png')] mt-8 bg-cover bg-local bg-center bg-no-repeat w-[300px] h-[180px]   items-center justify-center`} >
        <img src="/dashboards.png" alt="" className="w-[92.5%] h-[90%] sm:w-[94%] sm:h-[87.5%]  lg:w-[92.5%] lg:h-[90%] mr-1 sm:mr-2 lg:mr-4 rounded-md" />
      </div>
    </div>

  </>
}

//gsap 

