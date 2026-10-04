import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, HeartPulse, ShieldCheck, Clock3, Users, Star, Stethoscope, Baby, Bone, Brain, Eye, Activity, Phone, MapPin, Award, CalendarCheck, Sparkles, ChevronRight, Play } from 'lucide-react'

const stats = [
  { v: "18k+", k: "Happy Patients", sub: "last 30 days" },
  { v: "120+", k: "Expert Doctors", sub: "24 specialties" },
  { v: "25 yrs", k: "Trusted Care", sub: "since 1999" },
  { v: "4.9", k: "Rating", sub: "12k reviews" },
]

const services = [
  { icon: HeartPulse, title: "Cardiology", desc: "3D heart mapping, cath lab & rehab — stay heart-strong.", color: "from-rose-400 to-pink-500", patients: "2.4k treated" },
  { icon: Brain, title: "Neurology", desc: "Stroke & spine care with neuro-navigation tech.", color: "from-violet-400 to-indigo-500", patients: "1.8k treated" },
  { icon: Bone, title: "Orthopedics", desc: "Robotic joints & sports injury — move again.", color: "from-cyan-400 to-teal-500", patients: "3.1k treated" },
  { icon: Baby, title: "Mother & Child", desc: "Painless birthing, NICU III & child wellness.", color: "from-emerald-400 to-teal-500", patients: "4.2k births" },
  { icon: Eye, title: "Eye Care", desc: "SMILE & cataract — see clearly, live brightly.", color: "from-amber-400 to-orange-500", patients: "2.9k surgeries" },
  { icon: Stethoscope, title: "Family Medicine", desc: "Your everyday health partner, 8am-10pm.", color: "from-aura-400 to-warm-400", patients: "6k checkups" },
]

export default function Landing() {
  return (
    <div className="overflow-hidden">
      {/* EMERGENCY BAR - interactive */}
      <div className="bg-gradient-to-r from-rose-500 to-orange-400 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
        <div className="relative max-w-7xl mx-auto px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-sm">
          <span className="flex items-center gap-2 font-medium"><span className="w-2 h-2 rounded-full bg-white animate-pulse"/><Phone className="w-4 h-4"/> Emergency: 1800-102-5555 • Ambulance in 8 mins</span>
          <span className="hidden md:flex items-center gap-3">
            <span className="flex items-center gap-1.5 opacity-90"><MapPin className="w-4 h-4"/> Hyderabad • Mumbai • Delhi</span>
            <a href="tel:18001025555" className="px-3 py-1 rounded-full bg-white text-rose-600 font-bold text-xs hover:scale-105 transition-transform interactive">CALL NOW</a>
          </span>
        </div>
      </div>

      {/* HERO - more interactive, aura colors */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-aura-500/[0.06] via-warm-400/[0.04] to-violet-500/[0.05] blur-[100px]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-xs tracking-widest px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                <Sparkles className="w-3 h-3"/> NABH ACCREDITED • 25 YEARS OF TRUST
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="display text-[44px] md:text-[56px] font-bold leading-[0.92] mt-5">
                Your health<br/><span className="aura-text">glows</span> here.<br/>Care feels human.
              </motion.h1>
              <p className="text-white/65 mt-5 text-[17px] leading-relaxed max-w-xl">
                At AURA Health, warmth meets world-class medicine. Robotic surgery, AI diagnostics & doctors who listen — all in one place. No waiting, just caring.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/appointments" className="group px-7 py-3.5 rounded-full aura-gradient font-semibold inline-flex items-center gap-2 shadow-xl shadow-aura-500/20 hover:shadow-aura-500/30 hover:scale-[1.02] transition-all interactive">
                  Book Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                </Link>
                <Link to="/doctors" className="group px-7 py-3.5 rounded-full bg-white text-ink-900 font-semibold inline-flex items-center gap-2 hover:bg-white/90 transition interactive">
                  <Play className="w-4 h-4 fill-ink-900"/> Meet Our Doctors
                </Link>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i=>(
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0B1120] bg-gradient-to-br from-aura-200 to-warm-200 grid place-items-center text-xs font-bold text-ink-900">{String.fromCharCode(64+i)}</div>
                  ))}
                </div>
                <div className="text-sm"><span className="font-semibold">12k+</span> <span className="text-white/60">patients love us</span> <span className="ml-2 text-amber-400 inline-flex items-center gap-1"><Star className="w-4 h-4 fill-amber-400"/>4.9</span></div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="relative">
              <div className="glass-strong rounded-[32px] p-6 shadow-soft aura-glow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><CalendarCheck className="w-5 h-5 text-aura-400"/><span className="font-semibold">Check Availability</span></div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">Live slots</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-5">
                  {[
                    { l: "Today", v: "18", s: "left", accent: "text-aura-400" },
                    { l: "Tomorrow", v: "32", s: "open", accent: "text-white" },
                    { l: "Video", v: "2m", s: "wait", accent: "text-warm-400" },
                  ].map(c => (
                    <div key={c.l} className="bg-white/[0.04] hover:bg-white/[0.07] rounded-2xl p-4 text-center border border-white/5 hover:border-aura-500/20 transition cursor-pointer interactive">
                      <div className="text-xs tracking-widest text-white/50">{c.l}</div>
                      <div className={`text-xl font-bold mt-1 ${c.accent}`}>{c.v}</div>
                      <div className="text-xs text-white/50">{c.s}</div>
                    </div>
                  ))}
                </div>
                <Link to="/appointments" className="mt-4 w-full py-3 rounded-full bg-white text-ink-900 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/90 transition interactive">
                  Book in 30 seconds <ChevronRight className="w-4 h-4"/>
                </Link>
                <div className="mt-3 text-center text-xs text-white/45">No booking fee • Free reschedule • Instant SMS</div>
              </div>
              <div className="absolute -z-10 -top-6 -right-6 w-72 h-72 rounded-full blur-[80px] opacity-20 bg-gradient-to-br from-aura-400 to-warm-400" />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {stats.map(s => (
              <div key={s.k} className="glass rounded-2xl p-5 text-center hover:bg-white/[0.07] transition interactive">
                <div className="text-2xl font-bold">{s.v}</div>
                <div className="text-sm font-medium text-white/80">{s.k}</div>
                <div className="text-xs text-white/40 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES - interactive cards */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-widest px-3 py-1 rounded-full bg-aura-500/10 text-aura-300 border border-aura-500/20">CENTRES OF EXCELLENCE</div>
            <h2 className="display text-3xl font-bold mt-3">Care for every you</h2>
            <p className="text-white/60 mt-2">6 super-specialties, one healing campus.</p>
          </div>
          <Link to="/doctors" className="hidden md:inline-flex px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm transition">View all →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-7">
          {services.map(s => (
            <div key={s.title} className="group glass rounded-[24px] p-6 hover:bg-white/[0.07] hover:border-aura-500/15 transition cursor-pointer interactive">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} grid place-items-center shadow-lg group-hover:scale-110 transition-transform`}>
                <s.icon className="w-6 h-6 text-white"/>
              </div>
              <h3 className="font-semibold mt-4 text-lg group-hover:text-aura-300 transition-colors">{s.title}</h3>
              <p className="text-sm text-white/60 mt-2 leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/15">{s.patients}</span>
                <span className="text-sm text-aura-300 flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight className="w-4 h-4"/></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY AURA */}
      <section className="max-w-7xl mx-auto px-6 py-6 grid lg:grid-cols-2 gap-6">
        <div className="glass-strong rounded-[24px] p-7">
          <h3 className="display text-2xl font-bold">Why families choose AURA</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3"><span className="w-8 h-8 rounded-xl bg-emerald-500/15 grid place-items-center shrink-0"><ShieldCheck className="w-4 h-4 text-emerald-400"/></span><span><b>Reports in 45 mins</b> — home sample collection 6am-10pm, app tracking.</span></li>
            <li className="flex gap-3"><span className="w-8 h-8 rounded-xl bg-aura-500/15 grid place-items-center shrink-0"><Activity className="w-4 h-4 text-aura-400"/></span><span><b>8-min ambulance</b> — GPS, ICU on wheels, city-wide.</span></li>
            <li className="flex gap-3"><span className="w-8 h-8 rounded-xl bg-violet-500/15 grid place-items-center shrink-0"><Users className="w-4 h-4 text-violet-400"/></span><span><b>Doctors who listen</b> — 18-min avg consult, not 5.</span></li>
          </ul>
        </div>
        <div className="glass rounded-[24px] p-7 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-warm-400/20 to-aura-400/20 blur-3xl" />
          <div className="flex items-center gap-1 text-amber-400"><Star className="w-4 h-4 fill-amber-400"/><Star className="w-4 h-4 fill-amber-400"/><Star className="w-4 h-4 fill-amber-400"/><Star className="w-4 h-4 fill-amber-400"/><Star className="w-4 h-4 fill-amber-400"/> <span className="ml-2 text-white font-semibold">4.9/5</span> <span className="text-white/50">• 12,483 reviews</span></div>
          <p className="mt-4 text-white/85 leading-relaxed">“Booked at 10pm, saw doctor next morning 9am sharp. No queue, no paper — everything on my phone. AURA feels like the future, but so human.”</p>
          <div className="mt-5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aura-300 to-warm-300 grid place-items-center font-bold text-ink-900">A</div>
            <div><div className="font-medium text-sm">Ananya Rao</div><div className="text-xs text-white/50">Cardiology • 2 weeks ago • Hyderabad</div></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="rounded-[28px] p-[1px] bg-gradient-to-r from-aura-400 to-warm-400">
          <div className="rounded-[27px] bg-[#0B1120] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="display text-2xl font-bold">Need care right now?</h3>
              <p className="text-white/60 mt-2">Talk to a care coordinator in 60 seconds — 24/7.</p>
            </div>
            <div className="flex gap-3">
              <a href="tel:18001025555" className="px-7 py-3 rounded-full bg-white text-ink-900 font-semibold inline-flex items-center gap-2 hover:scale-105 transition-transform"><Phone className="w-4 h-4"/> 1800-102-5555</a>
              <Link to="/appointments" className="px-7 py-3 rounded-full aura-gradient font-semibold inline-flex items-center gap-2 shadow-lg hover:scale-105 transition-transform">Book Now <ArrowRight className="w-4 h-4"/></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
