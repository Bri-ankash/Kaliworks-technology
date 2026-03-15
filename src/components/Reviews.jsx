import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { containsVulgar } from '../lib/filter'

const STARS = [1,2,3,4,5]

export default function Reviews(){
  const [reviews, setReviews] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name:'', email:'', rating:5, comment:'', service:''
  })

  useEffect(()=>{
    fetchReviews()
  },[])

  async function fetchReviews(){
    const { data } = await supabase
      .from('kw_reviews')
      .select('*')
      .eq('status','approved')
      .order('created_at', { ascending: false })
    if(data) setReviews(data)
  }

  async function handleSubmit(e){
    e.preventDefault()
    setError('')

    if(containsVulgar(form.comment) || containsVulgar(form.name)){
      setError('Your review contains inappropriate language. Please revise and resubmit.')
      return
    }

    if(form.comment.length < 20){
      setError('Please write at least 20 characters in your review.')
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
    <>
      {/* TALK TO BRIAN */}
      <section style={{background:'var(--black)',padding:'96px 6%',position:'relative',zIndex:1}}>
        <div className="reveal" style={{background:'var(--card)',border:'1px solid var(--border2)',borderRadius:24,padding:'48px 40px',maxWidth:800,margin:'0 auto',position:'relative',overflow:'hidden',textAlign:'center'}}>
          <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:'linear-gradient(90deg,transparent,var(--blue),transparent)'}}/>
          <img
            src="https://i.ibb.co/kfwthY9/IMG-20250727-160634-1.jpg"
            alt="Brian Kalali"
            style={{width:90,height:90,borderRadius:'50%',objectFit:'cover',objectPosition:'center top',border:'3px solid var(--blue)',boxShadow:'0 0 30px rgba(14,165,233,0.3)',marginBottom:16}}
          />
          <h2 style={{fontFamily:'Urbanist,sans-serif',fontSize:'clamp(24px,4vw,36px)',fontWeight:800,letterSpacing:'-1px',marginBottom:8}}>Talk to Brian Directly</h2>
          <p style={{color:'var(--muted)',fontSize:15,lineHeight:1.75,fontWeight:300,maxWidth:480,margin:'0 auto 32px'}}>Have a project in mind? I respond within 2 hours. No middlemen, no agencies — just me and your project.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href="https://wa.me/254746971739?text=Hi%20Brian%2C%20I%20found%20Kaliworks%20Technologies%20and%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank"
              style={{background:'#25D366',color:'#fff',padding:'12px 28px',borderRadius:10,fontWeight:700,fontSize:14,display:'flex',alignItems:'center',gap:8,boxShadow:'0 0 30px rgba(37,211,102,0.25)'}}>
              <span>💬</span> WhatsApp Brian
            </a>
            <a href="tel:+254746971739"
              style={{background:'var(--blue)',color:'#000',padding:'12px 28px',borderRadius:10,fontWeight:700,fontSize:14,display:'flex',alignItems:'center',gap:8}}>
              <span>📞</span> Call Brian
            </a>
            <a href="mailto:kaliworks61@gmail.com"
              style={{background:'transparent',color:'var(--blue2)',padding:'12px 28px',borderRadius:10,fontWeight:600,fontSize:14,border:'1px solid rgba(14,165,233,0.3)',display:'flex',alignItems:'center',gap:8}}>
              <span>✉️</span> Send Email
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{background:'var(--deep)',padding:'96px 6%',position:'relative',zIndex:1}}>
        <div className="reveal" style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',flexWrap:'wrap',gap:16,marginBottom:56}}>
          <div>
            <div className="eyebrow">Client Reviews</div>
            <h2 className="sec-title">What Clients<br/>Say About Us</h2>
            <p className="sec-sub">Real reviews from real clients. Every review is verified before publishing.</p>
          </div>
          <button onClick={()=>setShowForm(!showForm)}
            style={{background:'var(--blue)',color:'#000',padding:'12px 28px',borderRadius:10,fontWeight:700,fontSize:14,border:'none',cursor:'pointer',flexShrink:0}}>
            ✍️ Leave a Review
          </button>
        </div>

        {/* REVIEW FORM */}
        {showForm && (
          <div className="reveal" style={{background:'var(--card)',border:'1px solid var(--border2)',borderRadius:20,padding:'36px',maxWidth:600,margin:'0 auto 56px',position:'relative'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:'linear-gradient(90deg,var(--blue),transparent)',borderRadius:'20px 20px 0 0'}}/>
            <h3 style={{fontFamily:'Urbanist,sans-serif',fontSize:20,fontWeight:700,marginBottom:24}}>Share Your Experience</h3>

            {success ? (
              <div style={{textAlign:'center',padding:'32px 0'}}>
                <div style={{fontSize:48,marginBottom:12}}>🎉</div>
                <p style={{color:'#22c55e',fontWeight:600,fontSize:16}}>Thank you! Your review is pending approval.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:14}} className="form-grid">
                  <div>
                    <label style={{color:'var(--muted)',fontSize:12,fontWeight:600,display:'block',marginBottom:6}}>Your Name *</label>
                    <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
                      placeholder="John Kamau"
                      style={{width:'100%',background:'var(--deep)',border:'1px solid var(--border)',borderRadius:8,padding:'10px 14px',color:'var(--white)',fontSize:14,outline:'none'}}/>
                  </div>
                  <div>
                    <label style={{color:'var(--muted)',fontSize:12,fontWeight:600,display:'block',marginBottom:6}}>Email *</label>
                    <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
                      placeholder="john@example.com"
                      style={{width:'100%',background:'var(--deep)',border:'1px solid var(--border)',borderRadius:8,padding:'10px 14px',color:'var(--white)',fontSize:14,outline:'none'}}/>
                  </div>
                </div>
                <div style={{marginBottom:14}}>
                  <label style={{color:'var(--muted)',fontSize:12,fontWeight:600,display:'block',marginBottom:6}}>Service Received</label>
                  <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}
                    style={{width:'100%',background:'var(--deep)',border:'1px solid var(--border)',borderRadius:8,padding:'10px 14px',color:'var(--white)',fontSize:14,outline:'none'}}>
                    <option value="">Select service...</option>
                    {services.map(s=><option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div style={{marginBottom:14}}>
                  <label style={{color:'var(--muted)',fontSize:12,fontWeight:600,display:'block',marginBottom:8}}>Rating *</label>
                  <div style={{display:'flex',gap:8}}>
                    {STARS.map(s=>(
                      <span key={s} onClick={()=>setForm({...form,rating:s})}
                        style={{fontSize:28,cursor:'pointer',transition:'transform 0.2s',transform:form.rating>=s?'scale(1.2)':'scale(1)',filter:form.rating>=s?'brightness(1)':'brightness(0.3)'}}>⭐</span>
                    ))}
                  </div>
                </div>
                <div style={{marginBottom:20}}>
                  <label style={{color:'var(--muted)',fontSize:12,fontWeight:600,display:'block',marginBottom:6}}>Your Review * (min 20 characters)</label>
                  <textarea required value={form.comment} onChange={e=>setForm({...form,comment:e.target.value})}
                    placeholder="Tell others about your experience working with Kaliworks Technologies..."
                    rows={4}
                    style={{width:'100%',background:'var(--deep)',border:'1px solid var(--border)',borderRadius:8,padding:'10px 14px',color:'var(--white)',fontSize:14,outline:'none',resize:'vertical'}}/>
                </div>
                {error && <p style={{color:'#ef4444',fontSize:13,marginBottom:14}}>{error}</p>}
                <button type="submit" disabled={loading}
                  style={{background:'var(--blue)',color:'#000',padding:'12px 28px',borderRadius:10,fontWeight:700,fontSize:14,border:'none',cursor:'pointer',width:'100%'}}>
                  {loading ? 'Submitting...' : 'Submit Review'}
                </button>
              </form>
            )}
          </div>
        )}

        {/* REVIEWS GRID */}
        {reviews.length === 0 ? (
          <div className="reveal" style={{textAlign:'center',padding:'60px 0'}}>
            <div style={{fontSize:48,marginBottom:16}}>⭐</div>
            <p style={{color:'var(--muted)',fontSize:15}}>Be the first to leave a review!</p>
          </div>
        ) : (
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}} className="rev-grid">
            {reviews.map(r=>(
              <div key={r.id} className="reveal" style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:16,padding:24,transition:'all 0.3s'}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--border2)';e.currentTarget.style.transform='translateY(-4px)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='translateY(0)'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:12}}>
                  <div style={{width:44,height:44,borderRadius:'50%',background:'linear-gradient(135deg,var(--blue),#0284c7)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Urbanist,sans-serif',fontWeight:800,fontSize:18,color:'#000'}}>
                    {r.name.charAt(0).toUpperCase()}
                  </div>
                  <div style={{display:'flex',gap:2}}>
                    {STARS.map(s=><span key={s} style={{fontSize:14,filter:r.rating>=s?'brightness(1)':'brightness(0.3)'}}>⭐</span>)}
                  </div>
                </div>
                <p style={{color:'var(--white)',fontWeight:600,fontSize:14,marginBottom:4}}>{r.name}</p>
                {r.service && <p style={{color:'var(--blue)',fontSize:11,fontWeight:600,marginBottom:10,textTransform:'uppercase',letterSpacing:'0.5px'}}>{r.service}</p>}
                <p style={{color:'var(--muted)',fontSize:13,lineHeight:1.7,fontWeight:300}}>{r.comment}</p>
                <p style={{color:'var(--faint)',fontSize:11,marginTop:12}}>{new Date(r.created_at).toLocaleDateString('en-KE',{year:'numeric',month:'short',day:'numeric'})}</p>
              </div>
            ))}
          </div>
        )}
        <style>{`@media(max-width:900px){.rev-grid{grid-template-columns:1fr 1fr!important}.form-grid{grid-template-columns:1fr!important}}@media(max-width:600px){.rev-grid{grid-template-columns:1fr!important}}`}</style>
      </section>
    </>
  )
}
