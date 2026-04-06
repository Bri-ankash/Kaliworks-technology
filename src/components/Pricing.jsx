import { useState } from 'react'

const PLANS = [
  {
    name:'Starter',price:'KES 25,000',period:'one-time',
    desc:'Best for small businesses and MVPs',
    features:['Up to 5 core features','Responsive web app','M-Pesa integration','Basic admin panel','3 months bug support','GitHub source code delivery'],
    cta:'Get Started',color:'#E4E4E7',textColor:'#18181B'
  },
  {
    name:'Growth',price:'KES 60,000',period:'one-time',
    desc:'For funded startups and growing businesses',
    features:['Up to 15 features','Full-stack web platform','M-Pesa STK Push & Paybill','User dashboards & analytics','Admin control panel','API integrations','6 months support','Render/VPS deployment'],
    cta:'Most Popular',color:'#1D4ED8',textColor:'#fff',popular:true
  },
  {
    name:'Enterprise',price:'Custom',period:'quote',
    desc:'Large platforms, teams, and complex systems',
    features:['Unlimited features','Custom architecture','All payment integrations','Multi-role dashboards','Mobile PWA included','Custom domain & SSL','12 months priority support','Dedicated team access'],
    cta:'Get a Quote',color:'#18181B',textColor:'#fff'
  },
]

export default function Pricing(){
  const [open, setOpen] = useState(null)
  return(
    <section style={{background:'#F4F4F5',borderTop:'1px solid #E4E4E7'}}>
      <div style={{maxWidth:800,margin:'0 auto'}}>
        <p className="eyebrow reveal">Pricing</p>
        <h2 className="sec-title reveal">Simple, Flat Pricing</h2>
        <p className="sec-sub reveal" style={{marginBottom:32}}>No hourly billing. No surprise invoices. What we quote is what you pay.</p>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          {PLANS.map((plan,i)=>(
            <div key={i} className="reveal" style={{border:`1px solid ${plan.popular?'#1D4ED8':'#E4E4E7'}`,borderRadius:10,overflow:'hidden',background:'#fff',position:'relative'}}>
              {plan.popular&&<div style={{position:'absolute',top:0,left:0,right:0,height:3,background:'#1D4ED8'}}/>}
              <button onClick={()=>setOpen(open===i?null:i)}
                style={{width:'100%',padding:'18px 20px',display:'flex',justifyContent:'space-between',alignItems:'center',background:'transparent',border:'none',cursor:'pointer',textAlign:'left',gap:12}}>
                <div>
                  <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:2}}>
                    <span style={{fontSize:15,fontWeight:700,color:'#18181B'}}>{plan.name}</span>
                    {plan.popular&&<span style={{background:'#DBEAFE',color:'#1D4ED8',fontSize:10,fontWeight:700,padding:'2px 8px',borderRadius:100}}>Popular</span>}
                  </div>
                  <div style={{fontSize:18,fontWeight:800,color:'#2563EB'}}>{plan.price} <span style={{fontSize:12,color:'#71717A',fontWeight:400}}>{plan.period}</span></div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" style={{transform:open===i?'rotate(180deg)':'none',transition:'transform 0.3s',flexShrink:0}}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {open===i&&<div style={{padding:'0 20px 20px',borderTop:'1px solid #E4E4E7'}}>
                <p style={{color:'#71717A',fontSize:13,marginTop:12,marginBottom:14}}>{plan.desc}</p>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:8,marginBottom:16}}>
                  {plan.features.map(f=>(
                    <li key={f} style={{display:'flex',gap:8,alignItems:'flex-start',fontSize:13,color:'#3F3F46'}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" style={{flexShrink:0,marginTop:1}}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{display:'inline-block',padding:'10px 24px',borderRadius:8,background:'#18181B',color:'#fff',fontSize:13,fontWeight:700}}>{plan.cta}</a>
              </div>}
            </div>
          ))}
        </div>
        <p className="reveal" style={{color:'#71717A',fontSize:13,marginTop:16,textAlign:'center'}}>All prices exclude hosting costs. We help you choose the right hosting for your budget.</p>
      </div>
    </section>
  )
}
