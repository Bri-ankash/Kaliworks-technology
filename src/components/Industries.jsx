import { useState } from 'react'

const INDUSTRIES = [
  {name:'Fintech & M-Pesa',desc:'Mobile banking, escrow systems, chama management, loan platforms, M-Pesa statement analyzers, and payment gateways built for the Kenyan market.'},
  {name:'Marketplaces',desc:'Two-sided platforms connecting buyers and sellers, service providers and clients, farmers and distributors — with built-in payments, reviews, and trust systems.'},
  {name:'Healthcare',desc:'Patient management systems, appointment booking, pharmacy stock management, NHIF integration, and telemedicine platforms.'},
  {name:'Agriculture',desc:'Farm management apps, crop tracking, market price feeds, input ordering, and livestock management tools for smallholder farmers.'},
  {name:'Education & EdTech',desc:'Learning management systems, CBC curriculum tools, examination platforms, school management systems, and online tutoring marketplaces.'},
  {name:'Logistics & Delivery',desc:'Last-mile delivery tracking, fleet management, courier booking platforms, and route optimization systems for Kenyan roads.'},
  {name:'Government & NGOs',desc:'Public service portals, beneficiary management, reporting dashboards, grant tracking, and community engagement platforms.'},
  {name:'Retail & E-Commerce',desc:'Online stores, inventory management, POS systems, M-Pesa integration, and customer loyalty programs for Kenyan retailers.'},
]

export default function Industries(){
  const [open, setOpen] = useState(null)
  return(
    <section style={{background:'#0049B7',borderTop:'1px solid #0060d0'}}>
      <div style={{maxWidth:800,margin:'0 auto'}}>
        <p className="eyebrow reveal">Industries</p>
        <h2 className="sec-title reveal">Industries We Have Built For</h2>
        <p className="sec-sub reveal" style={{marginBottom:32}}>From fintech to farming — we have shipped products across Kenya's most critical sectors.</p>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          {INDUSTRIES.map((ind,i)=>(
            <div key={i} className="reveal" style={{border:'1px solid #0060d0',borderRadius:10,overflow:'hidden',background:'#0055cc'}}>
              <button onClick={()=>setOpen(open===i?null:i)}
                style={{width:'100%',padding:'16px 20px',display:'flex',justifyContent:'space-between',alignItems:'center',background:'transparent',border:'none',cursor:'pointer',textAlign:'left',gap:12}}>
                <span style={{fontSize:15,fontWeight:600,color:'#fff'}}>{ind.name}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" style={{transform:open===i?'rotate(180deg)':'none',transition:'transform 0.3s',flexShrink:0}}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {open===i&&<div style={{padding:'0 20px 16px',borderTop:'1px solid #0060d0'}}>
                <p style={{color:'#999',fontSize:14,lineHeight:1.8,marginTop:12}}>{ind.desc}</p>
              </div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
