import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Loader(){
  const [visible, setVisible] = useState(true)
  const [fade, setFade] = useState(false)

  useEffect(()=>{
    setTimeout(()=>setFade(true), 1800)
    setTimeout(()=>setVisible(false), 2300)
  },[])

  if(!visible) return null

  return(
    <div style={{position:'fixed',inset:0,background:'var(--black)',zIndex:9999,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',opacity:fade?0:1,transition:'opacity 0.5s ease',pointerEvents:fade?'none':'all'}}>
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:32}}>
        <Logo size={42}/>
        <span style={{fontFamily:'Urbanist,sans-serif',fontWeight:800,fontSize:26,color:'var(--white)'}}>Kali<span style={{color:'var(--blue)'}}>works</span></span>
      </div>
      <div style={{width:200,height:2,background:'var(--card)',borderRadius:2,overflow:'hidden',maxWidth:'100%'}}>
        <div style={{height:'100%',background:'linear-gradient(90deg,var(--blue),var(--blue2))',borderRadius:2,animation:'load 1.8s ease forwards'}}/>
      </div>
      <p style={{color:'var(--faint)',fontSize:11,marginTop:16,letterSpacing:3,textTransform:'uppercase'}}>Loading...</p>
      <style>{`@keyframes load{from{width:0}to{width:100%}}`}</style>
    </div>
  )
}
