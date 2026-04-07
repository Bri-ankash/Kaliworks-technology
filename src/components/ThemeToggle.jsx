import { useState, useEffect, useRef } from 'react'

export default function ThemeToggle(){
  const [dark, setDark] = useState(true)
  const tapRef = useRef(null)
  const tapCount = useRef(0)

  useEffect(()=>{
    const saved = localStorage.getItem('kali_theme')
    if(saved){ setDark(saved==='dark') }
    else setDark(true)
  },[])

  useEffect(()=>{
    const root = document.documentElement
    root.setAttribute('data-theme', dark?'dark':'light')
    localStorage.setItem('kali_theme', dark?'dark':'light')
    // Apply to body directly
    if(dark){
      document.body.style.background = '#000000'
      document.body.style.color = '#ffffff'
    } else {
      document.body.style.background = '#F9FAFB'
      document.body.style.color = '#111111'
    }
  },[dark])

  // Double tap to toggle
  useEffect(()=>{
    function onTap(e){
      if(['BUTTON','A','INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)) return
      tapCount.current += 1
      if(tapCount.current === 1){
        tapRef.current = setTimeout(()=>{ tapCount.current = 0 }, 350)
      } else if(tapCount.current >= 2){
        clearTimeout(tapRef.current)
        tapCount.current = 0
        setDark(d=>!d)
      }
    }
    document.addEventListener('touchend', onTap)
    document.addEventListener('dblclick', onTap)
    return ()=>{
      document.removeEventListener('touchend', onTap)
      document.removeEventListener('dblclick', onTap)
    }
  },[])

  return(
    <button
      onClick={()=>setDark(d=>!d)}
      title={dark?'Light mode':'Dark mode'}
      style={{
        background:'transparent',
        border:'1px solid #2a2a2a',
        borderRadius:8,
        padding:'7px 9px',
        cursor:'pointer',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexShrink:0,
        transition:'border-color 0.2s'
      }}
      onMouseEnter={e=>e.currentTarget.style.borderColor='#84cc16'}
      onMouseLeave={e=>e.currentTarget.style.borderColor='#2a2a2a'}>
      {dark?(
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ):(
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  )
}
