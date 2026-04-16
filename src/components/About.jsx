import { useState } from 'react'

const ABOUT_ITEMS = [
  {title:'Who We Are',desc:"Kaliworks Technologies is a Nairobi-based software development studio. We build web applications, mobile-responsive platforms, and SaaS products for Kenyan and African businesses. Founded by developers who understand Africa's unique market conditions."},
  {title:'What We Do',desc:"We design, build, and deploy full-stack software products. From your first wireframe to a live production system — database design, backend APIs, frontend interfaces, payment integrations, and cloud hosting."},
  {title:'Our Approach',desc:"We work closely with founders and business owners to understand the actual problem before writing a single line of code. We ship fast, iterate based on real feedback, and stay available after launch."},
]

function Chevron({open}){
  return(
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"
      style={{transform:open?'rotate(180deg)':'none',transition:'transform 0.3s',flexShrink:0}}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )
}

export default function About(){
  const [open, setOpen] = useState(null)

  return(
    <section id="about" style={{background:#000000,borderTop:'1px solid #000000}}>
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
                  <p style={{color:'#888880',fontSize:14,lineHeight:1.8,marginTop:12}}>{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="reveal" style={{background:#000000,border:'1px solid #000000,borderRadius:12,padding:24}}>
          <p style={{fontWeight:700,fontSize:11,color:'#fbbf24',marginBottom:18,textTransform:'uppercase',letterSpacing:2}}>The Team</p>
          <div style={{display:'flex',gap:16,alignItems:'flex-start',flexWrap:'wrap'}}>
            {/* Brian's photo */}
            <div style={{
              width:72,height:72,borderRadius:14,
              border:'2px solid #fbbf24',
              flexShrink:0,overflow:'hidden',
              boxShadow:'0 0 14px rgba(251,191,36,0.2)'
            }}>
              <img
                src="/profile.png"
                alt="Brian Kalali"
                style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top'}}
                onError={e=>{
                  e.target.style.display='none'
                  e.target.parentElement.style.background=#000000
                  e.target.parentElement.innerHTML='<span style="color:#fbbf24;font-size:24px;font-weight:800;display:flex;align-items:center;justify-content:center;height:100%">B</span>'
                }}
              />
            </div>
            <div style={{flex:1,minWidth:200}}>
              <div style={{fontWeight:700,fontSize:16,color:'#fff',marginBottom:3}}>Brian Kalali</div>
              <div style={{color:'#84cc16',fontSize:12,fontWeight:600,marginBottom:10}}>Founder & Lead Developer</div>
              <p style={{color:'#888880',fontSize:13,lineHeight:1.8,maxWidth:480}}>
                Kenya-based full-stack developer crafting scalable, practical software. Experienced in Python, React, and M-Pesa integrations, and passionate about creating solutions that make a real impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
