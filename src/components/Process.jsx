import { useState } from 'react'

export default function Process(){
  const [open,setOpen]=useState(false)

  const steps=[
    {n:'01',title:'Discovery & Planning',desc:'We listen, plan, and define clear timelines.'},
    {n:'02',title:'Design & Prototype',desc:'We design and prototype before development.'},
    {n:'03',title:'Build & Test',desc:'We develop and test across all devices.'},
    {n:'04',title:'Launch & Support',desc:'We deploy and support your system.'},
  ]

  return(
    <section id="process" style={{background:'#000',padding:'80px 6%'}}>
      
      {/* HEADER */}
      <div onClick={()=>setOpen(!open)} style={{cursor:'pointer',textAlign:'center'}}>
        <div style={{color:'#32CD32',fontSize:13,letterSpacing:2}}>HOW WE WORK</div>
        <h2 style={{color:'#32CD32',fontSize:'clamp(28px,5vw,42px)',fontWeight:800}}>
          From Idea to Live in 4 Steps
        </h2>
      </div>

      {/* DRAWER */}
      {open && (
        <div className="proc-grid" style={{
          display:'grid',
          gridTemplateColumns:'repeat(4,1fr)',
          gap:12,
          marginTop:40
        }}>
          {steps.map(s=>(
            <div key={s.n} style={{
              background:'#0a0a0a',
              border:'1px solid #1a1a1a',
              padding:20,
              borderRadius:10
            }}>
              <div style={{color:'#32CD32',fontWeight:800}}>{s.n}</div>
              <h3 style={{color:'#fff'}}>{s.title}</h3>
              <p style={{color:'#aaaaaa',fontSize:13}}>{s.desc}</p>
            </div>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:900px){
          .proc-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:500px){
          .proc-grid{grid-template-columns:1fr}
        }
      `}</style>

    </section>
  )
}
