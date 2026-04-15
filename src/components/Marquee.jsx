export default function Marquee(){
  const services = [
    'Web Applications','Mobile Apps','SaaS Platforms','M-Pesa Integration',
    'School Management Systems','E-Commerce Stores','REST APIs','Marketplace Apps',
    'Data Dashboards','Landing Pages','Booking Systems','Payroll Systems',
    'Inventory Management','CRM Systems','Portfolio Websites','Custom Software',
  ]

  // Duplicate for seamless loop
  const items = [...services, ...services]

  return(
    <div style={{
      background:'#241a00',
      borderTop:'1px solid #3d3000',
      borderBottom:'1px solid #3d3000',
      padding:'14px 0',
      overflow:'hidden',
      position:'relative',
    }}>
      {/* Fade edges */}
      <div style={{
        position:'absolute',left:0,top:0,bottom:0,width:80,
        background:'linear-gradient(to right,#241a00,transparent)',
        zIndex:2,pointerEvents:'none'
      }}/>
      <div style={{
        position:'absolute',right:0,top:0,bottom:0,width:80,
        background:'linear-gradient(to left,#241a00,transparent)',
        zIndex:2,pointerEvents:'none'
      }}/>

      <div style={{
        display:'flex',
        animation:'marquee 20s linear infinite',
        width:'max-content',
      }}>
        {items.map((item,i)=>(
          <div key={i} style={{
            display:'flex',alignItems:'center',gap:10,
            whiteSpace:'nowrap',flexShrink:0,
            padding:'0 20px',
          }}>
            <div style={{
              width:6,height:6,borderRadius:'50%',flexShrink:0,
              background:i%2===0?'#84cc16':'#fbbf24',
              boxShadow:`0 0 8px ${i%2===0?'#84cc16':'#fbbf24'}`,
            }}/>
            <span style={{
              fontSize:14,
              color:i%2===0?'#e8d5a3':'#c8b870',
              fontWeight:600,
              letterSpacing:'0.3px',
            }}>{item}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
