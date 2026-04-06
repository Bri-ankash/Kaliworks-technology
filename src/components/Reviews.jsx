import { useState } from 'react'

export default function Reviews(){
  const [open,setOpen]=useState(false)
  const [reviews,setReviews]=useState([])

  return(
    <section style={{background:'#000',padding:'80px 6%',borderTop:'1px solid #1a1a1a'}}>
      
      <div style={{maxWidth:800,margin:'0 auto'}}>
        <div style={{color:'#32CD32',fontSize:13,letterSpacing:2}}>REVIEWS</div>
        <h2 style={{color:'#32CD32'}}>Client Reviews</h2>

        <div style={{border:'1px solid #1a1a1a',borderRadius:10,marginTop:20}}>
          
          {/* TOGGLE */}
          <button onClick={()=>setOpen(!open)}
            style={{
              width:'100%',
              padding:16,
              background:'#0a0a0a',
              border:'none',
              color:'#fff',
              textAlign:'left',
              cursor:'pointer'
            }}>
            View Reviews
          </button>

          {/* CONTENT */}
          {open && (
            <div style={{padding:16}}>
              
              {reviews.length===0 && (
                <p style={{color:'#aaaaaa'}}>No reviews yet. Be the first to leave one.</p>
              )}

              {reviews.map((r,i)=>(
                <div key={i} style={{marginBottom:16,borderBottom:'1px solid #1a1a1a'}}>
                  <p style={{color:'#fff'}}>{r.text}</p>

                  <div style={{display:'flex',gap:10}}>
                    <button>👍</button>
                    <button>👎</button>
                  </div>
                </div>
              ))}

            </div>
          )}

        </div>
      </div>

    </section>
  )
}
