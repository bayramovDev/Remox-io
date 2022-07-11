import React,{useEffect,useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Main() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPosition)

  // AOS.init();
  // useEffect(()=>{
  //   document.querySelector('body').style.overflowX = "hidden"
  // },[AOS])
// data-aos="flip-down" data-aos-easing="linear" data-aos-duration="800" 
  return <> <div className="relative translate3d-100  pb-4 w-full h-full flex flex-col items-center ">
  <div className={`bg-[url('../public/ipad.png')] bg-cover bg-local bg-center bg-no-repeat w-[350px] h-[220px] sm:w-[630px]  sm:h-[400px] lg:w-[850px] lg:h-[520px] flex items-center justify-center`}>
    <img src="/dashboard.png" alt="" className="w-[92.5%] h-[86%] sm:w-[94%] sm:h-[87.5%]  lg:w-[92.5%] lg:h-[90%] mr-1 sm:mr-2 lg:mr-4 rounded-md" /> 
    </div>
 <div className="w-full h-full  bottom-[-65%] sm:bottom-[-75%] lg:-left-4 absolute z-[-1]">
 <div className="bg-[url('../public/background_3.png')]  bg-cover bg-local bg-center bg-no-repeat  w-full h-[40%] lg:h-[30%] "></div>
    </div> 
 </div>

    </> 
}

