import Logo from './Logo'
export default function Footer(){
  return(
    <footer style={{
      padding:'28px 6%',
      borderTop:'1px solid #1a1a1a',
      display:'flex',alignItems:'center',
      justifyContent:'space-between',
      flexWrap:'wrap',gap:12,
      background:'#000',
      position:'relative',zIndex:1
    }}>
      <a href="#" style={{display:'flex',alignItems:'center',gap:8,textDecoration:'none'}}>
        <Logo/>
      </a>
      <p style={{color:'#333',fontSize:12,textAlign:'center'}}>© 2026 Kaliworks Technologies. Building Africa's digital future from Nairobi.</p>
      <p style={{color:'#84cc16',fontSize:12}}>Nairobi, Kenya</p>
    </footer>
  )
}
