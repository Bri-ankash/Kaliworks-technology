export default function Contact(){
  const methods=[
    {href:'tel:+254746951739',icon:'📞',type:'Call Us',val:'+254 746 951 739'},
    {href:'https://wa.me/254746951739',icon:'💬',type:'WhatsApp',val:'+254 746 951 739'},
    {href:'mailto:kaliworks61@gmail.com',icon:'✉️',type:'Email',val:'kaliworks61@gmail.com'},
  ]
  return(
    <section id="contact" style={{background:#000000,textAlign:'center'}}>
      <div className="reveal">
        <div className="eyebrow" style={{justifyContent:'center'}}>Get In Touch</div>
        <h2 className="sec-title">Ready to Build<br/>Something Great?</h2>
        <p className="sec-sub" style={{margin:'0 auto',textAlign:'center'}}>Tell us about your project. We respond within 2 hours — no commitment required.</p>
      </div>
      <div className="reveal" style={{maxWidth:720,margin:'56px auto 0',background:#000000,border:'1px solid #222',borderRadius:24,padding:'56px 44px',position:'relative',overflow:'hidden',maxWidth:'100%'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:'linear-gradient(90deg,transparent,#84cc16,transparent)'}}/>
        <div style={{fontFamily:'Urbanist,sans-serif',fontSize:22,fontWeight:800,marginBottom:6}}>Kaliworks Technologies</div>
        <div style={{color:'#999',fontSize:14,fontWeight:300,marginBottom:40}}>Your technology partner in Kenya 🇰🇪 · We build, you grow.</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14}} className="c-grid">
          {methods.map(c=>(
            <a key={c.type} href={c.href} target={c.href.startsWith('http')?'_blank':undefined} style={{background:'rgba(14,165,233,0.04)',border:'1px solid #000000,borderRadius:14,padding:'24px 16px',display:'block',transition:'all 0.25s'}}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(14,165,233,0.09)';e.currentTarget.style.borderColor='rgba(14,165,233,0.4)';e.currentTarget.style.transform='translateY(-4px)'}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(14,165,233,0.04)';e.currentTarget.style.borderColor=#000000;e.currentTarget.style.transform='translateY(0)'}}>
              <div style={{fontSize:26,marginBottom:10}}>{c.icon}</div>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',color:'#84cc16',marginBottom:5}}>{c.type}</div>
              <div style={{fontSize:12,fontWeight:600,color:'#fff'}}>{c.val}</div>
            </a>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.c-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
