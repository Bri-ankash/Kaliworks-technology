export default function Stats(){
  const items = [
    {n:'50+',label:'Projects Delivered'},
    {n:'30+',label:'Happy Clients'},
    {n:'99%',label:'Satisfaction Rate'},
    {n:'20+',label:'Services Offered'},
  ]

  return(
    <section style={{background:#000000,borderTop:'1px solid #000000,padding:'56px 5%'}}>
      <div style={{maxWidth:700,margin:'0 auto'}}>
        <div className="stats-grid" style={{
          display:'grid',
          gridTemplateColumns:'1fr 1fr',
          gap:2,
          background:#000000,
          border:'1px solid #000000,
          borderRadius:14,
          overflow:'hidden'
        }}>
          {items.map((item,i)=>(
            <div key={i} className="reveal" style={{
              background:#000000,
              padding:'32px 20px',
              textAlign:'center'
            }}>
              <div style={{
                fontSize:'clamp(32px,6vw,48px)',
                fontWeight:800,
                color:'#84cc16',
                letterSpacing:'-2px',
                lineHeight:1,
                marginBottom:8
              }}>{item.n}</div>
              <div style={{color:'#888880',fontSize:12,fontWeight:600,textTransform:'uppercase',letterSpacing:2}}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
