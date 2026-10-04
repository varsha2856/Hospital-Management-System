import { Link, useNavigate } from 'react-router-dom'
import { Heart, LogOut, LayoutDashboard, Stethoscope, Calendar, MessageCircle, Phone, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { isAuth, user, logout } = useAuth()
  const nav = useNavigate()
  return (
    <nav className="sticky top-0 z-50 bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-2xl aura-gradient grid place-items-center shadow-lg aura-glow group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 text-white fill-white/20" />
          </div>
          <div className="leading-none">
            <div className="display font-bold tracking-tight text-[18px]">AURA<span className="aura-text"> HEALTH</span></div>
            <div className="text-[11px] tracking-[0.18em] text-white/45 -mt-0.5 flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-aura-400"/> CARE THAT GLOWS</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1 bg-white/[0.04] rounded-full p-1 border border-white/5">
          <Link to="/" className="px-4 py-2 rounded-full text-sm hover:bg-white/10 transition focus-ring">Home</Link>
          <Link to="/doctors" className="px-4 py-2 rounded-full text-sm hover:bg-white/10 transition flex items-center gap-1.5 focus-ring"><Stethoscope className="w-4 h-4"/>Doctors</Link>
          <Link to="/appointments" className="px-4 py-2 rounded-full text-sm hover:bg-white/10 transition flex items-center gap-1.5 focus-ring"><Calendar className="w-4 h-4"/>Appointments</Link>
          <Link to="/contact" className="px-4 py-2 rounded-full text-sm hover:bg-white/10 transition flex items-center gap-1.5 focus-ring"><MessageCircle className="w-4 h-4"/>Contact</Link>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a href="tel:18001025555" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm transition focus-ring border border-white/5"><Phone className="w-4 h-4 text-aura-400"/> 1800-102-5555</a>
          {isAuth ? (
            <>
              <span className="hidden xl:inline text-xs px-3 py-1.5 rounded-full bg-aura-500/10 text-aura-300 border border-aura-500/20">{user?.role} • {user?.email?.split('@')[0]}</span>
              <Link to="/dashboard" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm transition focus-ring"><LayoutDashboard className="w-4 h-4"/>Dashboard</Link>
              <button onClick={() => { logout(); nav('/login') }} className="w-9 h-9 rounded-full bg-white/5 grid place-items-center hover:bg-red-500/15 hover:text-red-300 transition focus-ring"><LogOut className="w-4 h-4"/></button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-5 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition focus-ring">Sign in</Link>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link to="/register" className="px-6 py-2.5 rounded-full aura-gradient text-sm font-semibold shadow-lg shadow-aura-500/20 text-white focus-ring inline-block">Book Visit</Link>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
