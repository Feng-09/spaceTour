import { crewMembers } from "./crewMembers"
import { useState, useEffect } from "react"

function Crew({ updateIndex }) {
    useEffect(() => {
        updateIndex(2)
    }, [])

    const [index, setIndex] = useState(0)

    const displayOne = () => {
        setIndex(0)
    }
    const displayTwo = () => {
        setIndex(1)
    }
    const displayThree = () => {
        setIndex(2)
    }
    const displayFour = () => {
        setIndex(3)
    }

    let member = crewMembers[index]
    return (
        <div className="crewMobile flex flex-col items-center pt-24 sm:pt-[8.5rem] xl:pt-0 xl:pl-36 xl:pr-24 xl:justify-start sm:relative">
            <p className="font-condensed text-base tracking-[0.16875rem] sm:text-xl sm:tracking-[0.21094rem] sm:absolute sm:left-12 xl:left-36 md:text-[1.75rem] md:tracking-[0.29531rem] xl:top-48"><span className="mr-[0.75rem] opacity-25 font-bold">02</span> MEET YOUR CREW</p>
            <div className="flex flex-col items-center sm:flex-col-reverse sm:h-full sm:justify-between sm:mt-[5rem] xl:flex-row-reverse xl:items-start xl:relative xl:mt-52 xl:w-full xl:h-[36rem]">
            <div className="flex flex-col items-center sm:relative sm:top-7 xl:top-0">
                <img src={member.url} className="w-[11.07019rem] h-[13.875rem] mt-8 sm:w-[28.52325rem] sm:h-[35.75rem] xl:max-[1366px]:mt-4 min-[1366px]:max-[1440px]:mt-[-1rem] xl:self-end min-[1440px]:h-[43rem] min-[1440px]:w-[35.5045rem] min-[1440px]:mt-2" />
                <div className="bg-[#383B4B] w-[20.4375rem] h-[0.0625rem] flex-shrink-0 text-[1px] mb-8 xl:hidden"></div>
            </div>
            <div className="w-[5.5rem] h-[0.625rem] flex justify-between mb-12 sm:mt-8 sm:mb-0 xl:absolute bottom-24 left-0">
                <div className={index == 0 ? "circleOn" : "circleOff"} onClick={displayOne}></div>
                <div className={index == 1 ? "circleOn" : "circleOff"} onClick={displayTwo}></div>
                <div className={index == 2 ? "circleOn" : "circleOff"} onClick={displayThree}></div>
                <div className={index == 3 ? "circleOn" : "circleOff"} onClick={displayFour}></div>
            </div>
            <div className="xl:text-start xl:mt-32">
                <p className="h-[1.125rem] opacity-[0.4951] font-bellefair text-base sm:text-xl sm:mb-6 xl:text-[2rem] xl:mb-[2rem]">{member.title}</p>
                <p className="h-7 mt-2 font-bellefair text-2xl sm:text-[2.5rem] sm:mb-4 xl:text-[3.5rem] xl:mb-[2rem]">{member.name}</p>
                <p className="font-barlow text-[0.9375rem] text-[#D0D6F9] w-[20.4375rem] mt-4 sm:text-[1rem] sm:leading-7 sm:w-[28.625rem] xl:w-[27.75rem] xl:text-[1.125rem] xl:leading-8">{member.text}</p>
            </div>
            </div>
        </div>
    )
}

export default Crew