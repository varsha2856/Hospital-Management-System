import { createContext, useContext, useState, useEffect } from 'react'
import { authAPI } from '../api/client'

const AuthCtx = createContext(null)
export const useAuth = () => useContext(AuthCtx)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('nexus_user')) } catch { return null }
  })
  const [token, setToken] = useState(() => localStorage.getItem('nexus_token'))
  const [loading, setLoading] = useState(false)

  const login = async (email, password, role) => {
    setLoading(true)
    try {
      const { data } = await authAPI.login({ email, password, role })
      if (!data.token) throw new Error(data.message || 'Login failed')
      localStorage.setItem('nexus_token', data.token)
      localStorage.setItem('nexus_user', JSON.stringify({ email, role: data.role }))
      setToken(data.token)
      setUser({ email, role: data.role })
      return data
    } finally { setLoading(false) }
  }

  const register = async (payload) => {
    const { data } = await authAPI.register(payload)
    return data
  }

  const logout = () => {
    localStorage.removeItem('nexus_token')
    localStorage.removeItem('nexus_user')
    setToken(null); setUser(null)
  }

  const isAuth = !!token

  return (
    <AuthCtx.Provider value={{ user, token, isAuth, login, register, logout, loading }}>
      {children}
    </AuthCtx.Provider>
  )
}
