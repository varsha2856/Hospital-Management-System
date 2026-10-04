import { useEffect, useState } from 'react'
import { doctorsAPI } from '../api/client'
import { Stethoscope, Star, MapPin, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Doctors() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{ doctorsAPI.list().then(r=>setList(r.data||[])).catch(()=>setList([])).finally(()=>setLoading(false)) }, [])
  const fallback = [
    { id:101, name:'Dr. Arjun Rao', email:'arjun.rao@nexus.health', specialization:'Cardiology', exp:'18 years', rating:4.9 },
    { id:102, name:'Dr. Sara Mehta', email:'sara.mehta@nexus.health', specialization:'Neurology', exp:'15 years', rating:4.8 },
    { id:103, name:'Dr. Pranav Kumar', email:'pranav.k@nexus.health', specialization:'Orthopedics', exp:'12 years', rating:4.9 },
    { id:104, name:'Dr. Neha Iyer', email:'neha.iyer@nexus.health', specialization:'Pediatrics', exp:'10 years', rating:5.0 },
    { id:105, name:'Dr. Kabir Singh', email:'kabir@nexus.health', specialization:'Oncology', exp:'16 years', rating:4.9 },
    { id:106, name:'Dr. Maya Patel', email:'maya@nexus.health', specialization:'Dermatology', exp:'11 years', rating:4.8 },
  ]
  const data = list.length ? list : fallback
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="display text-3xl font-bold">Our Doctors</h1>
          <p className="text-white/60 mt-2">120+ US/UK trained specialists • NABH accredited • Video consult available</p>
        </div>
        <Link to="/appointments" className="px-6 py-3 rounded-full neon-gradient font-semibold">Book Appointment</Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {data.map(d=>(
          <div key={d.id} className="glass-strong rounded-[24px] p-6 hover:bg-white/[0.06] transition group">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 grid place-items-center text-xl font-bold">{d.name[0]}</div>
              <div className="min-w-0">
                <div className="font-semibold truncate">{d.name}</div>
                <div className="text-sm text-white/60 truncate">{d.specialization} • {d.exp}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/20 flex items-center gap-1"><Star className="w-3 h-3 fill-amber-400"/>{d.rating||4.9}</span>
              <span className="flex items-center gap-1 text-white/50"><MapPin className="w-3 h-3"/> Hyderabad</span>
              <span className="flex items-center gap-1 text-white/50"><Clock3 className="w-3 h-3"/> 2 min wait</span>
            </div>
            <div className="mt-4 text-xs text-white/50 truncate">{d.email}</div>
            <Link to="/appointments" className="mt-4 w-full py-2.5 rounded-full glass text-sm text-center block hover:bg-white/10">View Profile →</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
