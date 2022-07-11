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
                {/* <div className="self-center border-1 rounded-sm border-primary">
                    <div className="relative">
                        <div onClick={() => setOpen(!isOpen)} className="font-normal text-white px-2 sm:px-2 py-[5px] rounded-lg cursor-pointer bg-sec border border-primary  flex space-x-1 items-center justify-center ">
                            <span className="flex items-center justify-center"><img src={`/${value ? value : 'celo'}.png`} alt="" className="w-[15px] h-[15px] mr-1" />{value==="solana" ? "Solana" : 'Celo'}</span>
                            <div>
                                <IoIosArrowDown className='transition w-[0.7em] h-[0.7rem]' style={isOpen ? { transform: "rotate(180deg)" } : undefined} />
                            </div>
                        </div>
                        {isOpen && <div className="absolute flex items-start sm:items-end justify-start sm:justify-end min-w-[150%] rounded-xl sm:-right-0 -bottom-1 translate-y-full shadow-xl z-50">
                            <ul>
                                {value !=='celo' && <li onClick={() => {
                                    setValue('celo');
                                    setOpen(false)
                                }} className="w-[4.4rem] sm:min-w-[6.3rem] sm:h-8 text-right flex flex-col  items-center justify-center space-y-1 transition  border border-primary  px-1 py-1 hover:bg-[#3d3d3d] dark:bg-darkSecond cursor-pointer first:rounded-t-lg last:rounded-b-lg">
                                    <div className="flex items-center justify-center text-white">
                                        <label className="text-sm flex items-center justify-center cursor-pointer">
                                            <img src="/celo.png" alt="" className="w-[1rem] h-[1rem] mr-1" /> Celo
                                        </label>
                                    </div>
                                </li>}
                                {value !=='solana' &&<li onClick={() => {
                                    setValue('solana');
                                    setOpen(false)
                                }} className="w-[5.6rem] sm:min-w-[6.3rem] sm:h-9 text-right flex flex-col items-center justify-center space-y-1 transition border border-primary  px-1 py-1 hover:bg-[#3d3d3d] dark:bg-darkSecond cursor-pointer first:rounded-t-lg last:rounded-b-lg">
                                    <div className="flex items-center justify-center text-white">
                                        <label className="text-sm flex items-center justify-center cursor-pointer">
                                        <img src="/solana.png" alt="" className="w-[1rem] h-[1rem] mr-1" />Solana
                                        </label>
                                    </div>
                                </li>}
                            </ul>
                        </div>
                        }
                    </div>
                </div> */}
                <div className="">
                    <a href="https://twitter.com/useremox"><FaTwitter style={{color: "white",fontSize: "1.6em"}} onMouseOver={({target})=>target.style.color="#1DA1F2"}  onMouseOut={({target})=>target.style.color="white"} /></a>
                </div>
                <div className="">
                    <a href="https://discord.gg/2r4hrNEbWn"><FaDiscord style={{color: "white",fontSize: "1.75em"}} onMouseOver={({target})=>target.style.color="#7289DA"}  onMouseOut={({target})=>target.style.color="white"}  /></a>
                </div>
                <div className="self-center block">
                    <a href={`http://localhost:3000/?blockchain=${value}`} className=" px-6 py-2 rounded-md  bg-primary border-primary text-white hover:bg-[#ff5413] dark:hover:bg-[#ff5413] hover:border-[#ff5413]   hover:text-white transition-all duration-400" target="_blank">Enter App</a>
                </div>
            </div>
        </div>
    </div>
}
