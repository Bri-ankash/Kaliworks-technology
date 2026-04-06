export default function Logo({size=36}){
  return(
    <div style={{display:'flex',alignItems:'center',gap:10}}>
      {/* K icon — gold on dark background, clearly visible */}
      <div style={{
        width:size,height:size,
        borderRadius:9,
        background:'linear-gradient(135deg,#fbbf24,#f59e0b)',
        display:'flex',alignItems:'center',justifyContent:'center',
        flexShrink:0,
        boxShadow:'0 0 16px rgba(251,191,36,0.3)'
      }}>
        <span style={{
          color:'#000',fontWeight:900,
          fontSize:size*0.52,
          fontFamily:'Inter,sans-serif',
          lineHeight:1
        }}>K</span>
      </div>
      <div style={{lineHeight:1.1}}>
        <div style={{fontSize:15,fontWeight:800,letterSpacing:'-0.3px'}}>
          <span style={{color:'#fbbf24'}}>Kali</span><span style={{color:'#84cc16'}}>works</span>
        </div>
        <div style={{fontSize:10,color:'#555',fontWeight:500,letterSpacing:1,textTransform:'uppercase'}}>Technologies</div>
      </div>
    </div>
  )
}
