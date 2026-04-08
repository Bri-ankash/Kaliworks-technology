export default function Logo({ size=34 }){
  return(
    <div style={{display:'flex',alignItems:'center',gap:10}}>
      {/* Tech logo — gold border, lime accent, dark bg */}
      <div style={{
        width:size,height:size,
        borderRadius:9,
        background:'#0055cc',
        border:'2px solid #fbbf24',
        display:'flex',alignItems:'center',justifyContent:'center',
        flexShrink:0,
        position:'relative',
        overflow:'hidden',
        boxShadow:'0 0 12px rgba(251,191,36,0.25), inset 0 0 8px rgba(132,204,22,0.05)'
      }}>
        {/* Corner accent */}
        <div style={{
          position:'absolute',top:0,right:0,
          width:8,height:8,
          background:'#84cc16',
          borderBottomLeftRadius:4
        }}/>
        {/* K letter */}
        <span style={{
          color:'#fbbf24',
          fontWeight:900,
          fontSize:size*0.50,
          fontFamily:'Inter,sans-serif',
          lineHeight:1,
          letterSpacing:'-1px',
          zIndex:1
        }}>K</span>
      </div>

      {/* Text */}
      <div style={{lineHeight:1.15}}>
        <div style={{
          fontSize:Math.max(13, size*0.44),
          fontWeight:800,
          letterSpacing:'-0.3px',
          lineHeight:1
        }}>
          <span style={{color:'#fbbf24'}}>Kali</span><span style={{color:'#84cc16'}}>works</span>
        </div>
        <div style={{
          fontSize:9,
          color:'#444',
          fontWeight:600,
          letterSpacing:'1.5px',
          textTransform:'uppercase',
          marginTop:2
        }}>Technologies</div>
      </div>
    </div>
  )
}
