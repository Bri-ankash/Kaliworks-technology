import { useEffect, useState } from 'react'

export default function Hero(){
  const [v, setV] = useState(false)
  useEffect(()=>{ setTimeout(()=>setV(true),100) },[])
  const t = (d='0s')=>({opacity:v?1:0,transform:v?'translateY(0)':'translateY(20px)',transition:`all 0.7s ${d} ease`})

  return(
    <section style={{
      minHeight:'100vh',display:'flex',alignItems:'center',
      justifyContent:'center',textAlign:'center',
      padding:'120px 5% 80px',
      position:'relative',overflow:'hidden',
      background:'#000'
    }}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(132,204,22,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(132,204,22,0.025) 1px,transparent 1px)',backgroundSize:'60px 60px',maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 75%)'}}/>
      <div style={{position:'absolute',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(132,204,22,0.04) 0%,transparent 70%)',top:'50%',left:'50%',transform:'translate(-50%,-50%)',pointerEvents:'none'}}/>

      <div style={{position:'relative',zIndex:1,maxWidth:860,width:'100%'}}>
        <h1 style={{
          fontSize:'clamp(36px,7vw,78px)',
          fontWeight:800,lineHeight:1.05,
          letterSpacing:'-2px',marginBottom:20,
          color:'#fff',
          ...t()
        }}>
          We Build <span style={{color:'#84cc16'}}>Digital</span><br/>
          Systems That{' '}
          <span style={{color:'#fbbf24'}}>Scale</span>
        </h1>

        <p style={{
          fontSize:'clamp(14px,1.6vw,17px)',
          color:'#888',lineHeight:1.8,
          maxWidth:520,margin:'0 auto 40px',
          fontWeight:400,
          ...t('0.15s')
        }}>
          Kaliworks Technologies designs and builds websites, mobile apps, SaaS platforms,
          and management systems for businesses across Kenya and beyond.
        </p>

        <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap',...t('0.3s')}}>
          <a href="#services" style={{
            background:'#84cc16',color:'#000',
            padding:'13px 28px',borderRadius:10,
            fontWeight:700,fontSize:14,
            boxShadow:'0 0 24px rgba(132,204,22,0.2)',
            textDecoration:'none',
            display:'inline-block'
          }}>Explore Services</a>
          <a href="#contact" style={{
            background:'transparent',color:'#84cc16',
            padding:'13px 28px',borderRadius:10,
            fontWeight:600,fontSize:14,
            border:'1px solid rgba(132,204,22,0.3)',
            textDecoration:'none',
            display:'inline-block'
          }}>Start a Project →</a>
        </div>
      </div>
    </section>
  )
}
