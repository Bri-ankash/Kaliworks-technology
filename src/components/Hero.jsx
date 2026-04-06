import { useEffect, useState } from 'react'

export default function Hero(){
  const [v,setV]=useState(false)
  useEffect(()=>{setTimeout(()=>setV(true),100)},[])

  return(
    <section style={{
      minHeight:'100vh',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center',
      background:'#000',
      padding:'120px 6%'
    }}>
      
      <div style={{maxWidth:800}}>
        
        <h1 style={{
          color:'#fff',
          fontSize:'clamp(40px,8vw,70px)',
          fontWeight:800
        }}>
          We Build <span style={{color:'#32CD32'}}>Digital</span><br/>
          Systems That Grow
        </h1>

        <p style={{
          color:'#aaaaaa',
          marginTop:20
        }}>
          Kaliworks Technologies builds websites, apps, and systems for businesses across Kenya.
        </p>

      </div>

    </section>
  )
}
