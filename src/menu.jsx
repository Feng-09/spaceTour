import { Outlet, Link } from "react-router-dom"

function Menu({ index, setIndex, menu }) {
    const home = () => {
        setIndex(0)
    }
    const destination = () => {
        setIndex(1)
    }
    const crew = () => {
        setIndex(2)
    }
    const tech = () => {
        setIndex(3)
    }

    return(
        <div className={menu ? "menu active p-8 pr-0 bg-[#ffffff0a] backdrop-blur-[40.774227142333984px] h-screen fixed right-0 top-0 text-left sm:w-[28.125rem] sm:h-24 sm:flex sm:pt-[2.44rem] sm:justify-between sm:px-12 xl:w-[51.875rem] xl:px-32 xl:top-[2.5rem] xl:z-10" : "menu py-8 pr-0 bg-[#ffffff0a] backdrop-blur-[40.774227142333984px] h-screen fixed right-0 top-0 text-left sm:w-[28.125rem] sm:h-24 sm:flex sm:pt-[2.44rem] sm:justify-between sm:px-12 xl:w-[51.875rem] xl:px-32 xl:top-[2.5rem] xl:z-10"}>
            <Link to="/0">
            <div className="relative mt-[5.07rem] mb-[3rem] h-[0.16875rem] sm:mb-0 sm:h-[3.56rem] sm:mt-0 group w-full" onClick={home}>
             <p className="font-condensed tracking-[0.16875rem] text-white"><span className="font-bold mr-[0.69rem] sm:max-xl:hidden">00</span>HOME</p>
             <div className={index == 0 ? "bg-white absolute h-[1.9375rem] right-0 top-0 sm:bottom-0 sm:top-auto sm:right-3 sm:h-[0.1875rem] sm:w-[1.125rem] xl:w-[2.1875rem] xl:right-4 idk" : "bg-white absolute h-[1.9375rem] right-0 top-0 sm:bottom-0 sm:top-auto sm:right-1 sm:h-[0.1875rem] sm:w-[2rem] xl:w-[3.5rem] xl:right-2 sm:group-hover:scale-x-50 opacity-0 duration-300 sm:group-hover:opacity-50"}></div>
            </div>
            </Link>
            <Link to="destination/1">
            <div className="relative mb-[3rem] h-[0.16875rem] sm:mb-0 sm:h-[3.56rem] group w-full" onClick={destination}>
             <p className="font-condensed tracking-[0.16875rem] text-white"><span className="font-bold mr-[0.69rem] sm:max-xl:hidden">01</span>DESTINATION</p>
             <div className={index == 1 ? "bg-white absolute h-[1.9375rem] right-0 top-0 sm:bottom-0 sm:top-auto sm:right-7 sm:h-[0.1875rem] sm:w-[2.71875rem] xl:w-[3.96875rem] xl:right-8 idk" : "bg-white absolute h-[1.9375rem] right-0 top-0 sm:bottom-0 sm:top-auto sm:right-7 sm:h-[0.1875rem] sm:w-[2.71875rem] xl:w-[3.96875rem] xl:right-8 sm:group-hover:scale-x-50 opacity-0 duration-300 sm:group-hover:opacity-50"}></div>
            </div>
            </Link>
            <Link to="crew/2">
            <div className="relative mb-[3rem] h-[0.16875rem] sm:mb-0 sm:h-[3.56rem] group w-full" onClick={crew}>
             <p className="font-condensed tracking-[0.16875rem] text-white"><span className="font-bold mr-[0.69rem] sm:max-xl:hidden">02</span>CREW</p>
             <div className={index == 2 ? "bg-white absolute h-[1.9375rem] right-0 top-0 sm:bottom-0 sm:top-auto sm:right-3 sm:h-[0.1875rem] sm:w-[1.125rem] xl:w-[2.1875rem] xl:right-4 idk" : "bg-white absolute h-[1.9375rem] right-0 top-0 sm:bottom-0 sm:top-auto sm:right-1 sm:h-[0.1875rem] sm:w-[2rem] xl:w-[3.5rem] xl:right-2 sm:group-hover:scale-x-50 opacity-0 duration-300 sm:group-hover:opacity-50"}></div>
            </div>
            </Link>
            <Link to="tech/3">
            <div className="relative mb-[3rem] h-[0.16875rem] sm:mb-0 sm:h-[3.56rem] group w-full" onClick={tech}>
             <p className="font-condensed tracking-[0.16875rem] text-white"><span className="font-bold mr-[0.69rem] sm:max-xl:hidden">03</span>TECHNOLOGY</p>
             <div className={index == 3 ? "bg-white absolute h-[1.9375rem] right-0 top-0 sm:bottom-0 sm:top-auto sm:right-7 sm:h-[0.1875rem] sm:w-[2.6875rem] xl:w-[3.96875rem] xl:right-8 idk" : "bg-white absolute h-[1.9375rem] right-0 top-0 sm:bottom-0 sm:top-auto sm:right-7 sm:h-[0.1875rem] sm:w-[2.6875rem] xl:w-[3.96875rem] xl:right-8 sm:group-hover:scale-x-50 opacity-0 duration-300 sm:group-hover:opacity-50"}></div>
            </div>
            </Link>

            <Outlet />
        </div>
    )
}

export default Menu