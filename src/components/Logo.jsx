export default function Logo({size=32}){
  return(
    <div style={{display:'flex',alignItems:'center',gap:10}}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#000"/>
        <text x="20" y="27" textAnchor="middle" fill="#84cc16" fontSize="20" fontWeight="800" fontFamily="Inter,sans-serif">K</text>
      </svg>
      <span style={{fontWeight:800,fontSize:18,letterSpacing:'-0.5px'}}>
        <span style={{color:'#fbbf24'}}>Kali</span><span style={{color:'#84cc16'}}>works</span>
        <span style={{color:'#999',fontWeight:400,fontSize:13}}> Technologies</span>
      </span>
    </div>
  )
}
