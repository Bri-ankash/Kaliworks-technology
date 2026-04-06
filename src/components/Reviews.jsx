import { useState } from 'react'

const REVIEWS = [
  {name:'Sarah M.',role:'Founder, Servigo',text:'Kaliworks built our entire marketplace from scratch. M-Pesa escrow, verified providers, real-time tracking. They understood Kenya before I finished explaining.'},
  {name:'James K.',role:'CEO, Smart Pochi',text:'Our M-Pesa analyzer went from idea to live in 6 weeks. Clean code, proper documentation, and they stayed available after launch to fix edge cases.'},
  {name:'Wanjiru N.',role:'Director, Chama Platform',text:'The chama management system handles 50+ groups. They built offline capability we never asked for but really needed for rural members.'},
]

export default function Reviews(){
  const [open, setOpen] = useState(false)
  return(
    <section style={{background:'#F4F4F5',borderTop:'1px solid #E4E4E7'}}>
      <div style={{maxWidth:800,margin:'0 auto'}}>
        <p className="eyebrow reveal">Reviews</p>
        <h2 className="sec-title reveal">What Clients Say</h2>
        <div className="reveal" style={{border:'1px solid #E4E4E7',borderRadius:10,overflow:'hidden',background:'#fff'}}>
          <button onClick={()=>setOpen(!open)}
            style={{width:'100%',padding:'16px 20px',display:'flex',justifyContent:'space-between',alignItems:'center',background:'transparent',border:'none',cursor:'pointer',textAlign:'left',gap:12}}>
            <span style={{fontSize:15,fontWeight:600,color:'#18181B'}}>Client Reviews ({REVIEWS.length})</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" style={{transform:open?'rotate(180deg)':'none',transition:'transform 0.3s',flexShrink:0}}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {open&&(
            <div style={{padding:'0 20px 20px',borderTop:'1px solid #E4E4E7'}}>
              {REVIEWS.map((r,i)=>(
                <div key={i} style={{paddingTop:16,paddingBottom:16,borderBottom:i<REVIEWS.length-1?'1px solid #E4E4E7':'none'}}>
                  <p style={{color:'#3F3F46',fontSize:14,lineHeight:1.8,marginBottom:10,fontStyle:'italic'}}>"{r.text}"</p>
                  <div style={{fontWeight:700,fontSize:13,color:'#18181B'}}>{r.name}</div>
                  <div style={{fontSize:12,color:'#71717A'}}>{r.role}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
