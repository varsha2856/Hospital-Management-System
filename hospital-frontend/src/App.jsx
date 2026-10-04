import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Doctors from './pages/Doctors'
import Appointments from './pages/Appointments'
import Contact from './pages/Contact'

function Protected({ children }) {
  const { isAuth } = useAuth()
  if (!isAuth) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#020617] grid-pattern">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/doctors" element={<Doctors/>} />
            <Route path="/appointments" element={<Protected><Appointments/></Protected>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/dashboard" element={<Protected><Dashboard/></Protected>} />
            <Route path="*" element={<div className="max-w-7xl mx-auto px-6 py-12 text-center"><h2 className="text-2xl font-bold">Page not found</h2><p className="text-white/60 mt-2">The page you’re looking for doesn’t exist.</p></div>} />
          </Routes>
          <footer className="border-t border-white/5 mt-12">
            <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8 text-sm">
              <div>
                <div className="font-bold flex items-center gap-2"><span className="w-2 h-2 rounded-full aura-gradient"/> AURA HEALTH</div>
                <p className="text-white/50 mt-2 leading-relaxed">Care that glows. NABH accredited, 25 years of trust, 120+ specialists, 18k+ patients monthly. Hyderabad • Mumbai • Delhi.</p>
              </div>
              <div>
                <div className="font-semibold">Quick Links</div>
                <ul className="mt-3 space-y-2 text-white/60">
                  <li><a href="/doctors" className="hover:text-aura-300 transition">Find a Doctor</a></li>
                  <li><a href="/appointments" className="hover:text-aura-300 transition">Book Appointment</a></li>
                  <li><a href="/contact" className="hover:text-aura-300 transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold">Support</div>
                <ul className="mt-3 space-y-2 text-white/60">
                  <li>1800-102-5555 (24/7)</li>
                  <li>care@aura.health</li>
                  <li>hello@aura.health</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold">Visit</div>
                <p className="text-white/60 mt-3">Banjara Hills, Hyderabad<br/>Andheri, Mumbai • CP, Delhi<br/><span className="text-aura-300">Open 24/7 • Emergency 8-min</span></p>
              </div>
            </div>
            <div className="text-center mono text-xs text-white/30 py-6 border-t border-white/5">© 2026 AURA Health. Crafted with care • Made to feel human.</div>
          </footer>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}
