export default function Logo({ size=34 }){
  return(
    <div style={{display:'flex',alignItems:'center',gap:10}}>
      <div style={{
        width:size,height:size,
        borderRadius:9,
        background:'linear-gradient(135deg,#fbbf24,#f59e0b)',
        display:'flex',alignItems:'center',justifyContent:'center',
        flexShrink:0,
        boxShadow:'0 0 18px rgba(251,191,36,0.4)',
        position:'relative',overflow:'hidden',
      }}>
        {/* Corner tick */}
        <div style={{
          position:'absolute',top:0,right:0,
          width:7,height:7,
          background:'#84cc16',
          borderBottomLeftRadius:4,
        }}/>
        <span style={{
          color:'#000',fontWeight:900,
          fontSize:size*0.50,
          fontFamily:'Inter,sans-serif',
          lineHeight:1,zIndex:1,
        }}>K</span>
      </div>
      <div style={{lineHeight:1.2}}>
        <div style={{
          fontSize:Math.max(13,size*0.44),
          fontWeight:800,letterSpacing:'-0.3px',
        }}>
          <span style={{color:'#fbbf24'}}>Kali</span><span style={{color:'#84cc16'}}>works</span>
        </div>
        <div style={{
          fontSize:9,color:'#555',
          fontWeight:600,letterSpacing:'1.5px',
          textTransform:'uppercase',
        }}>Technologies</div>
      </div>
    </div>
  )
}
