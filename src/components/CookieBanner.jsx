import { useState, useEffect } from 'react'

export default function CookieBanner(){
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    const accepted = localStorage.getItem('nc_cookie')
    if(!accepted) setTimeout(()=>setVisible(true), 2500)
  },[])

  const accept = ()=>{ localStorage.setItem('nc_cookie','1'); setVisible(false) }
  const decline = ()=>{ setVisible(false) }

  if(!visible) return null

  return(
    <div style={{position:'fixed',bottom:20,left:'50%',transform:'translateX(-50%)',zIndex:9998,width:'calc(100% - 40px)',maxWidth:680,background:'var(--card2)',border:'1px solid var(--border2)',borderRadius:16,padding:'20px 24px',boxShadow:'0 20px 60px rgba(0,0,0,0.6)',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:14}}>
      <div style={{flex:1,minWidth:200}}>
        <div style={{fontFamily:'Urbanist,sans-serif',fontWeight:700,fontSize:14,marginBottom:4}}>🍪 We use cookies</div>
        <p style={{color:'var(--muted)',fontSize:12,lineHeight:1.6,fontWeight:300}}>We use cookies to improve your experience. By using Kaliworks Technologies, you agree to our use of cookies. <strong style={{color:'var(--faint)'}}>Note: We are not certified IT consultants — all guidance is general assistance only.</strong></p>
      </div>
      <div style={{display:'flex',gap:10,flexShrink:0}}>
        <button onClick={decline} style={{background:'transparent',border:'1px solid var(--border)',color:'var(--muted)',padding:'8px 18px',borderRadius:8,fontWeight:600,fontSize:13,cursor:'pointer',fontFamily:'Manrope,sans-serif'}}>Decline</button>
        <button onClick={accept} style={{background:'var(--blue)',color:'#292121',padding:'8px 18px',borderRadius:8,fontWeight:700,fontSize:13,cursor:'pointer',border:'none',fontFamily:'Manrope,sans-serif'}}>Accept</button>
      </div>
    </div>
  )
}
