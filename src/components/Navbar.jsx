import { useState } from 'react'
import Logo from './Logo'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const links = [['services','Services'],['portfolio','Work'],['pricing','Pricing'],['about','About'],['faq','FAQ']]

  return(
    <>
    <nav style={{
      position:'fixed',top:0,left:0,right:0,zIndex:100,
      height:60,
      display:'flex',alignItems:'center',
      padding:'0 4%',gap:12,
      background:'rgba(0,0,0,0.98)',
      backdropFilter:'blur(20px)',
      borderBottom:'1px solid #000000,
      width:'100%',boxSizing:'border-box'
    }}>
      {/* Theme toggle — top right for mobile */}
      <div style={{marginLeft:'auto',display:'flex',gap:8,alignItems:'center'}}></div>

      {/* Hamburger FIRST — leftmost */}
      <button
        onClick={()=>setOpen(!open)}
        aria-label="Menu"
        style={{
          background:'transparent',
          border:'1px solid #000000,
          borderRadius:8,
          padding:'7px 9px',
          color:'#84cc16',
          cursor:'pointer',
          display:'flex',alignItems:'center',justifyContent:'center',
          flexShrink:0,
          transition:'border-color 0.2s'
        }}
        onMouseEnter={e=>e.currentTarget.style.borderColor='#84cc16'}
        onMouseLeave={e=>e.currentTarget.style.borderColor=#000000}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#84cc16" strokeWidth="2.5" strokeLinecap="round">
          {open
            ?<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            :<><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
          }
        </svg>
      </button>

      {/* Logo RIGHT after hamburger */}
      <a href="#" style={{display:'flex',alignItems:'center',textDecoration:'none',flexShrink:0}}>
        <Logo size={34}/>
      </a>

      {/* Spacer */}
      <div style={{flex:1}}/>

      {/* Desktop nav links */}
      <ul style={{
        display:'flex',gap:24,listStyle:'none',
        margin:0,padding:0,alignItems:'center'
      }} className="hide-mobile">
        {links.map(([id,label])=>(
          <li key={id}>
            <a href={`#${id}`}
              style={{color:'#888880',fontSize:13,fontWeight:500,textDecoration:'none',transition:'color 0.2s'}}
              onMouseEnter={e=>e.target.style.color='#fff'}
              onMouseLeave={e=>e.target.style.color='#888880'}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact"
            style={{
              background:'rgba(132,204,22,0.1)',
              border:'1px solid rgba(132,204,22,0.3)',
              color:'#84cc16',
              padding:'8px 18px',borderRadius:8,
              fontSize:13,fontWeight:700,textDecoration:'none',
              transition:'all 0.2s'
            }}
            onMouseEnter={e=>{e.target.style.background='#84cc16';e.target.style.color='#000000'}}
            onMouseLeave={e=>{e.target.style.background='rgba(132,204,22,0.1)';e.target.style.color='#84cc16'}}>
            Contact
          </a>
        </li>
        <li></li>
      </ul>
    </nav>

    {/* Mobile dropdown */}
    {open&&(
      <div style={{
        position:'fixed',top:60,left:0,right:0,zIndex:99,
        background:#000000,
        borderBottom:'1px solid #000000,
        padding:'8px 4% 16px',
        boxShadow:'0 8px 24px rgba(0,0,0,0.4)'
      }}>
        {links.map(([id,label])=>(
          <a key={id} href={`#${id}`} onClick={()=>setOpen(false)}
            style={{
              display:'block',padding:'13px 0',
              color:'#ccc',fontSize:15,fontWeight:500,
              borderBottom:'1px solid #111',textDecoration:'none'
            }}>
            {label}
          </a>
        ))}
        <a href="#contact" onClick={()=>setOpen(false)}
          style={{
            display:'block',marginTop:12,
            padding:'12px 0',
            color:'#84cc16',fontSize:15,fontWeight:700,
            textDecoration:'none'
          }}>
          Get in Touch →
        </a>
      </div>
    )}
    </>
  )
}
