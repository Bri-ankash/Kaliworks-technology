import { useState } from 'react'

const STEPS = [
  {n:'01',title:'Discovery & Planning',desc:'We listen, ask the right questions, and produce a detailed blueprint with clear timelines before any work begins.'},
  {n:'02',title:'Design & Prototype',desc:'Wireframes and prototypes so you see and feel the product before we write a single line of code.'},
  {n:'03',title:'Build & Test',desc:'Agile development with weekly updates. Rigorous testing on all devices before we ship.'},
  {n:'04',title:'Launch & Support',desc:'Smooth deployment, full handover, staff training, and ongoing support to keep everything running perfectly.'},
]

const CHIPS = ['React','Next.js','Django','Node.js','Python','PostgreSQL','MongoDB','Flutter','React Native','TypeScript','AWS','Docker','Redis','Supabase','Vercel','M-Pesa API','REST APIs','GraphQL']

function Chevron({open}){
  return(
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#84cc16" strokeWidth="2" strokeLinecap="round"
      style={{transform:open?'rotate(180deg)':'none',transition:'transform 0.3s',flexShrink:0}}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )
}

export default function Process(){
  const [open, setOpen] = useState(false)

  return(
    <section id="process" style={{background:'#000',borderTop:'1px solid #1a1a1a'}}>
      <div style={{maxWidth:900,margin:'0 auto'}}>
        <p className="eyebrow reveal">How We Work</p>
        <h2 className="sec-title reveal">From Idea to Live<br/>in 4 Clear Steps</h2>
        <p className="sec-sub reveal" style={{marginBottom:32}}>Transparent and structured — with you at every stage.</p>

        <div className="reveal drawer-item">
          <button className="drawer-btn" onClick={()=>setOpen(!open)}>
            <span style={{color:'#fff',fontSize:15,fontWeight:600}}>Our 4-Step Process</span>
            <Chevron open={open}/>
          </button>
          {open&&(
            <div style={{padding:'0 20px 20px',borderTop:'1px solid #1a1a1a'}}>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:12,marginTop:16}} className="proc-grid">
                {STEPS.map(s=>(
                  <div key={s.n} style={{background:'#111',border:'1px solid #1a1a1a',borderRadius:10,padding:20}}>
                    <div style={{fontSize:42,fontWeight:800,color:'rgba(132,204,22,0.12)',letterSpacing:'-3px',lineHeight:1,marginBottom:12}}>{s.n}</div>
                    <h3 style={{fontSize:14,fontWeight:700,marginBottom:6,color:'#fff'}}>{s.title}</h3>
                    <p style={{color:'#999',fontSize:12,lineHeight:1.7}}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="reveal" style={{marginTop:32}}>
          <p className="eyebrow" style={{marginBottom:16}}>Technologies We Use</p>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            {CHIPS.map(c=>(
              <span key={c} style={{
                background:'#0a0a0a',border:'1px solid #1a1a1a',
                color:'#999',padding:'7px 14px',
                borderRadius:100,fontSize:12,fontWeight:500,
                transition:'all 0.2s',cursor:'default'
              }}
              onMouseEnter={e=>{e.target.style.background='rgba(132,204,22,0.08)';e.target.style.borderColor='rgba(132,204,22,0.3)';e.target.style.color='#84cc16'}}
              onMouseLeave={e=>{e.target.style.background='#0a0a0a';e.target.style.borderColor='#1a1a1a';e.target.style.color='#999'}}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
