import { useState } from 'react'
import Logo from './Logo'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const links = [['services','Services'],['portfolio','Work'],['pricing','Pricing'],['about','About'],['faq','FAQ']]

  return(
    <>
    <nav style={{
      position:'fixed',top:0,left:0,right:0,zIndex:100,
      display:'flex',alignItems:'center',justifyContent:'space-between',
      padding:'14px 6%',
      background:'rgba(0,0,0,0.95)',
      backdropFilter:'blur(20px)',
      borderBottom:'1px solid #1a1a1a'
    }}>
      <a href="#" style={{display:'flex',alignItems:'center',gap:10}}>
        <Logo/>
      </a>

      <ul className="hide-mobile" style={{display:'flex',gap:32,listStyle:'none'}}>
        {links.map(([id,label])=>(
          <li key={id}>
            <a href={`#${id}`} style={{color:'#999',fontSize:14,fontWeight:500,transition:'color 0.2s'}}
              onMouseEnter={e=>e.target.style.color='#fff'}
              onMouseLeave={e=>e.target.style.color='#999'}>{label}</a>
          </li>
        ))}
      </ul>

      <div style={{display:'flex',gap:10,alignItems:'center'}}>
        <a href="#contact" style={{
          background:'#84cc16',color:'#000',
          padding:'9px 22px',borderRadius:8,
          fontWeight:700,fontSize:13
        }}>Get in Touch</a>
        <button onClick={()=>setOpen(!open)}
          style={{background:'transparent',border:'1px solid #1a1a1a',borderRadius:6,padding:'8px',color:'#999',display:'none'}}
          className="mobile-menu-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open?<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>:<><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </div>
    </nav>

    {open&&(
      <div style={{position:'fixed',top:64,left:0,right:0,zIndex:99,background:'#000',borderBottom:'1px solid #1a1a1a',padding:'12px 6%'}}>
        {links.map(([id,label])=>(
          <a key={id} href={`#${id}`} onClick={()=>setOpen(false)}
            style={{display:'block',padding:'12px 0',color:'#fff',fontSize:15,fontWeight:500,borderBottom:'1px solid #111'}}>
            {label}
          </a>
        ))}
        <a href="#contact" onClick={()=>setOpen(false)}
          style={{display:'block',marginTop:12,padding:'12px 0',color:'#84cc16',fontSize:15,fontWeight:700}}>
          Get in Touch →
        </a>
      </div>
    )}
    <style>{`@media(min-width:601px){.mobile-menu-btn{display:none!important}}@media(max-width:600px){.mobile-menu-btn{display:flex!important}}`}</style>
    </>
  )
}
