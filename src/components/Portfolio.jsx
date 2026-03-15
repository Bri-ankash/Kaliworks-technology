import { useState } from 'react'

const projects=[
  {icon:'💰',bg:'linear-gradient(135deg,#0a1a2e,#0e2040)',cat:'SaaS Platform',title:'Chama na Kash',desc:'Full chama management SaaS — contributions, loans, meetings, M-Pesa integration, multi-role dashboards.',long:'A complete digital solution for chama groups in Kenya. Features include member management, contribution tracking, loan management with approval workflows, meeting scheduling, M-Pesa STK push integration, and role-based dashboards for admins, treasurers and members.',tags:['Django','Next.js','PostgreSQL','M-Pesa'],link:'https://chamanakash-frontend-b3z4fnkc4-bri-ankashs-projects.vercel.app'},
  {icon:'🏫',bg:'linear-gradient(135deg,#0a201a,#0e2820)',cat:'Management System',title:'School Admin Portal',desc:'Student records, fee tracking, grading, attendance, and parent communication portal.',long:'A comprehensive school management system covering student enrollment, fee collection with M-Pesa integration, grade management, attendance tracking, timetable management, and a parent portal for real-time updates.',tags:['React','Node.js','MongoDB'],link:null},
  {icon:'🛒',bg:'linear-gradient(135deg,#1a0a20,#200e28)',cat:'E-Commerce',title:'Retail Web Store',desc:'Full e-commerce with product catalog, cart, M-Pesa checkout and inventory management.',long:'A fully functional e-commerce platform with product catalog, shopping cart, M-Pesa STK push checkout, order management, inventory tracking, and an admin dashboard for product and order management.',tags:['Next.js','Django','M-Pesa'],link:null},
  {icon:'📊',bg:'linear-gradient(135deg,#1a1a0a,#28200e)',cat:'Business Dashboard',title:'SME Analytics Platform',desc:'Real-time analytics dashboard — sales tracking, expense monitoring, automated reporting.',long:'A business intelligence dashboard that helps SMEs track sales, monitor expenses, visualize trends and generate automated PDF reports. Integrates with M-Pesa for transaction tracking.',tags:['React','Python','PostgreSQL'],link:null},
  {icon:'📱',bg:'linear-gradient(135deg,#0a1428,#0e1c38)',cat:'Mobile Application',title:'Field Agent App',desc:'Cross-platform app for field agents with offline sync, document upload, and client records.',long:'A React Native mobile app for microfinance field agents. Features offline data sync, client registration, document photo upload, GPS check-ins, loan application forms, and real-time sync when online.',tags:['React Native','Offline Sync'],link:null},
  {icon:'🏥',bg:'linear-gradient(135deg,#0a1e1e,#0e2828)',cat:'Healthcare System',title:'Clinic Management Portal',desc:'Patient records, appointment booking, billing, and prescription tracking.',long:'A private clinic management system with patient registration, appointment scheduling, consultation notes, prescription management, billing with M-Pesa integration, and reporting for clinic administrators.',tags:['Django','React','Supabase'],link:null},
]

export default function Portfolio(){
  const [selected, setSelected] = useState(null)

  return(
    <section id="portfolio" style={{background:'#030608'}}>
      <div className="reveal">
        <div className="eyebrow">Our Work</div>
        <h2 className="sec-title">Projects We're<br/>Proud Of</h2>
        <p className="sec-sub">Click any project to see full details.</p>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:56}} className="port-grid">
        {projects.map((p,i)=>(
          <div key={p.title} className="reveal" onClick={()=>setSelected(p)}
            style={{background:'#0a1220',border:'1px solid rgba(14,165,233,0.12)',borderRadius:16,overflow:'hidden',cursor:'pointer',transition:'all 0.3s'}}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.borderColor='#0ea5e9';e.currentTarget.style.boxShadow='0 20px 40px rgba(14,165,233,0.1)'}}
            onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.borderColor='rgba(14,165,233,0.12)';e.currentTarget.style.boxShadow='none'}}>
            <div style={{height:140,display:'flex',alignItems:'center',justifyContent:'center',fontSize:48,background:p.bg,position:'relative'}}>
              {p.icon}
              <div style={{position:'absolute',bottom:10,right:10,background:'rgba(14,165,233,0.15)',border:'1px solid rgba(14,165,233,0.3)',borderRadius:6,padding:'3px 10px',fontSize:10,color:'#38bdf8',fontWeight:600}}>
                Click to view →
              </div>
            </div>
            <div style={{padding:20}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',color:'#0ea5e9',marginBottom:6}}>{p.cat}</div>
              <h3 style={{fontFamily:'Urbanist,sans-serif',fontSize:16,fontWeight:700,marginBottom:6,color:'#e8f4ff'}}>{p.title}</h3>
              <p style={{color:'#7a99bb',fontSize:12,lineHeight:1.65}}>{p.desc}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:6,marginTop:12}}>
                {p.tags.map(t=><span key={t} style={{background:'rgba(14,165,233,0.07)',color:'#7a99bb',fontSize:10,padding:'3px 10px',borderRadius:100}}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div onClick={()=>setSelected(null)}
          style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.85)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center',padding:20,backdropFilter:'blur(8px)'}}>
          <div onClick={e=>e.stopPropagation()}
            style={{background:'#0f172a',border:'1px solid #0ea5e9',borderRadius:24,maxWidth:600,width:'100%',overflow:'hidden',boxShadow:'0 40px 80px rgba(14,165,233,0.2)',maxHeight:'90vh',overflowY:'auto'}}>
            <div style={{height:200,display:'flex',alignItems:'center',justifyContent:'center',fontSize:72,background:selected.bg,position:'relative'}}>
              {selected.icon}
              <button onClick={()=>setSelected(null)}
                style={{position:'absolute',top:16,right:16,background:'rgba(0,0,0,0.5)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:'50%',width:36,height:36,color:'#fff',fontSize:18,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>×</button>
            </div>
            <div style={{padding:32}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',color:'#0ea5e9',marginBottom:8}}>{selected.cat}</div>
              <h2 style={{fontFamily:'Urbanist,sans-serif',fontSize:26,fontWeight:800,marginBottom:16,color:'#e8f4ff'}}>{selected.title}</h2>
              <p style={{color:'#94a3b8',fontSize:14,lineHeight:1.8,marginBottom:20}}>{selected.long}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:24}}>
                {selected.tags.map(t=><span key={t} style={{background:'rgba(14,165,233,0.1)',border:'1px solid rgba(14,165,233,0.2)',color:'#38bdf8',fontSize:12,padding:'5px 14px',borderRadius:100,fontWeight:600}}>{t}</span>)}
              </div>
              <div style={{display:'flex',gap:12}}>
                {selected.link && (
                  <a href={selected.link} target="_blank"
                    style={{background:'#0ea5e9',color:'#000',padding:'11px 24px',borderRadius:10,fontWeight:700,fontSize:14,textDecoration:'none'}}>
                    🔗 View Live Project
                  </a>
                )}
                <button onClick={()=>setSelected(null)}
                  style={{background:'transparent',border:'1px solid rgba(14,165,233,0.3)',color:'#38bdf8',padding:'11px 24px',borderRadius:10,fontWeight:600,fontSize:14,cursor:'pointer'}}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`@media(max-width:900px){.port-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:500px){.port-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
