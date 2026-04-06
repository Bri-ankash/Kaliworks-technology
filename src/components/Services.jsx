import { useState } from 'react'

const ALL_SVCS = [
  {n:'01', title:'Web Development', desc:'Beautiful, fast, SEO-optimized websites. Landing pages, corporate sites, and e-commerce platforms built to convert.', price:'From KES 8,000', cat:'Web & Mobile'},
  {n:'02', title:'Mobile Applications', desc:'Cross-platform mobile apps for Android and iOS with modern UI/UX and high performance.', price:'From KES 25,000', cat:'Web & Mobile'},
  {n:'03', title:'SaaS Platforms', desc:'Full SaaS systems with subscriptions, dashboards, APIs, and scalable infrastructure.', price:'From KES 35,000', cat:'Web & Mobile'},
  {n:'04', title:'E-Commerce Stores', desc:'Online stores with product catalog, cart, and M-Pesa checkout integration.', price:'From KES 15,000', cat:'Web & Mobile'},

  {n:'05', title:'M-Pesa Integration', desc:'STK Push, Paybill, Till Number, C2B and B2C integrations using Daraja API.', price:'From KES 8,000', cat:'Integrations'},
  {n:'06', title:'WhatsApp Automation', desc:'Automated WhatsApp bots for customer support, orders, and engagement.', price:'From KES 10,000', cat:'Integrations'},
  {n:'07', title:'Bulk SMS Systems', desc:'Mass messaging systems with scheduling, personalization, and delivery tracking.', price:'From KES 8,000', cat:'Integrations'},
  {n:'08', title:'USSD Applications', desc:'Interactive USSD systems (*123#) that work on all phones without internet.', price:'From KES 15,000', cat:'Integrations'},

  {n:'09', title:'School Management Systems', desc:'Complete school systems with fees, grades, attendance, and parent portals.', price:'From KES 20,000', cat:'Systems'},
  {n:'10', title:'Hospital & Clinic Systems', desc:'Patient records, appointments, billing, and prescription tracking.', price:'From KES 30,000', cat:'Systems'},
  {n:'11', title:'Church Management Systems', desc:'Member management, tithes tracking, events, and communication tools.', price:'From KES 10,000', cat:'Systems'},
  {n:'12', title:'Inventory Systems', desc:'Stock management systems with sales tracking and low-stock alerts.', price:'From KES 15,000', cat:'Systems'},
  {n:'13', title:'Payroll Systems', desc:'Salary processing, deductions, payslips, NHIF and NSSF compliance.', price:'From KES 20,000', cat:'Systems'},
  {n:'14', title:'Booking Systems', desc:'Online booking platforms with calendars, reminders, and payment integration.', price:'From KES 10,000', cat:'Systems'},
  {n:'15', title:'Real Estate Platforms', desc:'Property listing platforms with filters, search, and agent management.', price:'From KES 20,000', cat:'Systems'},

  {n:'16', title:'AI Chatbots', desc:'Smart AI bots for customer service, booking, and automated responses.', price:'From KES 15,000', cat:'Cloud & AI'},
  {n:'17', title:'Analytics Dashboards', desc:'Data visualization dashboards with reports, KPIs, and insights.', price:'From KES 20,000', cat:'Cloud & AI'},
  {n:'18', title:'Cloud & Hosting Setup', desc:'Deployment, hosting, SSL, domains, and cloud infrastructure setup.', price:'From KES 5,000', cat:'Cloud & AI'},
  {n:'19', title:'Cybersecurity Audits', desc:'Security testing, vulnerability scanning, and protection reports.', price:'From KES 15,000', cat:'Cloud & AI'},
  {n:'20', title:'Delivery Tracking Systems', desc:'Real-time order and delivery tracking with maps and notifications.', price:'From KES 15,000', cat:'Systems'},
]

const TABS = ['All','Web & Mobile','Integrations','Systems','Cloud & AI']

export default function Services(){
  const [active,setActive]=useState('All')
  const [open,setOpen]=useState(false)

  const filtered = active==='All' ? ALL_SVCS : ALL_SVCS.filter(s=>s.cat===active)

  return(
    <section id="services" style={{background:'#000',padding:'96px 6%'}}>

      {/* HEADER (DRAWER TOGGLE) */}
      <div onClick={()=>setOpen(!open)} style={{cursor:'pointer',textAlign:'center'}}>
        <div style={{color:'#32CD32',fontSize:13,letterSpacing:2,marginBottom:10}}>WHAT WE DO</div>
        <h2 style={{color:'#32CD32',fontSize:'clamp(28px,5vw,48px)',fontWeight:800,marginBottom:10}}>
          20 Digital Solutions<br/>Built for Kenya
        </h2>
        <p style={{color:'#aaaaaa',maxWidth:600,margin:'0 auto'}}>
          From simple websites to complex SaaS — everything your business needs online.
        </p>
      </div>

      {/* DRAWER CONTENT */}
      {open && (
        <>
          {/* TABS */}
          <div style={{display:'flex',gap:10,flexWrap:'wrap',justifyContent:'center',marginTop:40}}>
            {TABS.map(tab=>(
              <button key={tab} onClick={()=>setActive(tab)}
                style={{
                  padding:'8px 18px',
                  borderRadius:100,
                  border:'1px solid #1a1a1a',
                  background:active===tab?'#32CD32':'#0a0a0a',
                  color:active===tab?'#000':'#fff',
                  cursor:'pointer'
                }}>
                {tab}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="svc-grid" style={{
            display:'grid',
            gridTemplateColumns:'repeat(4,1fr)',
            gap:12,
            marginTop:40
          }}>
            {filtered.map(s=>(
              <div key={s.n} style={{
                background:'#0a0a0a',
                border:'1px solid #1a1a1a',
                padding:20,
                borderRadius:10
              }}>
                <div style={{color:'#32CD32',fontWeight:800,marginBottom:6}}>{s.n}</div>
                <h3 style={{color:'#fff',fontSize:15,marginBottom:6}}>{s.title}</h3>
                <p style={{color:'#aaaaaa',fontSize:13,lineHeight:1.6}}>{s.desc}</p>
                <div style={{color:'#FFD700',marginTop:10,fontSize:13,fontWeight:600}}>
                  {s.price}
                </div>
              </div>
            ))}
          </div>

          {/* RESPONSIVE */}
          <style>{`
            @media(max-width:1100px){
              .svc-grid{grid-template-columns:repeat(3,1fr)}
            }
            @media(max-width:768px){
              .svc-grid{grid-template-columns:repeat(2,1fr)}
            }
            @media(max-width:480px){
              .svc-grid{grid-template-columns:1fr}
            }
          `}</style>
        </>
      )}

    </section>
  )
}
