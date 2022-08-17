import { useState } from 'react'
import { FaTwitter,FaDiscord } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const [value, setValue] = useState('celo')

    return <div className="h-[75px] w-full px-8 sm:px-16 lg:px-24">
        <div className="flex justify-between items-center h-full pt-5">
            <div>
                <img src="/logo.png" className="w-[9.375rem]" />
            </div>
            <div className="flex gap-5">
                <div className="">
                    <a href="https://twitter.com/useremox" target="_blank"><FaTwitter style={{color: "white",fontSize: "1.6em"}} onMouseOver={({target})=>target.style.color="#1DA1F2"}  onMouseOut={({target})=>target.style.color="white"} /></a>
                </div>
                <div className="">
                    <a href="https://discord.gg/2r4hrNEbWn" target="_blank"><FaDiscord style={{color: "white",fontSize: "1.75em"}} onMouseOver={({target})=>target.style.color="#7289DA"}  onMouseOut={({target})=>target.style.color="white"}  /></a>
                </div>
                <div className="self-center block">
                    <a href={``} className=" px-5 py-[0.35rem] sm:px-6 sm:py-[0.65rem] text-base  rounded-md font-semibold  bg-primary border-primary text-white hover:bg-[#ff5413] dark:hover:bg-[#ff5413] hover:border-[#ff5413]   hover:text-white transition-all duration-400" target="_blank">Coming Soon</a>
                </div>
            </div>
        </div>
    </div>
}
