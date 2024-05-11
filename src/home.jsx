import { Outlet, Link, useNavigate } from "react-router-dom"
import btnMobile from "../assets/Oval Copy.svg"
import btnTablet from '../assets/Oval Copy (1).svg'

function Home({ setIndex, setPageTrans }) {
  const navigate = useNavigate()
  const destination = () => {
    setIndex(1)
}

    return (
        <div className="homeMobile flex flex-col items-center xl:flex-row xl:px-40 xl:justify-between xl:pt-10 xl:relative">
          <div className="xl:text-start">
          <p className="font-condensed mt-32 text-[1rem] tracking-[0.16875rem] h-[1.1875rem] sm:mt-[12.62rem] sm:text-xl sm:tracking-[0.21094rem] xl:text-[1.75rem] xl:tracking-[0.29531rem]">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="font-bellefair text-[5rem] leading-tight my-4 sm:my-6 sm:text-[9.375rem] sm:leading-none xl:mt-4 xl:mb-0">
            SPACE
          </h1>
          <p className="font-barlow text-[0.9375rem] leading-[1.5625rem] w-[20.4375rem] sm:text-base sm:leading-7 sm:w-[27.75rem] xl:text-lg xl:leading-8">
           Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
          </div>
          <Link to={"../destination"} onClick={(e) => {
            e.preventDefault();
            setTimeout(() => {navigate('../destination')}, 500)
          }}>
          <div className="relative mt-20 sm:mt-[9.75rem] xl:top-10" onClick={() => {setPageTrans(1); setTimeout(destination, 500)}}>
           <img src={window.screen.width < 640 ? btnMobile : btnTablet} className="xl:w-[17.125rem] xl:h-[17.125rem] rounded-full xl:hover:cursor-pointer hovTrans" />           
           <p className="font-bellefair text-[1.25rem] tracking-[0.078125rem] relative bottom-[5.5rem] text-[#0B0D17] sm:text-[2rem] sm:tracking-[0.125rem] sm:bottom-[8.8rem] xl:bottom-[10rem]">EXPLORE</p>           
          </div>
          </Link>
        
        <Outlet />
        </div>
    )
}

export default Home