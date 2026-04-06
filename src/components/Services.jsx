import { useState } from 'react'

const ALL_SVCS=[
  {n:'01',icon:null},
  {n:'02',icon:null},
  {n:'03',icon:null},
  {n:'04',icon:null},
  {n:'05',icon:null},
  {n:'06',icon:null},
  {n:'07',icon:null},
  {n:'08',icon:null},
  {n:'09',icon:null},
  {n:'10',icon:null},
  {n:'11',icon:null},
  {n:'12',icon:null},
  {n:'13',icon:null},
  {n:'14',icon:null},
  {n:'15',icon:null},
  {n:'16',icon:null},
  {n:'17',icon:null},
  {n:'18',icon:null},
  {n:'19',icon:null},
  {n:'20',icon:null},
]

const TABS = ['All','Web & Mobile','Integrations','Systems','Cloud & AI']

export default function Services(){
  const [active, setActive] = useState('All')
  const filtered = active==='All' ? ALL_SVCS : ALL_SVCS.filter(s=>s.cat===active)

  return(
    <section id="services" style={{background:'#060b12',padding:'96px 6%',position:'relative',zIndex:1}}>
      <div style={{opacity:1,transform:'none'}}>
        <div className="eyebrow">What We Do</div>
        <h2 className="sec-title">20 Digital Solutions<br/>Built for Kenya</h2>
        <p className="sec-sub">From simple websites to complex SaaS — everything your business needs online.</p>
      </div>

      {/* TABS */}
      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:40,marginBottom:40}}>
        {TABS.map(tab=>(
          <button key={tab} onClick={()=>setActive(tab)}
            style={{padding:'9px 20px',borderRadius:100,border:'none',cursor:'pointer',fontWeight:600,fontSize:13,transition:'all 0.2s',
              background:active===tab?'#32CD32':'rgba(14,165,233,0.08)',
              color:active===tab?'#000':'#7a99bb',
              boxShadow:active===tab?'0 0 20px rgba(14,165,233,0.3)':'none'}}>
            {tab}
          </button>
        ))}
      </div>

      {/* GRID - no reveal class to avoid blank issue */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:1,background:'rgba(14,165,233,0.08)'}} className="svc-grid">
        {filtered.map((s)=>(
          <div key={s.n} style={{background:'#0a1220',padding:'28px 22px',position:'relative',overflow:'hidden',transition:'all 0.3s',opacity:1}}
            onMouseEnter={e=>{e.currentTarget.style.background='#0e1928';e.currentTarget.style.transform='translateY(-4px)'}}
            onMouseLeave={e=>{e.currentTarget.style.background='#0a1220';e.currentTarget.style.transform='translateY(0)'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:'linear-gradient(90deg,#32CD32,transparent)'}}/>
            <span style={{fontFamily:'Urbanist,sans-serif',fontSize:40,fontWeight:800,color:'rgba(14,165,233,0.05)',letterSpacing:'-3px',lineHeight:1,display:'block',marginBottom:12}}>{s.n}</span>
            <span style={{fontSize:24,marginBottom:10,display:'block'}}>{s.icon}</span>
            <h3 style={{fontFamily:'Urbanist,sans-serif',fontSize:14,fontWeight:700,marginBottom:6,lineHeight:1.3,color:'#e8f4ff'}}>{s.title}</h3>
            <p style={{color:'#7a99bb',fontSize:11,lineHeight:1.7,fontWeight:300,marginBottom:10}}>{s.desc}</p>
            <span style={{display:'inline-block',background:'rgba(14,165,233,0.08)',border:'1px solid rgba(14,165,233,0.2)',color:'#38bdf8',fontSize:10,padding:'3px 10px',borderRadius:100,fontWeight:600}}>{s.price}</span>
            <br/>
            <span style={{display:'inline-block',marginTop:5,color:'#3a5270',fontSize:9,padding:'2px 8px',borderRadius:100,background:'rgba(14,165,233,0.03)'}}>{s.tag}</span>
          </div>
        ))}
      </div>
      <div style={{textAlign:'center',marginTop:32,padding:'20px',background:'rgba(14,165,233,0.04)',border:'1px solid rgba(14,165,233,0.12)',borderRadius:12}}>
        <p style={{color:'#7a99bb',fontSize:14}}>These are just some of our services. <a href="#contact" style={{color:'#32CD32',fontWeight:600,textDecoration:'none'}}>Contact us</a> with any digital challenge — if it can be built, we build it. 🚀</p>
      </div>
      <style>{`
        @media(max-width:1100px){.svc-grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:768px){.svc-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:480px){.svc-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  )
}
// note: "and more" line added below grid in JSX
