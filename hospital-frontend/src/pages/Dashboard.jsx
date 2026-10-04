import { useEffect, useState } from 'react'
import { doctorsAPI, patientsAPI, appointmentsAPI } from '../api/client'
import { useAuth } from '../context/AuthContext'
import { Stethoscope, Users, Calendar, HeartPulse, Clock3, Award } from 'lucide-react'

export default function Dashboard() {
  const { user } = useAuth()
  const [stats, setStats] = useState({ doctors: 0, patients: 0, appts: 0 })
  const [doctors, setDoctors] = useState([])

  useEffect(()=>{
    Promise.all([doctorsAPI.list().catch(()=>({data:[]})), patientsAPI.list().catch(()=>({data:[]})), appointmentsAPI.list().catch(()=>({data:[]}))])
      .then(([d,p,a])=>{
        setDoctors((d.data||[]).slice(0,4))
        setStats({ doctors:(d.data||[]).length, patients:(p.data||[]).length, appts:(a.data||[]).length })
      })
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="display text-3xl font-bold">Good morning, {user?.email?.split('@')[0] || 'there'}</h1>
          <p className="text-white/60 mt-1">{user?.role} dashboard • Your care, at a glance</p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-full glass flex items-center gap-1.5"><Clock3 className="w-4 h-4"/> Next slot today 2:30 PM</span>
          <span className="px-3 py-1.5 rounded-full bg-emerald-500 text-white font-medium">All systems normal</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="glass rounded-[24px] p-6 flex items-center gap-4"><div className="w-12 h-12 rounded-2xl neon-gradient grid place-items-center"><Stethoscope className="w-6 h-6"/></div><div><div className="text-2xl font-bold">{stats.doctors || '120+'}</div><div className="text-xs tracking-widest text-white/50">Specialists</div></div></div>
        <div className="glass rounded-[24px] p-6 flex items-center gap-4"><div className="w-12 h-12 rounded-2xl bg-emerald-500 grid place-items-center"><Users className="w-6 h-6"/></div><div><div className="text-2xl font-bold">{stats.patients || '18k+'}</div><div className="text-xs tracking-widest text-white/50">Patients this month</div></div></div>
        <div className="glass rounded-[24px] p-6 flex items-center gap-4"><div className="w-12 h-12 rounded-2xl bg-violet-500 grid place-items-center"><Calendar className="w-6 h-6"/></div><div><div className="text-2xl font-bold">{stats.appts || '—'}</div><div className="text-xs tracking-widest text-white/50">Your appointments</div></div></div>
      </div>

      <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-6 mt-8">
        <div className="glass-strong rounded-[24px] p-6">
          <div className="flex items-center justify-between"><h3 className="font-semibold">Your care team</h3><span className="text-xs px-2 py-1 rounded-full glass">4 doctors online</span></div>
          <div className="grid sm:grid-cols-2 gap-4 mt-5">
            {(doctors.length? doctors : [
              { id:1, name:'Dr. A. Rao', spec:'Cardiology • 18y', email:'cardio@nexus.health' },
              { id:2, name:'Dr. S. Mehta', spec:'Neurology • 15y', email:'neuro@nexus.health' },
              { id:3, name:'Dr. P. Kumar', spec:'Orthopedics • 12y', email:'ortho@nexus.health' },
              { id:4, name:'Dr. N. Iyer', spec:'Pediatrics • 10y', email:'peds@nexus.health' },
            ]).map(d=>(
              <div key={d.id} className="glass rounded-2xl p-4 flex gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 grid place-items-center font-bold">{d.name?.[0]||'D'}</div>
                <div className="min-w-0">
                  <div className="font-medium truncate">{d.name||d.email}</div>
                  <div className="text-xs text-white/50 truncate">{d.specialization||d.spec}</div>
                  <div className="text-xs text-cyan-300 truncate">{d.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass rounded-[24px] p-6">
            <h4 className="font-semibold flex items-center gap-2"><HeartPulse className="w-5 h-5 text-rose-400"/> Health tip</h4>
            <p className="text-sm text-white/60 mt-2 leading-relaxed">Stay hydrated, 30-min walk daily & 7-8h sleep. Your heart will thank you. Book a preventive check-up every 6 months.</p>
          </div>
          <div className="glass rounded-[24px] p-6">
            <h4 className="font-semibold flex items-center gap-2"><Award className="w-5 h-5 text-amber-400"/> Quick actions</h4>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <a href="/appointments" className="py-3 rounded-2xl glass text-sm text-center hover:bg-white/10">Book now</a>
              <a href="/doctors" className="py-3 rounded-2xl glass text-sm text-center hover:bg-white/10">Find doctor</a>
              <a href="/contact" className="py-3 rounded-2xl glass text-sm text-center hover:bg-white/10">Prescriptions</a>
              <a href="tel:18001025555" className="py-3 rounded-2xl bg-white text-black text-sm text-center font-medium">Emergency</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
