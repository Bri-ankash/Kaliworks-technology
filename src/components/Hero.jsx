import { useEffect, useState } from 'react'

export default function Hero(){
  const [v, setV] = useState(false)
  useEffect(()=>{ setTimeout(()=>setV(true),100) },[])
  const t = (d='0s')=>({opacity:v?1:0,transform:v?'translateY(0)':'translateY(20px)',transition:`all 0.7s ${d} ease`})

  return(
    <section style={{
      minHeight:'100vh',display:'flex',alignItems:'center',
      justifyContent:'center',textAlign:'center',
      padding:'130px 6% 90px',
      position:'relative',overflow:'hidden',
      background:'#000'
    }}>
      {/* Grid bg */}
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(132,204,22,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(132,204,22,0.03) 1px,transparent 1px)',backgroundSize:'70px 70px',maskImage:'radial-gradient(ellipse 90% 90% at 50% 50%,black 0%,transparent 75%)'}}/>
      <div style={{position:'absolute',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(132,204,22,0.05) 0%,transparent 70%)',top:'50%',left:'50%',transform:'translate(-50%,-50%)',pointerEvents:'none'}}/>

      <div style={{position:'relative',zIndex:1,maxWidth:900}}>
        <h1 style={{fontSize:'clamp(40px,8vw,80px)',fontWeight:800,lineHeight:1.03,letterSpacing:'-3px',marginBottom:24,color:'#fff',...t()}}>
          We Build <span style={{color:'#84cc16'}}>Digital</span><br/>
          Systems That<br/>
          <span style={{color:'#fbbf24'}}>Scale & Grow</span>
        </h1>

        <p style={{fontSize:'clamp(15px,1.8vw,18px)',color:'#999',lineHeight:1.8,maxWidth:560,margin:'0 auto 44px',fontWeight:400,...t('0.15s')}}>
          Kaliworks Technologies designs and builds websites, mobile apps, SaaS platforms,
          and web management systems for businesses across Kenya and beyond.
        </p>

        <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap',...t('0.3s')}}>
          <a href="#services" style={{
            background:'#84cc16',color:'#000',
            padding:'14px 32px',borderRadius:10,
            fontWeight:700,fontSize:15,
            boxShadow:'0 0 30px rgba(132,204,22,0.2)'
          }}>Explore Services</a>
          <a href="#contact" style={{
            background:'transparent',color:'#84cc16',
            padding:'14px 32px',borderRadius:10,
            fontWeight:600,fontSize:15,
            border:'1px solid rgba(132,204,22,0.3)'
          }}>Start a Project →</a>
        </div>
      </div>
    </section>
  )
}
