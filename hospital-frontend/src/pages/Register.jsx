import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const { register } = useAuth()
  const nav = useNavigate()
  const [form, setForm] = useState({ name:'', email:'', password:'', role:'PATIENT' })
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setErr(''); setMsg('')
    try {
      const res = await register(form)
      setMsg(typeof res==='string'? res : 'Account created! Please sign in.')
      setTimeout(()=>nav('/login'), 900)
    } catch (ex) {
      setErr(ex.response?.data || ex.message)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="max-w-3xl">
        <h1 className="display text-4xl font-bold">Join NEXUS Health</h1>
        <p className="text-white/60 mt-3">Create your secure health profile in 30 seconds. For patients, doctors, nurses & administrators.</p>

        <form onSubmit={onSubmit} className="mt-8 glass-strong rounded-[24px] p-6 grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs tracking-widest text-white/50">FULL NAME</label>
            <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="mt-2 w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-500/30" placeholder="Ada Lovelace" required/>
          </div>
          <div>
            <label className="text-xs tracking-widest text-white/50">I AM A</label>
            <select value={form.role} onChange={e=>setForm({...form,role:e.target.value})} className="mt-2 w-full px-4 py-3 rounded-2xl bg-[#0f172a] border border-white/10 outline-none">
              <option>PATIENT</option><option>DOCTOR</option><option>NURSE</option><option>ADMIN</option>
            </select>
          </div>
          <div>
            <label className="text-xs tracking-widest text-white/50">EMAIL</label>
            <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-2 w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none" placeholder="you@example.com" required/>
          </div>
          <div>
            <label className="text-xs tracking-widest text-white/50">PASSWORD</label>
            <input type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} className="mt-2 w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none" placeholder="Min. 6 characters" required/>
          </div>
          <div className="md:col-span-2">
            {err && <div className="mb-3 px-4 py-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-sm text-red-300">{String(err)}</div>}
            {msg && <div className="mb-3 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-300">{String(msg)}</div>}
            <motion.button whileTap={{scale:0.98}} className="w-full py-3.5 rounded-full neon-gradient font-semibold shadow-lg">Create account</motion.button>
            <div className="text-sm text-white/60 mt-3 text-center">Already have an account? <Link to="/login" className="text-cyan-300 hover:underline">Sign in</Link></div>
          </div>
        </form>
      </div>
    </div>
  )
}
