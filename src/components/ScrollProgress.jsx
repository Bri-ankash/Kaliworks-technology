import { useState, useEffect } from 'react'
export default function ScrollProgress(){
  const [progress, setProgress] = useState(0)
  useEffect(()=>{
    const update = ()=>{
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop/docHeight)*100 : 0)
    }
    window.addEventListener('scroll', update)
    return ()=>window.removeEventListener('scroll', update)
  },[])
  return(
    <div style={{position:'fixed',top:0,left:0,right:0,height:3,background:'rgba(14,165,233,0.15)',zIndex:9999}}>
      <div style={{height:'100%',background:'linear-gradient(90deg,#0ea5e9,#38bdf8)',width:`${progress}%`,transition:'width 0.1s',boxShadow:'0 0 10px #0ea5e9'}}/>
    </div>
  )
}
