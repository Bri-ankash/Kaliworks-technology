import { useState, useEffect, useRef } from 'react'

function CountUp({ target, suffix='' }){
  const [count, setCount] = useState(0)
  const ref = useRef()
  useEffect(()=>{
    const observer = new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){
        let start = 0
        const num = parseInt(target)
        const duration = 1500
        const step = duration / num
        const timer = setInterval(()=>{
          start += 1
          setCount(start)
          if(start >= num) clearInterval(timer)
        }, step)
        observer.disconnect()
      }
    },{ threshold:0.5 })
    if(ref.current) observer.observe(ref.current)
    return ()=>observer.disconnect()
  },[target])
  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats(){
  const stats=[
    {num:'50',suffix:'+',label:'Projects Delivered'},
    {num:'30',suffix:'+',label:'Happy Clients'},
    {num:'99',suffix:'%',label:'Satisfaction Rate'},
    {num:'20',suffix:'+',label:'Services Offered'},
  ]
  return(
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',borderTop:'1px solid rgba(14,165,233,0.12)',borderBottom:'1px solid rgba(14,165,233,0.12)',background:'rgba(14,165,233,0.12)',gap:1}}>
      {stats.map(({num,suffix,label})=>(
        <div key={label} className="reveal" style={{background:'#000',padding:'40px 24px',textAlign:'center'}}>
          <div style={{fontFamily:'Urbanist,sans-serif',fontSize:42,fontWeight:800,color:'#84cc16',letterSpacing:'-2px',lineHeight:1,marginBottom:8}}>
            <CountUp target={num} suffix={suffix}/>
          </div>
          <div style={{color:'#999',fontSize:12,fontWeight:500,letterSpacing:'0.5px',textTransform:'uppercase'}}>{label}</div>
        </div>
      ))}
      <style>{`@media(max-width:600px){.stats-wrap{grid-template-columns:1fr 1fr!important}}`}</style>
    </div>
  )
}
