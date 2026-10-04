import { useState } from 'react'
import { contactAPI } from '../api/client'
import { Phone, MapPin, Clock3, Mail } from 'lucide-react'

export default function Contact() {
  const [form,setForm]=useState({ name:'', email:'', message:'' })
  const [done,setDone]=useState('')
  const submit=async(e)=>{
    e.preventDefault()
    try { await contactAPI.send(form); setDone('Thank you — our team will reply within 2 hours.') } catch(ex){ setDone(String(ex.response?.data||ex.message)) }
  }
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h1 className="display text-3xl font-bold">We’re here to help</h1>
          <p className="text-white/60 mt-2">Questions, appointments or feedback — reach us anytime. Average response in 47 seconds.</p>
          <div className="mt-8 grid gap-4">
            <div className="glass rounded-2xl p-5 flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-rose-500 grid place-items-center"><Phone className="w-5 h-5"/></div><div><div className="font-medium">Emergency</div><div className="text-sm text-white/60">1800-102-5555 • 24/7</div></div></div>
            <div className="glass rounded-2xl p-5 flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-cyan-500 grid place-items-center"><Mail className="w-5 h-5"/></div><div><div className="font-medium">Email</div><div className="text-sm text-white/60">care@nexus.health • appointments@nexus.health</div></div></div>
            <div className="glass rounded-2xl p-5 flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-violet-500 grid place-items-center"><MapPin className="w-5 h-5"/></div><div><div className="font-medium">Visit us</div><div className="text-sm text-white/60">Banjara Hills, Hyderabad • Andheri, Mumbai • CP, Delhi</div></div></div>
            <div className="glass rounded-2xl p-5 flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-emerald-500 grid place-items-center"><Clock3 className="w-5 h-5"/></div><div><div className="font-medium">Hours</div><div className="text-sm text-white/60">OPD 8am-10pm • Emergency 24/7 • Lab 6am-10pm</div></div></div>
          </div>
        </div>
        <form onSubmit={submit} className="glass-strong rounded-[24px] p-6 grid gap-4 h-fit">
          <h3 className="font-semibold">Send a message</h3>
          <input placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none" required/>
          <input placeholder="Email address" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none" required/>
          <textarea placeholder="How can we help?" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={5} className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none" required/>
          <button className="py-3 rounded-full neon-gradient font-semibold">Send Message</button>
          {done && <div className="px-4 py-3 rounded-2xl glass text-sm">{done}</div>}
        </form>
      </div>
    </div>
  )
}
