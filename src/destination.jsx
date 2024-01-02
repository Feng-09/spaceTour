import { destinations } from './destinations'
import { useState, useEffect } from 'react'

function Destination({ updateIndex }) {
    useEffect(() => {
        updateIndex(1)
    }, [])
    const [index, setIndex] = useState(0)

    const displayMoon = () => {
        setIndex(0)
    }
    const displayMars = (e) => {
        setIndex(1)
    }
    const displayEuropa = () => {
        setIndex(2)
    }
    const displayTitan = () => {
        setIndex(3)
    }

    let choice = destinations[index]
    return (
        <div className="destinationMobile flex flex-col items-center pt-24 sm:pt-[8.5rem] xl:pt-48">
            <p className="font-condensed text-base tracking-[0.16875rem] sm:text-xl sm:tracking-[0.21094rem] sm:absolute sm:left-12 xl:left-36 md:text-[1.75rem] md:tracking-[0.29531rem]"><span className="mr-[0.75rem] opacity-25 font-bold">01</span> PICK YOUR DESTINATION</p>
            <div className="flex flex-col items-center sm:pb-16 xl:flex-row xl:justify-between xl:text-start xl:w-full xl:px-24 xl:items-center xl:mt-12 xl:pl-48 xl:pb-16 min-[1440px]:pb-36">
            <img src={choice.url} className="w-48 h-48 my-8 sm:w-72 sm:h-72 sm:my-16 xl:w-[24rem] xl:h-[24rem]" />
            <div className="max-xl:flex flex-col items-center">
            <div className="w-[14.84375rem] h-[1.75rem] flex justify-between flex-shrink-0 sm:w-72 sm:h-[2.125rem]">
                <div className="group">
                 <p className="font-condensed text-[0.875rem] tracking-[0.147625rem] sm:mb-1 sm:text-base sm:tracking-[0.16875rem]" onClick={displayMoon}>MOON</p>
                 <div className={index == 0 ? "underLine" : "nahLine w-0 group-hover:w-[2.5rem] opacity-30"}></div>
                </div>
                <div className="group">
                 <p className="font-condensed text-[0.875rem] tracking-[0.147625rem] sm:mb-1 sm:text-base sm:tracking-[0.16875rem]" onClick={displayMars}>MARS</p>
                 <div className={index == 1 ? "underLine" : "nahLine  w-0 group-hover:w-[2.5rem] opacity-30"}></div>
                </div>
                <div className="group">
                 <p className="font-condensed text-[0.875rem] tracking-[0.147625rem] sm:mb-1 sm:text-base sm:tracking-[0.16875rem]" onClick={displayEuropa}>EUROPA</p>
                 <div className={index == 2 ? "underLine" : "nahLine  w-0 group-hover:w-[2.5rem] opacity-30"}></div>
                </div>
                <div className="group">
                 <p className="font-condensed text-[0.875rem] tracking-[0.147625rem] sm:mb-1 sm:text-base sm:tracking-[0.16875rem]" onClick={displayTitan}>TITAN</p>
                 <div className={index == 3 ? "underLine" : "nahLine  w-0 group-hover:w-[2.5rem] opacity-30"}></div>
                </div>
            </div>
            
            <h1 className="font-bellefair text-[3.5rem] h-16 my-4 text-center sm:my-8 sm:text-[5rem] xl:text-start xl:text-[6rem] xl:mt-4">{choice.name}</h1>
            <p className="font-barlow text-[0.9375rem] leading-[1.5625rem] w-[20.4375rem] sm:w-[35.8125rem] sm:text-base sm:leading-7 xl:text-[1.125rem] xl:leading-8 xl:w-[27.75rem]">{choice.text}</p>
            <div className="bg-[#383B4B] h-[1px] w-[20.4375rem] my-8 text-[1px] sm:mt-10 sm:mb-7 sm:w-[35.8125rem] xl:w-[27.75rem]">.</div>
            <div className="sm:grid sm:grid-rows-2 sm:grid-flow-col sm:gap-x-28 sm:gap-y-0 sm:h-[3.75rem] xl:gap-x-10">
             <p className="font-condensed text-sm tracking-[0.14763rem] mb-[0.75rem] text-[#D0D6F9]">AVG. DISTANCE</p>
             <p className="font-bellefair text-[1.75rem] mb-8 h-8 uppercase">{choice.distance}</p>
             <p className="font-condensed text-sm tracking-[0.14763rem] mb-[0.75rem] text-[#D0D6F9] uppercase">Est. travel time</p>
             <p className="font-bellefair text-[1.75rem] h-8 uppercase mb-16 min-[1440px]:mb-[36rem]">{choice.time}</p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Destination