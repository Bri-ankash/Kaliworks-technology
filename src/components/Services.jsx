import { useState } from 'react'

const ALL_SVCS=[
  {n:'01',icon:'🌐',title:'Web Development',desc:'Beautiful, fast, SEO-optimized websites. Landing pages, corporate sites, e-commerce — built to convert.',price:'From KES 8,000',tag:'React · Next.js',cat:'Web & Mobile'},
  {n:'02',icon:'📱',title:'Mobile Applications',desc:'Cross-platform mobile apps for iOS and Android. Sleek UX, fast performance, built to scale.',price:'From KES 25,000',tag:'React Native · Flutter',cat:'Web & Mobile'},
  {n:'03',icon:'🏗️',title:'SaaS Platforms',desc:'Full-stack SaaS products from scratch — subscriptions, dashboards, APIs, billing all included.',price:'From KES 35,000',tag:'Django · PostgreSQL',cat:'Web & Mobile'},
  {n:'04',icon:'🛒',title:'E-Commerce Stores',desc:'Full online shop with product catalog, cart, M-Pesa checkout and order management.',price:'From KES 15,000',tag:'Next.js · M-Pesa',cat:'Web & Mobile'},
  {n:'05',icon:'💚',title:'M-Pesa Integration',desc:'STK Push, C2B, B2C, Paybill & Till number. Full Daraja API setup for your website or app.',price:'From KES 8,000',tag:'Daraja API',cat:'Integrations'},
  {n:'06',icon:'💬',title:'WhatsApp Bots',desc:'Automated WhatsApp bots for businesses. Auto-replies, order taking, customer support 24/7.',price:'From KES 10,000',tag:'Meta API · Twilio',cat:'Integrations'},
  {n:'07',icon:'📨',title:'Bulk SMS Systems',desc:'SMS blasting for schools, churches, saccos. Schedule, personalize and track delivery.',price:'From KES 8,000',tag:"Africa's Talking",cat:'Integrations'},
  {n:'08',icon:'📟',title:'USSD Applications',desc:'*123# menu systems for saccos and businesses. Works on any phone, no internet needed.',price:'From KES 15,000',tag:"Africa's Talking",cat:'Integrations'},
  {n:'09',icon:'🏫',title:'School Management',desc:'Fees, grades, attendance, parent portal. Everything a school needs in one system.',price:'From KES 20,000',tag:'Django · React',cat:'Systems'},
  {n:'10',icon:'🏥',title:'Hospital · Clinic Systems',desc:'Patient records, appointments, billing and prescription tracking for healthcare.',price:'From KES 30,000',tag:'Custom Built',cat:'Systems'},
  {n:'11',icon:'⛪',title:'Church Management',desc:'Member records, tithes, events, SMS communications and attendance tracking.',price:'From KES 10,000',tag:'Django · SMS',cat:'Systems'},
  {n:'12',icon:'📦',title:'Inventory Systems',desc:'Stock management for shops. Track products, sales, suppliers and low-stock alerts.',price:'From KES 15,000',tag:'Django · React',cat:'Systems'},
  {n:'13',icon:'💰',title:'Payroll Systems',desc:'Salary calculations, deductions, payslips for SMEs and NGOs. NHIF & NSSF ready.',price:'From KES 20,000',tag:'Django · PDF',cat:'Systems'},
  {n:'14',icon:'📅',title:'Booking Systems',desc:'Online booking for salons, clinics and hotels. Calendar, reminders, M-Pesa payments.',price:'From KES 10,000',tag:'Django · React',cat:'Systems'},
  {n:'15',icon:'🏘️',title:'Real Estate Platforms',desc:'Property listings with search, filters, photo galleries and agent contact features.',price:'From KES 20,000',tag:'Next.js · Django',cat:'Systems'},
  {n:'16',icon:'🤖',title:'AI Chatbots',desc:'Customer service bots powered by AI. Answer questions, book appointments 24/7.',price:'From KES 15,000',tag:'OpenAI · Claude',cat:'Cloud & AI'},
  {n:'17',icon:'📊',title:'Analytics Dashboards',desc:'Turn business data into visual insights. Sales reports, trends and KPIs in one place.',price:'From KES 20,000',tag:'Python · React',cat:'Cloud & AI'},
  {n:'18',icon:'☁️',title:'Cloud & Hosting Setup',desc:'Cloud hosting, migration, SSL, domains and deployment pipelines setup.',price:'From KES 5,000',tag:'AWS · Vercel',cat:'Cloud & AI'},
  {n:'19',icon:'🔐',title:'Cyber Security Audits',desc:'Website vulnerability testing, penetration testing and security reports.',price:'From KES 15,000',tag:'Security',cat:'Cloud & AI'},
  {n:'20',icon:'🚚',title:'Delivery Tracking',desc:'Real-time order and delivery tracking for businesses and courier services.',price:'From KES 15,000',tag:'Django · Maps',cat:'Systems'},
]

const TABS = ['All','Web & Mobile','Integrations','Systems','Cloud & AI']

export default function Services(){
  const [active, setActive] = useState('All')
  const filtered = active==='All' ? ALL_SVCS : ALL_SVCS.filter(s=>s.cat===active)

  return(
    <section id="services" style={{background:'#060b12'}}>
      <div className="reveal">
        <div className="eyebrow">What We Do</div>
        <h2 className="sec-title">20 Digital Solutions<br/>Built for Kenya</h2>
        <p className="sec-sub">From simple websites to complex SaaS — everything your business needs online.</p>
      </div>

      {/* TABS */}
      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:40,marginBottom:40}} className="reveal">
        {TABS.map(tab=>(
          <button key={tab} onClick={()=>setActive(tab)}
            style={{padding:'9px 20px',borderRadius:100,border:'none',cursor:'pointer',fontWeight:600,fontSize:13,transition:'all 0.2s',
              background:active===tab?'#0ea5e9':'rgba(14,165,233,0.08)',
              color:active===tab?'#000':'#7a99bb',
              boxShadow:active===tab?'0 0 20px rgba(14,165,233,0.3)':'none'}}>
            {tab}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:1,background:'rgba(14,165,233,0.08)'}} className="svc-grid">
        {filtered.map((s,i)=>(
          <div key={s.n} className="reveal" style={{background:'#0a1220',padding:'28px 22px',position:'relative',overflow:'hidden',transition:'all 0.3s',animationDelay:`${i*50}ms`}}
            onMouseEnter={e=>{e.currentTarget.style.background='#0e1928';e.currentTarget.style.transform='translateY(-4px)'}}
            onMouseLeave={e=>{e.currentTarget.style.background='#0a1220';e.currentTarget.style.transform='translateY(0)'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:'linear-gradient(90deg,#0ea5e9,transparent)'}}/>
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
      <style>{`
        @media(max-width:1100px){.svc-grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:768px){.svc-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:480px){.svc-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  )
}
