import { useState } from 'react'
import { appointmentsAPI } from '../api/client'
import { CalendarCheck, Clock3, ShieldCheck } from 'lucide-react'

export default function Appointments() {
  const [form, setForm] = useState({ patientId:'', doctorId:'', appointmentDate:'', notes:'' })
  const [msg, setMsg] = useState('')
  const submit = async (e) => {
    e.preventDefault()
    setMsg('')
    try {
      const { data } = await appointmentsAPI.create({ ...form, patientId: Number(form.patientId), doctorId: Number(form.doctorId) })
      setMsg(`✓ Appointment #${data.id} booked — confirmation sent to your email.`)
    } catch (ex) { setMsg(String(ex.response?.data?.message||ex.response?.data||ex.message)) }
  }
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <div>
          <h1 className="display text-3xl font-bold">Book an Appointment</h1>
          <p className="text-white/60 mt-2">In-clinic or video consult • Instant confirmation • Free reschedule up to 2 hours</p>

          <form onSubmit={submit} className="mt-7 glass-strong rounded-[24px] p-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs tracking-widest text-white/50">PATIENT ID</label>
                <input placeholder="e.g. 1" value={form.patientId} onChange={e=>setForm({...form,patientId:e.target.value})} className="mt-2 w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-500/30" required/>
              </div>
              <div>
                <label className="text-xs tracking-widest text-white/50">DOCTOR ID</label>
                <input placeholder="e.g. 1" value={form.doctorId} onChange={e=>setForm({...form,doctorId:e.target.value})} className="mt-2 w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-violet-500/30" required/>
              </div>
            </div>
            <div>
              <label className="text-xs tracking-widest text-white/50">DATE & TIME</label>
              <input type="datetime-local" value={form.appointmentDate} onChange={e=>setForm({...form,appointmentDate:e.target.value})} className="mt-2 w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none"/>
            </div>
            <div>
              <label className="text-xs tracking-widest text-white/50">NOTES (OPTIONAL)</label>
              <input placeholder="Fever, headache..." value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} className="mt-2 w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none"/>
            </div>
            <button className="py-3.5 rounded-full neon-gradient font-semibold shadow-lg">Confirm Appointment →</button>
            {msg && <div className="px-4 py-3 rounded-2xl glass text-sm">{msg}</div>}
            <div className="flex items-center gap-4 text-xs text-white/50">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-400"/> Secure</span>
              <span className="flex items-center gap-1"><Clock3 className="w-4 h-4"/> 30-sec booking</span>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="glass rounded-[24px] p-6">
            <h3 className="font-semibold flex items-center gap-2"><CalendarCheck className="w-5 h-5 text-cyan-400"/> How it works</h3>
            <ol className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3"><span className="w-6 h-6 rounded-full bg-white text-black grid place-items-center text-xs font-bold">1</span> Choose doctor & time</li>
              <li className="flex gap-3"><span className="w-6 h-6 rounded-full bg-white text-black grid place-items-center text-xs font-bold">2</span> Pay securely (or pay at hospital)</li>
              <li className="flex gap-3"><span className="w-6 h-6 rounded-full bg-white text-black grid place-items-center text-xs font-bold">3</span> Get instant SMS & email confirmation</li>
            </ol>
          </div>
          <div className="glass rounded-[24px] p-6">
            <h4 className="font-semibold">Need help choosing?</h4>
            <p className="text-sm text-white/60 mt-2">Our care coordinator will suggest the right specialist in 60 seconds.</p>
            <a href="tel:18001025555" className="mt-4 block text-center py-3 rounded-full glass hover:bg-white/10">Call 1800-102-5555</a>
          </div>
        </div>
      </div>
    </div>
  )
}
