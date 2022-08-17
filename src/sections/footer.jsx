import React from 'react';

export default function Footer() {
    return <div className="h-[175px] sm:h-[320px] mt-3 bg-black bg-cover py-6 px-6">
        <div className="w-full h-full grid grid-cols-[50%,50%] sm:grid-cols-[70%,30%] ">
                <div className=" flex flex-col justify-between w-full h-full items-start space-y-5 pt-8 pl-16">
                    <div>
                        <img src="/logo.png" className="w-[75px] sm:w-[150px]" alt="" />
                    </div>
                    <div className="text-gray-400">
                    &#169; 2022 Remox, Inc.
                    </div>
                
            </div>
            <div className="w-full h-full grid grid-cols-2 gap-20 sm:gap-16 text-left pt-8">
                <div className="flex flex-col  gap-2">
                    <div className="text-white text-xl pb-2">Company</div>
                    <a href="https://medium.com/remoxhq" target="_blank" className="text-gray-400 hover:transition-all hover:text-primary">Blog</a>
                    <a href="https://github.com/remoxhq/Remox" target="_blank" className="text-gray-400 hover:transition-all hover:text-primary">Documentation</a>
                </div>
                <div className="flex flex-col gap-2 ">
                    <div className="text-white text-xl pb-2">Social</div>
                    <a href="https://twitter.com/useremox" target="_blank" className="text-gray-400 hover:transition-all hover:text-primary">Twitter</a>
                    <a href="https://discord.gg/2r4hrNEbWn" target="_blank" className="text-gray-400 hover:transition-all hover:text-primary">Discord</a>
                    <a href="https://www.linkedin.com/company/remoxhq" target="_blank" className="text-gray-400 hover:transition-all hover:text-primary">Linkedin</a>
                </div>
            </div>
        </div>
    </div>;
}
