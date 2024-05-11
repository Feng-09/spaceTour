import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './home.jsx'
import Destination from './destination.jsx'
import Crew from './crew.jsx'
import Technology from './technology.jsx'
import Menu from './menu.jsx'
import logoMobile from "../assets/Group 2 Copy.svg"
import logoTablet from "../assets/Group 2.svg"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function App() {
  const [menu, setMenu] = useState(false)
  const [index, setIndex] = useState(0)
  const [pageTrans, setPageTrans] = useState(false)

  
useGSAP(() => {
  const tl = gsap.timeline()
  tl.to('.pageTrans', { y: '100%', duration: 0.5, ease: 'power3.out',  stagger: {
    each: 0.05,
    from: 'end',
    ease: 'power1.inOut'
  }})
  tl.to('.pageTrans', { y: '-100%', duration: 0.5, ease: 'power3.inOut(10)',  stagger: {
    each: 0.05,
    ease: 'power1.inOut'
  }})
}, [pageTrans])

  const handleMenu = (e) => {
    setMenu(!menu)
      e.currentTarget.children[0].classList.toggle("active")
      e.currentTarget.children[1].classList.toggle("active")
      e.currentTarget.children[2].classList.toggle("active")
      
    if (menu == false) {
      e.currentTarget.children[0].classList.remove("rest")
      e.currentTarget.children[1].classList.remove("rest")
      e.currentTarget.children[2].classList.remove("rest")
    } else {
      e.currentTarget.children[0].classList.add("rest")
      e.currentTarget.children[1].classList.add("rest")
      e.currentTarget.children[2].classList.add("rest")
    }    
  }

 return (
  <>
  <div className="w-screen h-full fixed top-[-100%] z-50 bg-[#c3c7e97a] backdrop-blur-[40.774227142333984px] pageTrans"></div>
  <div className="w-screen h-full fixed top-[-100%] z-40 bg-[#2b306171] backdrop-blur-[40.774227142333984px] pageTrans"></div>
  <div className="w-screen h-full fixed top-[-100%] z-30 bg-[#100e2969] backdrop-blur-[40.774227142333984px] pageTrans"></div>
  <main className='w-full h-full object-cover'>
    <img src={window.screen.width < 640 ? logoMobile : logoTablet} className="fixed top-6 left-6 sm:top-9 sm:left-9 xl:top-16 xl:left-14 z-10" />
    {window.screen.width >= 1280 ? (<div className="w-[29.5625rem] h-[1px] bg-white opacity-25 text-[1px] fixed top-[5.5rem] left-36 z-10">.</div>) : null}
    {window.screen.width < 640 ? <Hamburger handleMenu={handleMenu} /> : null}
    <Routes>
      <Route path="/" element={<Home setIndex={setIndex} setPageTrans={setPageTrans} />} />
      <Route path="/destination" element={<Destination updateIndex={setIndex} setPageTrans={setPageTrans} />} />
      <Route path="/crew" element={<Crew updateIndex={setIndex} setPageTrans={setPageTrans} />} />
      <Route path="/tech" element={<Technology updateIndex={setIndex} setPageTrans={setPageTrans} />} />
    </Routes>
    <Menu index={index} setIndex={setIndex} menu={menu} setPageTrans={setPageTrans} />
  </main>
  </>
 )
}

function Hamburger({ handleMenu }) {
  return(
    <div className="fixed top-8 right-6 z-10" onClick={handleMenu}>
      <div className="h-[3px] w-6 bg-white mb-[4px] rounded-md" id="line1"></div>
      <div className="h-[3px] w-6 bg-white mb-[4px] rounded-md" id="line2"></div>
      <div className="h-[3px] w-6 bg-white rounded-md" id="line3"></div>
    </div>
  )
}

export default App