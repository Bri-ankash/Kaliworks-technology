import { useState } from 'react'

const ITEMS = [
  {title:'M-Pesa First, Not Last',desc:'M-Pesa is not an integration we bolt on. We design payment flows around M-Pesa from day one — STK Push, Paybill, Till, and Daraja API.'},
  {title:'Works on 2G and 3G',desc:'We optimize for Kenyan network conditions. Our apps load fast on low-bandwidth connections and handle network drops gracefully.'},
  {title:'Swahili and English',desc:'We build bilingual products when needed. Kenya is multilingual and your product should reflect that.'},
  {title:'Offline-First Where Needed',desc:'For agricultural and field products, we build offline capability so your app works even without signal.'},
  {title:'KRA and Legal Compliance',desc:'We understand Kenyan tax requirements, business registration, and regulatory compliance so your product is built to last.'},
  {title:'County-Aware',desc:'Location matters in Kenya. We build products that understand counties, constituencies, and local administrative units.'},
]

export default function BuiltForKenya(){
  const [open, setOpen] = useState(null)
  return(
    <section style={{background:'#fff',borderTop:'1px solid #E4E4E7'}}>
      <div style={{maxWidth:800,margin:'0 auto'}}>
        <p className="eyebrow reveal">Built for Kenya</p>
        <h2 className="sec-title reveal">Made for Kenya. Built for Kenya.</h2>
        <p className="sec-sub reveal" style={{marginBottom:32}}>Not adapted. Designed here, for here, from the ground up.</p>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          {ITEMS.map((item,i)=>(
            <div key={i} className="reveal" style={{border:'1px solid #E4E4E7',borderRadius:10,overflow:'hidden',background:'#F9FAFB'}}>
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
      </div>
    </section>
  )
}
