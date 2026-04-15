import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const ADMIN_PASSWORD = 'Kalali@2026'

export default function AdminReviews(){
  const [auth, setAuth] = useState(false)
  const [pwd, setPwd] = useState('')
  const [reviews, setReviews] = useState([])
  const [filter, setFilter] = useState('pending')

  useEffect(()=>{ if(auth) fetchReviews() },[auth, filter])

  async function fetchReviews(){
    const { data } = await supabase
      .from('kw_reviews')
      .select('*')
      .eq('status', filter)
      .order('created_at', { ascending: false })
    if(data) setReviews(data)
  }

  async function updateStatus(id, status){
    await supabase.from('kw_reviews').update({ status }).eq('id', id)
    fetchReviews()
  }

  async function deleteReview(id){
    await supabase.from('kw_reviews').delete().eq('id', id)
    fetchReviews()
  }

  if(!auth) return(
    <div style={{minHeight:'100vh',background:'var(--black)',display:'flex',alignItems:'center',justifyContent:'center',padding:24}}>
      <div style={{background:'var(--card)',border:'1px solid var(--border2)',borderRadius:20,padding:40,width:'100%',maxWidth:360,textAlign:'center'}}>
        <h2 style={{fontFamily:'Urbanist,sans-serif',fontSize:24,fontWeight:800,marginBottom:8}}>Admin Panel</h2>
        <p style={{color:'var(--muted)',fontSize:13,marginBottom:24}}>Kaliworks Reviews Management</p>
        <input type="password" placeholder="Enter admin password" value={pwd} onChange={e=>setPwd(e.target.value)}
          style={{width:'100%',background:'var(--deep)',border:'1px solid var(--border)',borderRadius:8,padding:'12px 14px',color:'var(--white)',fontSize:14,outline:'none',marginBottom:14}}/>
        <button onClick={()=>{ if(pwd===ADMIN_PASSWORD) setAuth(true); else alert('Wrong password!') }}
          style={{width:'100%',background:'var(--blue)',color:'#1a1200',padding:12,borderRadius:10,fontWeight:700,fontSize:14,border:'none',cursor:'pointer'}}>
          Login
        </button>
      </div>
    </div>
  )

  return(
    <div style={{minHeight:'100vh',background:'var(--black)',padding:'40px 6%'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:32,flexWrap:'wrap',gap:12}}>
        <h1 style={{fontFamily:'Urbanist,sans-serif',fontSize:28,fontWeight:800}}>Reviews Admin</h1>
        <div style={{display:'flex',gap:10}}>
          {['pending','approved','rejected'].map(s=>(
            <button key={s} onClick={()=>setFilter(s)}
              style={{padding:'8px 18px',borderRadius:8,border:'none',cursor:'pointer',fontWeight:600,fontSize:13,textTransform:'capitalize',
                background:filter===s?'var(--blue)':'var(--card)',
                color:filter===s?'#1a1200':'var(--muted)'}}>
              {s}
            </button>
          ))}
        </div>
      </div>
      {reviews.length === 0 ? (
        <p style={{color:'var(--muted)',textAlign:'center',padding:60}}>No {filter} reviews</p>
      ) : (
        <div style={{display:'flex',flexDirection:'column',gap:16}}>
          {reviews.map(r=>(
            <div key={r.id} style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:16,padding:24}}>
              <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12,marginBottom:12}}>
                <div>
                  <span style={{fontWeight:700,fontSize:15}}>{r.name}</span>
                  <span style={{color:'var(--muted)',fontSize:13,marginLeft:10}}>{r.email}</span>
                  {r.service && <span style={{color:'var(--blue)',fontSize:12,marginLeft:10,fontWeight:600}}>{r.service}</span>}
                </div>
                <div style={{display:'flex',gap:2}}>
                  {[1,2,3,4,5].map(s=><span key={s} style={{fontSize:14,filter:r.rating>=s?'brightness(1)':'brightness(0.3)'}}>⭐</span>)}
                </div>
              </div>
              <p style={{color:'var(--muted)',fontSize:14,lineHeight:1.7,marginBottom:16}}>{r.comment}</p>
              <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
                {filter !== 'approved' && (
                  <button onClick={()=>updateStatus(r.id,'approved')}
                    style={{background:'#22c55e',color:'#1a1200',padding:'8px 18px',borderRadius:8,fontWeight:700,fontSize:13,border:'none',cursor:'pointer'}}>
                    ✓ Approve
                  </button>
                )}
                {filter !== 'rejected' && (
                  <button onClick={()=>updateStatus(r.id,'rejected')}
                    style={{background:'#f59e0b',color:'#1a1200',padding:'8px 18px',borderRadius:8,fontWeight:700,fontSize:13,border:'none',cursor:'pointer'}}>
                    ✗ Reject
                  </button>
                )}
                <button onClick={()=>deleteReview(r.id)}
                  style={{background:'#ef4444',color:'#fff',padding:'8px 18px',borderRadius:8,fontWeight:700,fontSize:13,border:'none',cursor:'pointer'}}>
                  🗑 Delete
                </button>
              </div>
              <p style={{color:'var(--faint)',fontSize:11,marginTop:12}}>{new Date(r.created_at).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
