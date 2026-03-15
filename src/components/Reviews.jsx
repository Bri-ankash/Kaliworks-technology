import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { containsVulgar } from '../lib/filter'

const supabase = createClient(
  'https://zakmtzwdaqztdtlowxzr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpha210endkYXF6dGR0bG93eHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2MDEyNzcsImV4cCI6MjA4OTE3NzI3N30.CZGh8bSa4vAoGO4ACEPYNRlwNSAWOORlYUKP9Swrrfc'
)

const STARS = [1,2,3,4,5]
const inputStyle = {
  width:'100%',background:'#1e293b',border:'1px solid #38bdf8',
  borderRadius:8,padding:'12px 14px',color:'#ffffff',fontSize:14,outline:'none',marginTop:4
}
const labelStyle = {
  color:'#94a3b8',fontSize:12,fontWeight:600,display:'block',marginBottom:4
}

export default function Reviews(){
  const [reviews, setReviews] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({name:'',email:'',rating:5,comment:'',service:''})

  useEffect(()=>{ fetchReviews() },[])

  async function fetchReviews(){
    const { data, error } = await supabase
      .from('kw_reviews')
      .select('*')
      .eq('status','approved')
      .order('created_at', { ascending: false })
    console.log('Reviews:', data, 'Error:', error)
    if(data) setReviews(data)
  }

  async function handleSubmit(e){
    e.preventDefault()
    setError('')
    if(containsVulgar(form.comment) || containsVulgar(form.name)){
      setError('Your review contains inappropriate language. Please revise.')
      return
    }
    if(form.comment.length < 20){
      setError('Please write at least 20 characters.')
      return
    }
    setLoading(true)
    const { error: err } = await supabase
      .from('kw_reviews')
      .insert([{...form, status:'pending'}])
    if(err){
      setError('Something went wrong. Please try again.')
    } else {
      setSuccess(true)
      setForm({name:'',email:'',rating:5,comment:'',service:''})
      setTimeout(()=>{ setShowForm(false); setSuccess(false) }, 3000)
    }
    setLoading(false)
  }

  const services = [
    'Web Development','Mobile App','SaaS Platform','M-Pesa Integration',
    'WhatsApp Bot','Bulk SMS','Inventory System','School/Church/Hospital System',
    'Payroll System','Other'
  ]

  return(
    <section id="reviews" style={{background:'#060b12',padding:'96px 6%',position:'relative',zIndex:1}}>
      <div className="reveal" style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',flexWrap:'wrap',gap:16,marginBottom:56}}>
        <div>
          <div className="eyebrow">Client Reviews</div>
          <h2 className="sec-title">What Clients<br/>Say About Us</h2>
          <p className="sec-sub">Real reviews from real clients. Every review is verified before publishing.</p>
        </div>
        <button onClick={()=>setShowForm(!showForm)}
          style={{background:'#0ea5e9',color:'#000',padding:'12px 28px',borderRadius:10,fontWeight:700,fontSize:14,border:'none',cursor:'pointer',flexShrink:0}}>
          ✍️ {showForm ? 'Close Form' : 'Leave a Review'}
        </button>
      </div>

      {showForm && (
        <div style={{background:'#0f172a',border:'2px solid #0ea5e9',borderRadius:20,padding:32,maxWidth:600,margin:'0 auto 56px'}}>
          <h3 style={{fontFamily:'Urbanist,sans-serif',fontSize:20,fontWeight:700,marginBottom:24,color:'#ffffff'}}>Share Your Experience</h3>
          {success ? (
            <div style={{textAlign:'center',padding:'32px 0'}}>
              <div style={{fontSize:48,marginBottom:12}}>🎉</div>
              <p style={{color:'#22c55e',fontWeight:600,fontSize:16}}>Thank you! Your review is pending approval.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16}} className="form-grid">
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
                    placeholder="John Kamau" style={inputStyle}/>
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
                    placeholder="john@example.com" style={inputStyle}/>
                </div>
              </div>
              <div style={{marginBottom:16}}>
                <label style={labelStyle}>Service Received</label>
                <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})} style={inputStyle}>
                  <option value="">Select service...</option>
                  {services.map(s=><option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div style={{marginBottom:16}}>
                <label style={labelStyle}>Rating *</label>
                <div style={{display:'flex',gap:8,marginTop:8}}>
                  {STARS.map(s=>(
                    <span key={s} onClick={()=>setForm({...form,rating:s})}
                      style={{fontSize:32,cursor:'pointer',opacity:form.rating>=s?1:0.3,transition:'all 0.2s'}}>⭐</span>
                  ))}
                </div>
              </div>
              <div style={{marginBottom:20}}>
                <label style={labelStyle}>Your Review * (min 20 characters)</label>
                <textarea required value={form.comment} onChange={e=>setForm({...form,comment:e.target.value})}
                  placeholder="Tell others about your experience with Kaliworks Technologies..."
                  rows={4} style={{...inputStyle,resize:'vertical'}}/>
              </div>
              {error && <p style={{color:'#ef4444',fontSize:13,marginBottom:14,background:'rgba(239,68,68,0.1)',padding:'10px 14px',borderRadius:8}}>{error}</p>}
              <button type="submit" disabled={loading}
                style={{background:'#0ea5e9',color:'#000',padding:'13px 28px',borderRadius:10,fontWeight:700,fontSize:15,border:'none',cursor:'pointer',width:'100%'}}>
                {loading ? 'Submitting...' : '✅ Submit Review'}
              </button>
            </form>
          )}
        </div>
      )}

      {/* REVIEWS DISPLAY */}
      {reviews.length === 0 ? (
        <div className="reveal" style={{textAlign:'center',padding:'60px 0'}}>
          <div style={{fontSize:48,marginBottom:16}}>⭐</div>
          <p style={{color:'#94a3b8',fontSize:15}}>Be the first to leave a review!</p>
        </div>
      ) : (
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}} className="rev-grid">
          {reviews.map(r=>(
            <div key={r.id} style={{background:'#0f172a',border:'1px solid #1e3a5f',borderRadius:16,padding:24}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
                <div style={{width:48,height:48,borderRadius:'50%',background:'linear-gradient(135deg,#0ea5e9,#0284c7)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:20,color:'#000'}}>
                  {r.name.charAt(0).toUpperCase()}
                </div>
                <div style={{display:'flex',gap:2}}>
                  {STARS.map(s=><span key={s} style={{fontSize:16,opacity:r.rating>=s?1:0.2}}>⭐</span>)}
                </div>
              </div>
              <p style={{color:'#f1f5f9',fontWeight:700,fontSize:15,marginBottom:4}}>{r.name}</p>
              {r.service && <p style={{color:'#38bdf8',fontSize:11,fontWeight:600,marginBottom:10,textTransform:'uppercase'}}>{r.service}</p>}
              <p style={{color:'#cbd5e1',fontSize:13,lineHeight:1.75}}>{r.comment}</p>
              <p style={{color:'#475569',fontSize:11,marginTop:12}}>{new Date(r.created_at).toLocaleDateString('en-KE',{year:'numeric',month:'short',day:'numeric'})}</p>
            </div>
          ))}
        </div>
      )}
      <style>{`
        @media(max-width:900px){.rev-grid{grid-template-columns:1fr 1fr!important}.form-grid{grid-template-columns:1fr!important}}
        @media(max-width:600px){.rev-grid{grid-template-columns:1fr!important}}
        input::placeholder,textarea::placeholder{color:#475569!important}
        select option{background:#1e293b;color:#ffffff}
      `}</style>
    </section>
  )
}
