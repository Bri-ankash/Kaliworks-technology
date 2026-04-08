import { useState } from 'react'

const PLANS = [
  {
    name:'Starter',price:'KES 8,000',period:'one-time',
    desc:'Best for small businesses, landing pages and MVPs.',
    features:['Up to 5 core features','Responsive web app','M-Pesa integration','Basic admin panel','3 months bug support','GitHub source code delivery'],
  },
  {
    name:'Growth',price:'KES 35,500',period:'one-time',popular:true,
    desc:'For funded startups and growing businesses.',
    features:['Up to 15 features','Full-stack web platform','M-Pesa STK Push & Paybill','User dashboards & analytics','Admin control panel','API integrations','6 months support','Render/VPS deployment'],
  },
  {
    name:'Enterprise',price:'Custom',period:'get a quote',
    desc:'Large platforms, teams, and complex systems.',
    features:['Unlimited features','Custom architecture','All payment integrations','Multi-role dashboards','Mobile PWA included','Custom domain & SSL','12 months priority support','Dedicated team access'],
  },
]

function Chevron({open}){
  return(
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"
      style={{transform:open?'rotate(180deg)':'none',transition:'transform 0.3s',flexShrink:0}}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )
}

export default function Pricing(){
  const [open, setOpen] = useState(null)

  return(
    <section id="pricing" style={{background:'#292121',borderTop:'1px solid #3a2d2d'}}>
      <div style={{maxWidth:900,margin:'0 auto'}}>
        <p className="eyebrow reveal">Pricing</p>
        <h2 className="sec-title reveal">Simple, Flat Pricing</h2>
        <p className="sec-sub reveal" style={{marginBottom:36}}>No hourly billing. No surprise invoices. What we quote is what you pay.</p>

        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          {PLANS.map((plan,i)=>(
            <div key={i} className="reveal drawer-item" style={{border:`1px solid ${plan.popular?'#84cc16':'#3a2d2d'}`,position:'relative'}}>
              {plan.popular&&<div style={{position:'absolute',top:0,left:0,right:0,height:2,background:'#84cc16'}}/>}
              <button className="drawer-btn" onClick={()=>setOpen(open===i?null:i)}>
                <div>
                  <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:3}}>
                    <span style={{fontWeight:700,fontSize:15,color:'#fff'}}>{plan.name}</span>
                    {plan.popular&&<span style={{background:'rgba(132,204,22,0.1)',color:'#84cc16',fontSize:10,fontWeight:700,padding:'2px 8px',borderRadius:100,border:'1px solid rgba(132,204,22,0.3)'}}>Popular</span>}
                  </div>
                  <div style={{fontSize:20,fontWeight:800,color:'#84cc16'}}>
                    {plan.price} <span style={{fontSize:12,color:'#999',fontWeight:400}}>{plan.period}</span>
                  </div>
                </div>
                <Chevron open={open===i}/>
              </button>
              {open===i&&(
                <div style={{padding:'0 20px 20px',borderTop:'1px solid #3a2d2d'}}>
                  <p style={{color:'#999',fontSize:13,marginTop:12,marginBottom:16}}>{plan.desc}</p>
                  <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:8,marginBottom:20}}>
                    {plan.features.map(f=>(
                      <li key={f} style={{display:'flex',gap:8,alignItems:'flex-start',fontSize:13,color:'#ccc'}}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" style={{flexShrink:0,marginTop:1}}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" style={{display:'inline-block',padding:'10px 24px',borderRadius:8,background:'#84cc16',color:'#000',fontSize:13,fontWeight:700}}>
                    {plan.price==='Custom'?'Get a Quote':'Start Project'}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="reveal" style={{color:'#555',fontSize:12,marginTop:16,textAlign:'center'}}>All prices exclude hosting costs. We help you choose the right hosting for your budget.</p>
      </div>
    </section>
  )
}
