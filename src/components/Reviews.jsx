import { useState, useEffect } from 'react'

const ADMIN_KEY = 'kaliworks_admin_2026'

export default function Reviews(){
  const [open, setOpen] = useState(false)
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState({name:'',role:'',text:''})
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [adminMode, setAdminMode] = useState(false)
  const [adminKey, setAdminKey] = useState('')
  const [adminInput, setAdminInput] = useState(false)

  // Load from localStorage
  useEffect(()=>{
    try{
      const saved = JSON.parse(localStorage.getItem('kaliworks_reviews')||'[]')
      setReviews(saved)
    }catch(e){}
  },[])

  function save(updated){
    localStorage.setItem('kaliworks_reviews', JSON.stringify(updated))
    setReviews(updated)
  }

  function submitReview(e){
    e.preventDefault()
    if(!form.name.trim()||!form.text.trim()) return
    setSubmitting(true)
    const newReview = {
      id: Date.now(),
      name: form.name.trim(),
      role: form.role.trim(),
      text: form.text.trim(),
      up: 0,
      down: 0,
      date: new Date().toLocaleDateString('en-KE'),
      approved: false,
    }
    const updated = [...reviews, newReview]
    save(updated)
    setForm({name:'',role:'',text:''})
    setSubmitting(false)
    setDone(true)
    setTimeout(()=>setDone(false), 3000)
  }

  function vote(id, type){
    const voted = JSON.parse(localStorage.getItem('kaliworks_voted')||'{}')
    if(voted[id]) return
    const updated = reviews.map(r=>r.id===id?{...r,[type]:r[type]+1}:r)
    save(updated)
    voted[id] = type
    localStorage.setItem('kaliworks_voted', JSON.stringify(voted))
  }

  function deleteReview(id){
    save(reviews.filter(r=>r.id!==id))
  }

  function approveReview(id){
    save(reviews.map(r=>r.id===id?{...r,approved:true}:r))
  }

  function checkAdmin(){
    if(adminKey === ADMIN_KEY){
      setAdminMode(true)
      setAdminInput(false)
    } else {
      alert('Wrong key')
    }
  }

  // Only approved, max 3
  const approved = reviews.filter(r=>r.approved).slice(-3)
  const pending = reviews.filter(r=>!r.approved)
  const voted = JSON.parse(localStorage.getItem('kaliworks_voted')||'{}')

  return(
    <section id="reviews" style={{background:'#000',borderTop:'1px solid #1a1a1a'}}>
      <div style={{maxWidth:900,margin:'0 auto'}}>
        <p className="eyebrow reveal">Reviews</p>
        <h2 className="sec-title reveal">What Clients Say</h2>

        {/* Reviews drawer */}
        <div className="reveal drawer-item" style={{marginBottom:8}}>
          <button className="drawer-btn" onClick={()=>setOpen(!open)}>
            <span>Client Reviews</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"
              style={{transform:open?'rotate(180deg)':'none',transition:'transform 0.3s',flexShrink:0}}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {open&&(
            <div style={{padding:'0 20px 20px',borderTop:'1px solid #1a1a1a'}}>
              {approved.length===0?(
                <p style={{color:'#555',fontSize:14,padding:'16px 0',textAlign:'center'}}>No reviews yet. Be the first to leave one below.</p>
              ):approved.map((r,i)=>(
                <div key={r.id} style={{padding:'16px 0',borderBottom:i<approved.length-1?'1px solid #1a1a1a':'none'}}>
                  <p style={{color:'#ccc',fontSize:14,lineHeight:1.8,marginBottom:10,fontStyle:'italic'}}>"{r.text}"</p>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:8}}>
                    <div>
                      <div style={{fontWeight:700,fontSize:13,color:'#fff'}}>{r.name}</div>
                      {r.role&&<div style={{fontSize:12,color:'#555'}}>{r.role}</div>}
                    </div>
                    <div style={{display:'flex',gap:10,alignItems:'center'}}>
                      <button onClick={()=>vote(r.id,'up')}
                        style={{display:'flex',alignItems:'center',gap:4,background:'rgba(132,204,22,0.08)',border:'1px solid rgba(132,204,22,0.2)',borderRadius:6,padding:'5px 10px',color:voted[r.id]==='up'?'#84cc16':'#555',fontSize:12,cursor:'pointer'}}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/>
                          <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                        </svg>
                        {r.up}
                      </button>
                      <button onClick={()=>vote(r.id,'down')}
                        style={{display:'flex',alignItems:'center',gap:4,background:'rgba(239,68,68,0.06)',border:'1px solid rgba(239,68,68,0.2)',borderRadius:6,padding:'5px 10px',color:voted[r.id]==='down'?'#ef4444':'#555',fontSize:12,cursor:'pointer'}}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3z"/>
                          <path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
                        </svg>
                        {r.down}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Leave a review */}
        <div className="reveal" style={{background:'#0a0a0a',border:'1px solid #1a1a1a',borderRadius:12,padding:24,marginBottom:16}}>
          <p style={{fontWeight:700,fontSize:14,color:'#fff',marginBottom:16}}>Leave a Review</p>
          {done?(
            <div style={{background:'rgba(132,204,22,0.08)',border:'1px solid rgba(132,204,22,0.2)',borderRadius:8,padding:'12px 16px',color:'#84cc16',fontSize:14}}>
              Thank you! Your review has been submitted for approval.
            </div>
          ):(
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                <input value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}
                  placeholder="Your name" required
                  style={{background:'#111',border:'1px solid #1a1a1a',borderRadius:8,padding:'10px 14px',color:'#fff',fontSize:13,outline:'none'}}
                  onFocus={e=>e.target.style.borderColor='#84cc16'}
                  onBlur={e=>e.target.style.borderColor='#1a1a1a'}/>
                <input value={form.role} onChange={e=>setForm(f=>({...f,role:e.target.value}))}
                  placeholder="Your role (optional)"
                  style={{background:'#111',border:'1px solid #1a1a1a',borderRadius:8,padding:'10px 14px',color:'#fff',fontSize:13,outline:'none'}}
                  onFocus={e=>e.target.style.borderColor='#84cc16'}
                  onBlur={e=>e.target.style.borderColor='#1a1a1a'}/>
              </div>
              <textarea value={form.text} onChange={e=>setForm(f=>({...f,text:e.target.value}))}
                placeholder="Write your review..." rows={3} required
                style={{background:'#111',border:'1px solid #1a1a1a',borderRadius:8,padding:'10px 14px',color:'#fff',fontSize:13,outline:'none',resize:'vertical'}}
                onFocus={e=>e.target.style.borderColor='#84cc16'}
                onBlur={e=>e.target.style.borderColor='#1a1a1a'}/>
              <button onClick={submitReview} disabled={submitting||!form.name.trim()||!form.text.trim()}
                style={{alignSelf:'flex-start',padding:'10px 24px',borderRadius:8,background:'#84cc16',color:'#000',fontWeight:700,fontSize:13,border:'none',cursor:'pointer',opacity:submitting?0.7:1}}>
                Submit Review
              </button>
            </div>
          )}
        </div>

        {/* Admin panel */}
        <div className="reveal">
          {!adminMode&&!adminInput&&(
            <button onClick={()=>setAdminInput(true)}
              style={{background:'transparent',border:'none',color:'#333',fontSize:11,cursor:'pointer',padding:0}}>
              Admin
            </button>
          )}
          {adminInput&&(
            <div style={{display:'flex',gap:8,alignItems:'center'}}>
              <input type="password" value={adminKey} onChange={e=>setAdminKey(e.target.value)} placeholder="Admin key"
                style={{background:'#0a0a0a',border:'1px solid #1a1a1a',borderRadius:6,padding:'6px 12px',color:'#fff',fontSize:12,outline:'none',width:140}}/>
              <button onClick={checkAdmin} style={{background:'#84cc16',color:'#000',border:'none',borderRadius:6,padding:'6px 12px',fontSize:12,fontWeight:700,cursor:'pointer'}}>Enter</button>
            </div>
          )}
          {adminMode&&(
            <div style={{background:'#0a0a0a',border:'1px solid rgba(132,204,22,0.2)',borderRadius:10,padding:16}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
                <span style={{color:'#84cc16',fontSize:12,fontWeight:700}}>Admin — {pending.length} pending, {approved.length} approved</span>
                <button onClick={()=>setAdminMode(false)} style={{background:'transparent',border:'none',color:'#555',fontSize:12,cursor:'pointer'}}>Exit</button>
              </div>
              {reviews.length===0&&<p style={{color:'#555',fontSize:13}}>No reviews yet.</p>}
              {reviews.map(r=>(
                <div key={r.id} style={{padding:'10px 0',borderBottom:'1px solid #111',display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:10}}>
                  <div>
                    <div style={{fontWeight:600,fontSize:13,color:'#fff'}}>{r.name} {r.role&&<span style={{color:'#555',fontWeight:400}}>· {r.role}</span>}</div>
                    <p style={{color:'#999',fontSize:12,lineHeight:1.6,margin:'4px 0'}}>{r.text.slice(0,100)}{r.text.length>100?'...':''}</p>
                    <span style={{fontSize:10,color:r.approved?'#84cc16':'#f59e0b'}}>{r.approved?'Approved':'Pending'}</span>
                  </div>
                  <div style={{display:'flex',gap:6,flexShrink:0}}>
                    {!r.approved&&(
                      <button onClick={()=>approveReview(r.id)}
                        style={{background:'rgba(132,204,22,0.1)',border:'1px solid rgba(132,204,22,0.3)',color:'#84cc16',borderRadius:6,padding:'4px 10px',fontSize:11,fontWeight:700,cursor:'pointer'}}>
                        Approve
                      </button>
                    )}
                    <button onClick={()=>deleteReview(r.id)}
                      style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.3)',color:'#ef4444',borderRadius:6,padding:'4px 10px',fontSize:11,fontWeight:700,cursor:'pointer'}}>
                      Delete
                    </button>
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
