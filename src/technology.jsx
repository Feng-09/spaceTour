import { technologies } from "./technologies"
import { useState, useEffect } from "react"

function Technology({ updateIndex }) {
    useEffect(() => {
        updateIndex(3)
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

    let tech = technologies[index]
    return (
        <div className="techMobile flex flex-col items-center pt-24 sm:pt-[8.5rem] pb-16 xl:pb-8 xl:pl-36">
            <p className="font-condensed text-base tracking-[0.16875rem] sm:text-xl sm:tracking-[0.21094rem] sm:absolute sm:left-12  xl:left-36 xl:top-48"><span className="mr-[0.75rem] opacity-25 font-bold">03</span> SPACE LAUNCH 101</p>
            <div className="xl:flex xl:flex-row-reverse xl:justify-between xl:ml-0 xl:w-full">
            <img src={window.screen.width < 1280 ? tech.url : tech.urlPortrait} className="my-8 w-screen sm:mt-24 sm:mb-12 xl:w-[28.1875rem] xl:h-[28.9375rem] xl:mt-32" />
            <div className="flex flex-col max-xl:items-center xl:flex-row xl:justify-start xl:mt-[13rem]">
            <div className="w-[9.5rem] h-[2.5rem] flex justify-between mb-[1.62rem] sm:w-[13.25rem] sm:mb-11 xl:flex-col xl:h-[19rem] xl:w-[5rem] xl:mr-[5rem]">
                <div className={index == 0 ? "bigCircle" : "bigCircleOff"} onClick={displayOne}>1</div>
                <div className={index == 1 ? "bigCircle" : "bigCircleOff"} onClick={displayTwo}>2</div>
                <div className={index == 2 ? "bigCircle" : "bigCircleOff"} onClick={displayThree}>3</div>
            </div>
            <div className="xl:text-start">
            <p className="font-condensed text-sm tracking-[0.14763rem] text-[#D0D6F9] sm:text-base sm:tracking-[0.16875rem]">THE TERMINOLOGY...</p>
            <h1 className="font-bellefair text-2xl h-[1.75rem] mt-[0.56rem] sm:text-[2.5rem] sm:my-4 xl:text-[3.5rem]">{tech.item}</h1>
            <p className="font-barlow tex-[#D0D6F9] text-[0.9375rem] leading-[1.5625rem] w-[20.4375rem] mt-4 sm:text-base sm:leading-7 sm:w-[28.625rem] xl:text-[1.125rem] xl:leading-8 xl:w-[27.75rem]">{tech.text}</p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Technology