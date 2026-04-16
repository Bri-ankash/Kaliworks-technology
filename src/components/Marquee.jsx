import { useEffect, useRef } from 'react'

const SERVICES = [
  'Web Applications','Mobile Apps','SaaS Platforms','M-Pesa Integration',
  'School Management Systems','E-Commerce Stores','REST APIs','Marketplace Apps',
  'Data Dashboards','Landing Pages','Booking Systems','Custom Software',
  'Payroll Systems','Inventory Management','CRM Systems','Portfolio Websites',
]

export default function Marquee(){
  const items = [...SERVICES, ...SERVICES]

  return(
    <div style={{
      background:'#161616',
      borderTop:'1px solid #2a2a2a',
      borderBottom:'1px solid #2a2a2a',
      padding:'13px 0',
      overflow:'hidden',
      position:'relative',
    }}>
      {/* Fade left */}
      <div style={{
        position:'absolute',left:0,top:0,bottom:0,width:100,zIndex:2,
        background:'linear-gradient(to right,#161616,transparent)',
        pointerEvents:'none'
      }}/>
      {/* Fade right */}
      <div style={{
        position:'absolute',right:0,top:0,bottom:0,width:100,zIndex:2,
        background:'linear-gradient(to left,#161616,transparent)',
        pointerEvents:'none'
      }}/>

      <div style={{
        display:'flex',
        animation:'kali-marquee 15s linear infinite',
        width:'max-content',
      }}>
        {items.map((item,i)=>(
          <div key={i} style={{
            display:'flex',alignItems:'center',
            gap:10,padding:'0 22px',
            whiteSpace:'nowrap',flexShrink:0,
          }}>
            <div style={{
              width:5,height:5,borderRadius:'50%',flexShrink:0,
              background: i%3===0 ? '#84cc16' : i%3===1 ? '#fbbf24' : '#a3e635',
              boxShadow:`0 0 6px ${i%3===0?'#84cc16':i%3===1?'#fbbf24':'#a3e635'}`,
            }}/>
            <span style={{
              fontSize:13,
              fontWeight:600,
              color: i%2===0 ? '#d4d0c8' : '#a8a49c',
              letterSpacing:'0.2px',
            }}>{item}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes kali-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
