import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, ShieldCheck, HeartPulse } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login, loading } = useAuth()
  const nav = useNavigate()
  const [form, setForm] = useState({ email: 'admin@hospital.com', password: 'admin123', role: 'ADMIN' })
  const [show, setShow] = useState(false)
  const [err, setErr] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setErr('')
    try {
      await login(form.email, form.password, form.role)
      nav('/dashboard')
    } catch (ex) {
      setErr(ex.response?.data?.message || ex.response?.data || ex.message || 'Login failed')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
        <div className="max-w-xl">
          <h1 className="display text-4xl font-bold leading-tight">Welcome back</h1>
          <p className="text-white/60 mt-3">Access your health records, appointments & prescriptions. Secure, private, instant.</p>

          <form onSubmit={onSubmit} className="mt-8 glass-strong rounded-[24px] p-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {['ADMIN','DOCTOR','NURSE','PATIENT'].map(r => (
                <button key={r} type="button" onClick={() => setForm({ ...form, role: r })} className={`px-4 py-3 rounded-2xl border text-sm font-medium transition ${form.role===r ? 'neon-gradient border-transparent shadow' : 'glass border-white/10 hover:bg-white/10'}`}>{r}</button>
              ))}
            </div>

            <div>
              <label className="text-xs tracking-widest text-white/50">EMAIL ADDRESS</label>
              <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-2 w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-500/40" placeholder="you@example.com"/>
            </div>

            <div>
              <label className="text-xs tracking-widest text-white/50">PASSWORD</label>
              <div className="mt-2 relative">
                <input type={show?'text':'password'} value={form.password} onChange={e=>setForm({...form,password:e.target.value})} className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-violet-500/40 pr-12" placeholder="••••••••"/>
                <button type="button" onClick={()=>setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 grid place-items-center rounded-full hover:bg-white/10">{show?<EyeOff className="w-4 h-4"/>:<Eye className="w-4 h-4"/>}</button>
              </div>
            </div>

            {err && <div className="px-4 py-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-sm text-red-300">{String(err)}</div>}

            <motion.button whileTap={{scale:0.98}} disabled={loading} className="w-full py-3.5 rounded-full neon-gradient font-semibold shadow-lg shadow-violet-500/20 disabled:opacity-60">
              {loading ? 'Signing in...' : 'Sign in'}
            </motion.button>

            <div className="text-sm text-white/60 text-center">New to NEXUS? <Link to="/register" className="text-cyan-300 hover:underline">Create account</Link></div>
          </form>
        </div>

        <div className="hidden lg:block space-y-6">
          <div className="glass rounded-[28px] p-7 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-64 h-64 blur-[60px] opacity-25 neon-gradient rounded-full"/>
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full glass border-white/10"><ShieldCheck className="w-4 h-4 text-emerald-400"/> HIPAA • NABH • ISO 27001</div>
            <h3 className="display text-xl font-bold mt-4">Your data, iron-clad</h3>
            <p className="text-white/60 mt-2 text-sm leading-relaxed">End-to-end encrypted records, biometric login & audit trails. Only you and your doctor see your data.</p>
          </div>
          <div className="glass rounded-[28px] p-7">
            <div className="flex items-center gap-2"><HeartPulse className="w-5 h-5 text-rose-400"/><span className="font-semibold">Need help?</span></div>
            <p className="text-sm text-white/60 mt-2">24/7 care coordinator • WhatsApp • Call 1800-102-5555. Average response in 47 seconds.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
