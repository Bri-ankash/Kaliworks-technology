import Logo from './Logo'
export default function Footer(){
  return(
    <footer style={{
      padding:'24px 5%',
      borderTop:'1px solid #4a4a4a',
      background:'#333333',
      position:'relative',zIndex:1
    }}>
      <div style={{
        maxWidth:1100,margin:'0 auto',
        display:'flex',alignItems:'center',
        justifyContent:'space-between',
        flexWrap:'wrap',gap:14
      }}>
        <Logo size={32}/>
        <p style={{color:'#333',fontSize:12,textAlign:'center',flex:1,minWidth:200}}>
          © 2026 Kaliworks Technologies. Building Africa's digital future.
        </p>
        <p style={{color:'#555',fontSize:12}}>Nairobi, Kenya</p>
      </div>
    </footer>
  )
}
