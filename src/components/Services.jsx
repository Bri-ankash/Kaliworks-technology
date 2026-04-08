import { useState } from 'react'

const CATS = {
  'Web & Mobile':[
    {n:'01',title:'Web Development',desc:'Beautiful, fast, SEO-optimized websites. Landing pages, corporate sites, e-commerce — built to convert.',price:'From KES 8,000',tag:'React · Next.js'},
    {n:'02',title:'Mobile Applications',desc:'Cross-platform mobile apps for iOS and Android. Sleek UX, fast performance, built to scale.',price:'From KES 25,000',tag:'React Native · Flutter'},
    {n:'03',title:'SaaS Platforms',desc:'Full-stack SaaS products from scratch — subscriptions, dashboards, APIs, billing all included.',price:'From KES 35,000',tag:'Django · PostgreSQL'},
    {n:'04',title:'E-Commerce Stores',desc:'Full online shop with product catalog, cart, M-Pesa checkout and order management.',price:'From KES 15,000',tag:'Next.js · M-Pesa'},
  ],
  'Integrations':[
    {n:'05',title:'M-Pesa Integration',desc:'STK Push, C2B, B2C, Paybill & Till number. Full Daraja API setup for your website or app.',price:'From KES 8,000',tag:'Daraja API'},
    {n:'06',title:'WhatsApp Bots',desc:'Automated WhatsApp bots for businesses. Auto-replies, order taking, customer support 24/7.',price:'From KES 10,000',tag:'Meta API · Twilio'},
    {n:'07',title:'Bulk SMS Systems',desc:'SMS blasting for schools, churches, saccos. Schedule, personalize and track delivery.',price:'From KES 8,000',tag:"Africa's Talking"},
    {n:'08',title:'USSD Applications',desc:'*123# menu systems for saccos and businesses. Works on any phone, no internet needed.',price:'From KES 15,000',tag:"Africa's Talking"},
  ],
  'Systems':[
    {n:'09',title:'School Management',desc:'Fees, grades, attendance, parent portal. Everything a school needs in one system.',price:'From KES 20,000',tag:'Django · React'},
    {n:'10',title:'Hospital & Clinic Systems',desc:'Patient records, appointments, billing and prescription tracking for healthcare.',price:'From KES 30,000',tag:'Custom Built'},
    {n:'11',title:'Church Management',desc:'Member records, tithes, events, SMS communications and attendance tracking.',price:'From KES 10,000',tag:'Django · SMS'},
    {n:'12',title:'Inventory Systems',desc:'Stock management for shops. Track products, sales, suppliers and low-stock alerts.',price:'From KES 15,000',tag:'Django · React'},
    {n:'13',title:'Payroll Systems',desc:'Salary calculations, deductions, payslips for SMEs and NGOs. NHIF & NSSF ready.',price:'From KES 20,000',tag:'Django · PDF'},
    {n:'14',title:'Booking Systems',desc:'Online booking for salons, clinics and hotels. Calendar, reminders, M-Pesa payments.',price:'From KES 10,000',tag:'Django · React'},
    {n:'15',title:'Real Estate Platforms',desc:'Property listings with search, filters, photo galleries and agent contact features.',price:'From KES 20,000',tag:'Next.js · Django'},
    {n:'20',title:'Delivery Tracking',desc:'Real-time order and delivery tracking for businesses and courier services.',price:'From KES 15,000',tag:'Django · Maps'},
  ],
  'Cloud & AI':[
    {n:'16',title:'AI Chatbots',desc:'Customer service bots powered by AI. Answer questions, book appointments 24/7.',price:'From KES 15,000',tag:'OpenAI · Claude'},
    {n:'17',title:'Analytics Dashboards',desc:'Turn business data into visual insights. Sales reports, trends and KPIs in one place.',price:'From KES 20,000',tag:'Python · React'},
    {n:'18',title:'Cloud & Hosting Setup',desc:'Cloud hosting, migration, SSL, domains and deployment pipelines setup.',price:'From KES 5,000',tag:'AWS · Vercel'},
    {n:'19',title:'Cyber Security Audits',desc:'Website vulnerability testing, penetration testing and security reports.',price:'From KES 15,000',tag:'Security'},
  ],
}

const ICONS = {'Web & Mobile':'W','Integrations':'I','Systems':'S','Cloud & AI':'AI'}

function Chevron({open}){
  return(
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"
      style={{transform:open?'rotate(180deg)':'none',transition:'transform 0.3s',flexShrink:0}}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )
}

export default function Services(){
  const [openCat, setOpenCat] = useState(null)

  return(
    <section id="services" style={{background:'#0049B7',borderTop:'1px solid #0060d0'}}>
      <div style={{maxWidth:900,margin:'0 auto'}}>
        <p className="eyebrow reveal">What We Do</p>
        <h2 className="sec-title reveal">20 Digital Solutions<br/>Built for Kenya</h2>
        <p className="sec-sub reveal" style={{marginBottom:8}}>
          From simple websites to complex SaaS — everything your business needs online.
        </p>
        <p style={{color:'#999',fontSize:13,marginBottom:36}}>Tap a category to explore services.</p>

        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          {Object.entries(CATS).map(([cat,svcs],i)=>(
            <div key={cat} className="reveal drawer-item">
              <button className="drawer-btn" onClick={()=>setOpenCat(openCat===i?null:i)}>
                <div style={{display:'flex',alignItems:'center',gap:12}}>
                  <div style={{width:32,height:32,borderRadius:7,background:'rgba(132,204,22,0.1)',border:'1px solid rgba(132,204,22,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:800,color:'#84cc16',flexShrink:0}}>
                    {ICONS[cat]}
                  </div>
                  <div>
                    <div style={{fontWeight:700,fontSize:15,color:'#fff'}}>{cat}</div>
                    <div style={{color:'#999',fontSize:12}}>{svcs.length} services</div>
                  </div>
                </div>
                <Chevron open={openCat===i}/>
              </button>
              {openCat===i&&(
                <div style={{padding:'0 20px 20px',borderTop:'1px solid #0060d0'}}>
                  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(100%,220px),1fr))',gap:12,marginTop:16}}>
                    {svcs.map(s=>(
                      <div key={s.n} style={{background:'#0057d0',border:'1px solid #0060d0',borderRadius:10,padding:16,transition:'all 0.2s'}}
                        onMouseEnter={e=>{e.currentTarget.style.borderColor='#84cc16';e.currentTarget.style.background='#0052c4'}}
                        onMouseLeave={e=>{e.currentTarget.style.borderColor='#0060d0';e.currentTarget.style.background='#0053c7'}}>
                        <div style={{fontSize:10,fontWeight:700,color:'#84cc16',marginBottom:4,letterSpacing:1}}>{s.n}</div>
                        <div style={{fontWeight:700,fontSize:13,color:'#fff',marginBottom:6}}>{s.title}</div>
                        <p style={{color:'#999',fontSize:11,lineHeight:1.7,marginBottom:10}}>{s.desc}</p>
                        <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                          <span style={{background:'rgba(132,204,22,0.08)',border:'1px solid rgba(132,204,22,0.2)',color:'#84cc16',fontSize:10,padding:'2px 8px',borderRadius:100,fontWeight:700}}>{s.price}</span>
                          <span style={{color:'#555',fontSize:10,padding:'2px 8px'}}>{s.tag}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="reveal" style={{textAlign:'center',marginTop:24,padding:'18px',background:'#0055cc',border:'1px solid #0060d0',borderRadius:10}}>
          <p style={{color:'#999',fontSize:14}}>Have a unique project? <a href="#contact" style={{color:'#84cc16',fontWeight:700}}>Tell us about it</a> — if it can be built, we build it.</p>
        </div>
      </div>
    </section>
  )
}
