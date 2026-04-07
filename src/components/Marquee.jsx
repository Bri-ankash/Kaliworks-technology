export default function Marquee(){
  const items = [
    '⚡ React','🐍 Django','📱 React Native','☁️ AWS','🗄️ PostgreSQL',
    '💚 M-Pesa API','🤖 OpenAI','🔥 Next.js','📡 REST APIs','🐳 Docker',
    '⚡ Vite','🌐 Node.js','📊 Supabase','🔐 JWT Auth','📨 SMS API',
    '💬 WhatsApp API','🎯 TypeScript','⚙️ GraphQL','🚀 Vercel','🛡️ Nginx',
  ]
  const doubled = [...items,...items]
  return(
    <div style={{background:'#333333',borderTop:'1px solid rgba(14,165,233,0.12)',borderBottom:'1px solid rgba(14,165,233,0.12)',overflow:'hidden',padding:'14px 0',position:'relative',zIndex:1}}>
      <div style={{display:'flex',gap:48,animation:'marquee 30s linear infinite',width:'max-content'}}>
        {doubled.map((item,i)=>(
          <span key={i} style={{color:'#333',fontSize:13,fontWeight:600,whiteSpace:'nowrap',letterSpacing:'0.5px'}}>{item}</span>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  )
}
