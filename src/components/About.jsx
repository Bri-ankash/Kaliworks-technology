import { useState } from 'react'

const TEAM = [
  {name:'Brian Kalali',role:'Founder & Lead Developer',bio:'Full-stack developer building SaaS and marketplace products from Nairobi. Specializes in Python, React, and M-Pesa integrations.'},
]

const ABOUT_ITEMS = [
  {title:'Who We Are',desc:'Kaliworks Technologies is a Nairobi-based software development studio. We build web applications, mobile-responsive platforms, and SaaS products for Kenyan and African businesses. Founded by developers who understand Africa\'s unique market conditions.'},
  {title:'What We Do',desc:'We design, build, and deploy full-stack software products. From your first wireframe to a live production system — database design, backend APIs, frontend interfaces, payment integrations, and cloud hosting.'},
  {title:'Our Approach',desc:'We work closely with founders and business owners to understand the actual problem before writing a single line of code. We ship fast, iterate based on real feedback, and stay available after launch.'},
]

export default function About(){
  const [open, setOpen] = useState(0)
  return(
    <section style={{background:'#F4F4F5',borderTop:'1px solid #E4E4E7'}}>
      <div style={{maxWidth:800,margin:'0 auto'}}>
        <p className="eyebrow reveal">About Us</p>
        <h2 className="sec-title reveal">Who Are We</h2>
        <p className="sec-sub reveal" style={{marginBottom:32}}>A lean, technical team that ships real products.</p>
        <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:32}}>
          {ABOUT_ITEMS.map((item,i)=>(
            <div key={i} className="reveal" style={{border:'1px solid #E4E4E7',borderRadius:10,overflow:'hidden',background:'#fff'}}>
              <button onClick={()=>setOpen(open===i?null:i)}
                style={{width:'100%',padding:'16px 20px',display:'flex',justifyContent:'space-between',alignItems:'center',background:'transparent',border:'none',cursor:'pointer',textAlign:'left',gap:12}}>
                <span style={{fontSize:15,fontWeight:600,color:'#18181B'}}>{item.title}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" style={{transform:open===i?'rotate(180deg)':'none',transition:'transform 0.3s',flexShrink:0}}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {open===i&&<div style={{padding:'0 20px 16px',borderTop:'1px solid #E4E4E7'}}>
                <p style={{color:'#71717A',fontSize:14,lineHeight:1.8,marginTop:12}}>{item.desc}</p>
              </div>}
            </div>
          ))}
        </div>
        {/* Team */}
        <div className="reveal" style={{background:'#fff',border:'1px solid #E4E4E7',borderRadius:12,padding:24}}>
          <p style={{fontWeight:700,fontSize:14,color:'#18181B',marginBottom:16}}>The Team</p>
          {TEAM.map((m,i)=>(
            <div key={i} style={{display:'flex',gap:14,alignItems:'flex-start'}}>
              <div style={{width:48,height:48,borderRadius:12,background:'#DBEAFE',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:18,fontWeight:800,color:'#2563EB'}}>
                {m.name[0]}
              </div>
              <div>
                <div style={{fontWeight:700,fontSize:14,color:'#18181B',marginBottom:2}}>{m.name}</div>
                <div style={{color:'#2563EB',fontSize:12,fontWeight:600,marginBottom:4}}>{m.role}</div>
                <p style={{color:'#71717A',fontSize:13,lineHeight:1.6}}>{m.bio}</p>
              </div>
            </div>
          ))}
          <p style={{color:'#71717A',fontSize:13,marginTop:16,fontStyle:'italic'}}>More team members joining soon. Portfolio of other developers will be added here.</p>
        </div>
      </div>
    </section>
  )
}
