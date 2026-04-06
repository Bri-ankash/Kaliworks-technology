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
      padding:'0 5%',height:64,
      background:'rgba(0,0,0,0.97)',
      backdropFilter:'blur(20px)',
      borderBottom:'1px solid #1a1a1a'
    }}>
      <a href="#" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
        <Logo/>
      </a>

      {/* Desktop links */}
      <ul style={{display:'flex',gap:28,listStyle:'none',margin:0,padding:0}} className="hide-mobile">
        {links.map(([id,label])=>(
          <li key={id}>
            <a href={`#${id}`} style={{color:'#888',fontSize:14,fontWeight:500,transition:'color 0.2s',textDecoration:'none'}}
              onMouseEnter={e=>e.target.style.color='#fff'}
              onMouseLeave={e=>e.target.style.color='#888'}>{label}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger only */}
      <button onClick={()=>setOpen(!open)}
        style={{
          background:'transparent',
          border:'1px solid #1a1a1a',
          borderRadius:8,padding:'8px 10px',
          color:'#888',cursor:'pointer',
          display:'flex',alignItems:'center',justifyContent:'center'
        }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open
            ?<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            :<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
          }
        </svg>
      </button>
    </nav>

    {/* Dropdown menu */}
    {open&&(
      <div style={{
        position:'fixed',top:64,left:0,right:0,zIndex:99,
        background:'#000',borderBottom:'1px solid #1a1a1a',
        padding:'12px 5%'
      }}>
        {links.map(([id,label])=>(
          <a key={id} href={`#${id}`} onClick={()=>setOpen(false)}
            style={{
              display:'block',padding:'12px 0',
              color:'#ccc',fontSize:15,fontWeight:500,
              borderBottom:'1px solid #111',textDecoration:'none'
            }}>
            {label}
          </a>
        ))}
        <a href="#contact" onClick={()=>setOpen(false)}
          style={{display:'block',marginTop:12,padding:'12px 0',color:'#84cc16',fontSize:15,fontWeight:700,textDecoration:'none'}}>
          Get in Touch →
        </a>
      </div>
    )}
    </>
  )
}
