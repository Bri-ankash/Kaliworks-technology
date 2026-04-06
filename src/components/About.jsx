import { useState } from 'react'

const ABOUT_ITEMS = [
  {title:'Who We Are',desc:"Kaliworks Technologies is a Nairobi-based software development studio. We build web applications, mobile-responsive platforms, and SaaS products for Kenyan and African businesses. Founded by developers who understand Africa's unique market conditions."},
  {title:'What We Do',desc:"We design, build, and deploy full-stack software products. From your first wireframe to a live production system — database design, backend APIs, frontend interfaces, payment integrations, and cloud hosting."},
  {title:'Our Approach',desc:"We work closely with founders and business owners to understand the actual problem before writing a single line of code. We ship fast, iterate based on real feedback, and stay available after launch."},
]

function Chevron({open}){
  return(
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#84cc16" strokeWidth="2" strokeLinecap="round"
      style={{transform:open?'rotate(180deg)':'none',transition:'transform 0.3s',flexShrink:0}}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )
}

export default function About(){
  const [open, setOpen] = useState(null)

  return(
    <section id="about" style={{background:'#000',borderTop:'1px solid #1a1a1a'}}>
      <div style={{maxWidth:900,margin:'0 auto'}}>
        <p className="eyebrow reveal">About Us</p>
        <h2 className="sec-title reveal">Who Are We</h2>
        <p className="sec-sub reveal" style={{marginBottom:32}}>A lean, technical team that ships real products.</p>

        <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:28}}>
          {ABOUT_ITEMS.map((item,i)=>(
            <div key={i} className="reveal drawer-item">
              <button className="drawer-btn" onClick={()=>setOpen(open===i?null:i)}>
                <span>{item.title}</span>
                <Chevron open={open===i}/>
              </button>
              {open===i&&(
                <div className="drawer-content">
                  <p style={{color:'#999',fontSize:14,lineHeight:1.8,marginTop:12}}>{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="reveal" style={{background:'#0a0a0a',border:'1px solid #1a1a1a',borderRadius:12,padding:24}}>
          <p style={{fontWeight:700,fontSize:13,color:'#84cc16',marginBottom:18,textTransform:'uppercase',letterSpacing:2,fontSize:11}}>The Team</p>
          <div style={{display:'flex',gap:16,alignItems:'flex-start',flexWrap:'wrap'}}>
            <div style={{width:64,height:64,borderRadius:12,background:'#111',border:'1px solid #1a1a1a',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,overflow:'hidden'}}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#84cc16" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div>
              <div style={{fontWeight:700,fontSize:16,color:'#fff',marginBottom:3}}>Brian Kalali</div>
              <div style={{color:'#84cc16',fontSize:12,fontWeight:600,marginBottom:8}}>Founder & Lead Developer</div>
              <p style={{color:'#999',fontSize:13,lineHeight:1.7,maxWidth:460}}>
                Full-stack developer building SaaS and marketplace products from Nairobi. Specializes in Python, React, and M-Pesa integrations. Creator of Servigo, Smart Pochi, and Chama na Kash.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
