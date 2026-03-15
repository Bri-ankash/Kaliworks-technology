import { useState, useEffect } from 'react'
export default function CursorGlow(){
  const [pos, setPos] = useState({x:-200,y:-200})
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    const move = e=>{ setPos({x:e.clientX,y:e.clientY}); setVisible(true) }
    const leave = ()=>setVisible(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return ()=>{ window.removeEventListener('mousemove',move); window.removeEventListener('mouseleave',leave) }
  },[])
  return(
    <div style={{
      position:'fixed',
      left:pos.x-200,top:pos.y-200,
      width:400,height:400,
      borderRadius:'50%',
      background:'radial-gradient(circle,rgba(14,165,233,0.06) 0%,transparent 70%)',
      pointerEvents:'none',
      zIndex:0,
      opacity:visible?1:0,
      transition:'opacity 0.3s',
    }}/>
  )
}
