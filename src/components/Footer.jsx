import Logo from './Logo'
export default function Footer(){
  return(
    <footer style={{padding:'32px 6%',borderTop:'1px solid rgba(14,165,233,0.12)',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12,position:'relative',zIndex:1}}>
      <a href="#" style={{display:'flex',alignItems:'center',gap:8,textDecoration:'none'}}>
        <Logo/>
        <span style={{fontFamily:'Urbanist,sans-serif',fontWeight:800,fontSize:15,color:'#e8f4ff'}}>Kali<span style={{color:'#0ea5e9'}}>works</span> Technologies</span>
      </a>
      <p style={{color:'#3a5270',fontSize:12,textAlign:'center'}}>© 2026 Kaliworks Technologies. A team of passionate developers building Africa's digital future.</p>
      <p style={{color:'#0ea5e9',fontSize:12}}>Nairobi, Kenya </p>
    </footer>
  )
}
