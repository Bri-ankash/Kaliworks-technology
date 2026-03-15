export default function Services(){
  const svcs=[
    {n:'01',icon:'🌐',title:'Web Development',desc:'Beautiful, fast, SEO-optimized websites. Landing pages, corporate sites, e-commerce — built to convert and impress.',price:'From KES 8,000',tag:'React · Next.js · HTML/CSS'},
    {n:'02',icon:'📱',title:'Mobile Applications',desc:'Cross-platform mobile apps for iOS and Android. Sleek UX, fast performance, built to scale.',price:'From KES 25,000',tag:'React Native · Flutter'},
    {n:'03',icon:'🏗️',title:'SaaS Platforms',desc:'Full-stack SaaS products from scratch — subscriptions, dashboards, APIs, authentication, billing.',price:'From KES 35,000',tag:'Django · Node.js · PostgreSQL'},
    {n:'04',icon:'📟',title:'USSD Applications',desc:'*123# menu systems for saccos, chamas and businesses. Works on any phone, no internet needed.',price:'From KES 15,000',tag:"Africa's Talking API"},
    {n:'05',icon:'💚',title:'M-Pesa Integration',desc:'STK Push, C2B, B2C, Paybill & Till number. Full Daraja API setup for your website or app.',price:'From KES 8,000',tag:'Daraja API · Safaricom'},
    {n:'06',icon:'💬',title:'WhatsApp Bots',desc:'Automated WhatsApp bots for businesses. Auto-replies, order taking, customer support 24/7.',price:'From KES 10,000',tag:'Meta API · Twilio'},
    {n:'07',icon:'📨',title:'Bulk SMS Systems',desc:'SMS blasting for schools, churches, saccos. Schedule, personalize and track delivery.',price:'From KES 8,000',tag:"Africa's Talking · SMS"},
    {n:'08',icon:'📦',title:'Inventory Systems',desc:'Stock management for shops and businesses. Track products, sales, suppliers and low-stock alerts.',price:'From KES 15,000',tag:'Django · React'},
    {n:'09',icon:'🏫',title:'School · Hospital · Church Systems',desc:'Custom management portals for institutions. Fees, records, appointments, member management.',price:'From KES 20,000',tag:'Custom Built · Django'},
    {n:'10',icon:'💰',title:'Payroll Systems',desc:'Salary calculations, deductions, payslips for SMEs, NGOs and schools. NHIF & NSSF ready.',price:'From KES 20,000',tag:'Django · PDF · React'},
    {n:'11',icon:'🔐',title:'Cyber Security Audits',desc:'Website vulnerability testing, penetration testing and security reports for businesses.',price:'From KES 15,000',tag:'Security · Pen Testing'},
    {n:'12',icon:'📊',title:'Data Analytics Dashboards',desc:'Turn your business data into visual insights. Sales reports, trends, KPIs all in one place.',price:'From KES 20,000',tag:'Charts · Python · React'},
    {n:'13',icon:'🤖',title:'AI Chatbots',desc:'Customer service bots powered by AI. Answer questions, book appointments, take orders 24/7.',price:'From KES 15,000',tag:'OpenAI · Claude API'},
    {n:'14',icon:'🛒',title:'E-Commerce Stores',desc:'Full online shop with product catalog, cart, M-Pesa checkout and order management.',price:'From KES 15,000',tag:'Next.js · Django · M-Pesa'},
    {n:'15',icon:'📅',title:'Booking & Appointment Systems',desc:'Online booking for salons, clinics, hotels and consultants. Calendar, reminders, payments.',price:'From KES 10,000',tag:'Django · React · SMS'},
    {n:'16',icon:'🏘️',title:'Real Estate Platforms',desc:'Property listing sites with search, filters, photo galleries and agent contact features.',price:'From KES 20,000',tag:'Next.js · Django'},
    {n:'17',icon:'📰',title:'News & Blog Platforms',desc:'Content management systems for media houses, bloggers and corporate communications.',price:'From KES 10,000',tag:'CMS · Next.js · Django'},
    {n:'18',icon:'🎓',title:'E-Learning Platforms',desc:'Online courses, video lessons, quizzes, progress tracking and certificate generation.',price:'From KES 25,000',tag:'Django · React · Video'},
    {n:'19',icon:'🚚',title:'Delivery Tracking Systems',desc:'Real-time order and delivery tracking for businesses, restaurants and courier services.',price:'From KES 15,000',tag:'Django · Maps API'},
    {n:'20',icon:'☁️',title:'Cloud & Hosting Setup',desc:'Help businesses migrate to cloud, set up servers, domains, SSL and deployment pipelines.',price:'From KES 5,000',tag:'AWS · Vercel · Render'},
  ]
  return(
    <section id="services" style={{background:'var(--deep)'}}>
      <div className="reveal">
        <div className="eyebrow">What We Do</div>
        <h2 className="sec-title">20 Ways We Build<br/>Your Digital Future</h2>
        <p className="sec-sub">From simple websites to complex SaaS platforms — complete digital solutions built for Kenya and beyond.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:1,background:'var(--border)',marginTop:56}} className="svc-grid">
        {svcs.map(s=>(
          <div key={s.n} className="reveal" style={{background:'var(--card)',padding:'32px 24px',position:'relative',overflow:'hidden',transition:'all 0.3s',cursor:'default'}}
            onMouseEnter={e=>{e.currentTarget.style.background='var(--card2)';e.currentTarget.style.transform='translateY(-4px)'}}
            onMouseLeave={e=>{e.currentTarget.style.background='var(--card)';e.currentTarget.style.transform='translateY(0)'}}>
            <span style={{fontFamily:'Urbanist,sans-serif',fontSize:48,fontWeight:800,color:'rgba(14,165,233,0.05)',letterSpacing:'-3px',lineHeight:1,marginBottom:16,display:'block'}}>{s.n}</span>
            <span style={{fontSize:28,marginBottom:14,display:'block'}}>{s.icon}</span>
            <h3 style={{fontFamily:'Urbanist,sans-serif',fontSize:15,fontWeight:700,marginBottom:8,lineHeight:1.3}}>{s.title}</h3>
            <p style={{color:'var(--muted)',fontSize:12,lineHeight:1.7,fontWeight:300,marginBottom:12}}>{s.desc}</p>
            <span style={{display:'inline-block',background:'rgba(14,165,233,0.08)',border:'1px solid rgba(14,165,233,0.18)',color:'var(--blue2)',fontSize:11,padding:'3px 10px',borderRadius:100,fontWeight:600}}>{s.price}</span><br/>
            <span style={{display:'inline-block',marginTop:6,background:'rgba(14,165,233,0.04)',color:'var(--faint)',fontSize:10,padding:'2px 8px',borderRadius:100,fontWeight:500}}>{s.tag}</span>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:1200px){.svc-grid{grid-template-columns:repeat(4,1fr)!important}}
        @media(max-width:900px){.svc-grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:600px){.svc-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:400px){.svc-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  )
}
