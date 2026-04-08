import { useState } from 'react'

const faqs=[
  {q:'How long does it take to build a website or app?',a:'A simple website takes 1–2 weeks. A web management system or SaaS platform typically takes 4–8 weeks. A mobile app can take 6–12 weeks. We give you a clear timeline during our free initial consultation.'},
  {q:'Do you work with small budgets and startups?',a:"Absolutely. We started from scratch too and understand tight budgets. We offer flexible payment plans. Our Starter package begins from KES 8,000. Let's talk — we'll find a way to work together."},
  {q:'Do you do M-Pesa integration?',a:'Yes! M-Pesa integration (STK Push, C2B, B2C, paybill & till number) is one of our specialties. We handle the full Daraja API setup and testing.'},
  {q:'Who owns the code after the project?',a:'You do. On completion and full payment, all source code, assets, and credentials are handed over to you. No lock-ins, ever.'},
  {q:'What ongoing support do you offer after launch?',a:'All packages include free support (1–6 months depending on plan). After that, affordable monthly retainers for bug fixes, updates, and new features.'},
  {q:'Are you certified IT consultants?',a:'No — and we are upfront about that. We are developers and builders, not certified IT consultants. Any guidance is based on hands-on experience only. For compliance or legal tech decisions, please consult a certified professional.'},
  {q:'Can you work with clients outside Kenya?',a:'Yes! We work with clients anywhere via WhatsApp, email, and video calls. Payments via M-Pesa, bank transfer, or international methods.'},
]

export default function FAQ(){
  const [open, setOpen] = useState(null)
  return(
    <section id="faq" style={{background:'#292121'}}>
      <div className="reveal" style={{textAlign:'center'}}>
        <div className="eyebrow" style={{justifyContent:'center'}}>Common Questions</div>
        <h2 className="sec-title">Frequently Asked</h2>
        <p className="sec-sub" style={{margin:'0 auto'}}>Everything you need to know before getting started.</p>
      </div>
      <div style={{maxWidth:760,margin:'56px auto 0',display:'flex',flexDirection:'column',gap:12}}>
        {faqs.map((f,i)=>(
          <div key={i} className="reveal" style={{background:'#332828',border:`1px solid ${open===i?'#222':'#3a2d2d'}`,borderRadius:14,overflow:'hidden',maxWidth:'100%'}}>
            <div onClick={()=>setOpen(open===i?null:i)} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'22px 26px',cursor:'pointer',fontFamily:'Urbanist,sans-serif',fontSize:15,fontWeight:700,gap:16,userSelect:'none'}}>
              {f.q}
              <span style={{color:'#84cc16',fontSize:20,transition:'transform 0.3s',transform:open===i?'rotate(45deg)':'rotate(0)',flexShrink:0}}>+</span>
            </div>
            {open===i&&<p style={{padding:'0 26px 22px',color:'#999',fontSize:14,lineHeight:1.75,fontWeight:300}}>{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
