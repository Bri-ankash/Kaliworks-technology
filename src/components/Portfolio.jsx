import { useState } from 'react'

const PROJECTS = [
  {name:'Servigo',category:'Service Marketplace',desc:'Kenya\'s intelligent service marketplace. Verified providers, M-Pesa escrow payments, real-time tracking, emergency mode, and Servigo Score trust algorithm. 20 categories, 180+ services.',url:'https://servigo-8ri4.onrender.com',tech:'FastAPI, React, PostgreSQL, M-Pesa'},
  {name:'Smart Pochi',category:'Fintech SaaS',desc:'M-Pesa statement analyzer for Kenyan businesses. Upload PDF or CSV statements and get instant financial analysis — income, expenses, money leaks, health score, tax estimates, and supplier tracking.',url:'https://smart-pochi.onrender.com',tech:'FastAPI, Jinja2, PostgreSQL, Chart.js'},
  {name:'Chama na Kash',category:'Group Finance',desc:'Digital chama management platform. Track contributions, loans, meetings, and member records. Built for Kenya\'s savings groups with M-Pesa integration.',url:'https://chamanakash.onrender.com',tech:'Django, Python, PostgreSQL'},
]

export default function Portfolio(){
  const [open, setOpen] = useState(null)
  return(
    <section style={{background:'#3d3d3d',borderTop:'1px solid #4a4a4a'}}>
      <div style={{maxWidth:800,margin:'0 auto'}}>
        <p className="eyebrow reveal">Our Work</p>
        <h2 className="sec-title reveal">Projects We Are Proud Of</h2>
        <p className="sec-sub reveal" style={{marginBottom:32}}>Live products built and deployed for the Kenyan market.</p>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          {PROJECTS.map((p,i)=>(
            <div key={i} className="reveal" style={{border:'1px solid #4a4a4a',borderRadius:10,overflow:'hidden',background:'#3d3d3d'}}>
              <button onClick={()=>setOpen(open===i?null:i)}
                style={{width:'100%',padding:'16px 20px',display:'flex',justifyContent:'space-between',alignItems:'center',background:'transparent',border:'none',cursor:'pointer',textAlign:'left',gap:12}}>
                <div>
                  <div style={{fontSize:15,fontWeight:700,color:'#fff',marginBottom:2}}>{p.name}</div>
                  <div style={{fontSize:12,color:'#84cc16',fontWeight:600}}>{p.category}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" style={{transform:open===i?'rotate(180deg)':'none',transition:'transform 0.3s',flexShrink:0}}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {open===i&&<div style={{padding:'0 20px 20px',borderTop:'1px solid #4a4a4a'}}>
                <p style={{color:'#999',fontSize:14,lineHeight:1.8,marginTop:12,marginBottom:12}}>{p.desc}</p>
                <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:14}}>
                  {p.tech.split(', ').map(t=>(
                    <span key={t} style={{background:'rgba(132,204,22,0.1)',color:'#84cc16',fontSize:11,fontWeight:600,padding:'3px 10px',borderRadius:100}}>{t}</span>
                  ))}
                </div>
                <a href={p.url} target="_blank" rel="noreferrer"
                  style={{display:'inline-flex',alignItems:'center',gap:6,padding:'8px 18px',borderRadius:8,background:'#18181B',color:'#fff',fontSize:13,fontWeight:700}}>
                  View Live Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
