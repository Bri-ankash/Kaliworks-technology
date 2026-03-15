import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Industries from './components/Industries'
import BuiltForKenya from './components/BuiltForKenya'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'
import CookieBanner from './components/CookieBanner'
import AdminReviews from './components/AdminReviews'

function MainSite(){
  useEffect(()=>{
    const reveals=document.querySelectorAll('.reveal')
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach((entry,i)=>{
        if(entry.isIntersecting) setTimeout(()=>entry.target.classList.add('visible'),i*60)
      })
    },{ threshold:0.07 })
    reveals.forEach(el=>observer.observe(el))
    return ()=>observer.disconnect()
  },[])

  return(
    <>
      <ScrollProgress/>
      <CursorGlow/>
      <Loader/>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <Stats/>
      <Services/>
      <WhyUs/>
      <Industries/>
      <BuiltForKenya/>
      <About/>
      <Portfolio/>
      <Pricing/>
      <Process/>
      <FAQ/>
      <Reviews/>
      <Contact/>
      <Footer/>
      <WhatsApp/>
      <CookieBanner/>
    </>
  )
}

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite/>}/>
        <Route path="/kali-admin" element={<AdminReviews/>}/>
      </Routes>
    </BrowserRouter>
  )
}
