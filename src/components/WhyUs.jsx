import { useState } from 'react'

const REASONS = [
  {title:'We Build for Real Users',desc:'Every project we ship is tested with actual Kenyan users. We care about usability on low-end Android phones with slow connections — not just on MacBooks.'},
  {title:'Full-Stack Capability',desc:'From database design to UI polish to deployment, we handle the entire product. No hand-offs, no miscommunication, no extra cost from fragmented teams.'},
  {title:'M-Pesa Native',desc:'We integrate M-Pesa, escrow, STK Push, and Daraja API natively. Not as an afterthought — as a first-class feature of every financial product we build.'},
  {title:'We Own the Code',desc:'You get full source code, GitHub access, and documentation. No vendor lock-in. No monthly licensing. It is your product and you can take it anywhere.'},
  {title:'African Market First',desc:'We understand chamas, boda bodas, NHIF, KRA, M-Pesa statements, and USSD flows. We build for how Kenya actually works.'},
  {title:'Transparent Pricing',desc:'Flat project rates. No hourly billing surprises. No scope creep charges without discussion. What we quote is what you pay.'},
]

export default function WhyUs(){
  const [open, setOpen] = useState(null)
  return(
    <section style={{background:'#fff',borderTop:'1px solid #E4E4E7'}}>
      <div style={{maxWidth:800,margin:'0 auto'}}>
        <p className="eyebrow reveal">Why Choose Us</p>
        <h2 className="sec-title reveal">What Makes Us Different</h2>
        <p className="sec-sub reveal" style={{marginBottom:32}}>We do not just write code. We build products that work for real people.</p>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          {REASONS.map((r,i)=>(
            <div key={i} className="reveal" style={{border:'1px solid #E4E4E7',borderRadius:10,overflow:'hidden',background:'#F9FAFB'}}>
              <button onClick={()=>setOpen(open===i?null:i)}
                style={{width:'100%',padding:'16px 20px',display:'flex',justifyContent:'space-between',alignItems:'center',background:'transparent',border:'none',cursor:'pointer',textAlign:'left',gap:12}}>
                <span style={{fontSize:15,fontWeight:600,color:'#18181B'}}>{r.title}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" style={{transform:open===i?'rotate(180deg)':'none',transition:'transform 0.3s',flexShrink:0}}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {open===i&&<div style={{padding:'0 20px 16px',borderTop:'1px solid #E4E4E7'}}>
                <p style={{color:'#71717A',fontSize:14,lineHeight:1.8,marginTop:12}}>{r.desc}</p>
              </div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
