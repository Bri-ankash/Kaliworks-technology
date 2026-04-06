import { useEffect, useState } from 'react'

export default function Hero(){
  const [v, setV] = useState(false)
  useEffect(()=>{ setTimeout(()=>setV(true),100) },[])
  const t = (d='0s')=>({opacity:v?1:0,transform:v?'translateY(0)':'translateY(20px)',transition:`all 0.7s ${d} ease`})
  return(
    <section style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'130px 6% 90px',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(14,165,233,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.03) 1px,transparent 1px)',backgroundSize:'70px 70px',maskImage:'radial-gradient(ellipse 90% 90% at 50% 50%,black 0%,transparent 75%)'}}/>
      <div style={{position:'absolute',width:700,height:700,borderRadius:'50%',background:'radial-gradient(circle,rgba(14,165,233,0.09) 0%,transparent 70%)',top:'50%',left:'50%',transform:'translate(-50%,-50%)',pointerEvents:'none'}}/>
      <div style={{position:'relative',zIndex:1,maxWidth:880}}>
        <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(14,165,233,0.08)',border:'1px solid rgba(14,165,233,0.25)',color:'var(--blue2)',padding:'7px 18px',borderRadius:100,fontSize:12,fontWeight:600,letterSpacing:'1.5px',textTransform:'uppercase',marginBottom:30,...t()}}>
          <span style={{width:7,height:7,borderRadius:'50%',background:'var(--blue)',boxShadow:'0 0 8px var(--blue)',animation:'blink 1.5s infinite',display:'inline-block'}}/>
          Nairobi, Kenya · Available Now
        </div>
        <h1 style={{fontFamily:'Urbanist,sans-serif',fontSize:'clamp(42px,8vw,84px)',fontWeight:800,lineHeight:1.03,letterSpacing:'-3px',marginBottom:24,...t('0.12s')}}>
          We Build <span style={{color:'#2563EB'}}>Digital</span><br/>Systems That<br/><span style={{color:'var(--faint)'}}>Scale & Grow</span>
        </h1>
        <p style={{fontSize:'clamp(16px,1.8vw,19px)',color:'#71717A',lineHeight:1.75,maxWidth:580,margin:'0 auto 44px',fontWeight:300,...t('0.24s')}}>
          Kaliworks Technologies designs and builds websites, mobile apps, SaaS platforms, and web management systems for businesses across Kenya and beyond.
        </p>
        <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap',...t('0.36s')}}>
          <a href="#services" style={{background:'var(--blue)',color:'#000',padding:'14px 32px',borderRadius:10,fontWeight:700,fontSize:15,boxShadow:'0 0 40px rgba(14,165,233,0.25)'}}>Explore Services</a>
          <a href="#contact" style={{background:'transparent',color:'var(--blue2)',padding:'14px 32px',borderRadius:10,fontWeight:600,fontSize:15,border:'1px solid rgba(14,165,233,0.3)'}}>Start a Project →</a>
        </div>
      </div>
    </section>
  )
}
