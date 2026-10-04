import axios from 'axios'

const API = import.meta.env.VITE_API_URL || 'http://localhost:8081'

const client = axios.create({
  baseURL: API,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000
})

client.interceptors.request.use(cfg => {
  const token = localStorage.getItem('nexus_token')
  if (token) cfg.headers.Authorization = `Bearer ${token}`
  return cfg
})

client.interceptors.response.use(
  r => r,
  err => {
    if (err.response?.status === 401) {
      localStorage.removeItem('nexus_token')
      localStorage.removeItem('nexus_user')
    }
    return Promise.reject(err)
  }
)

export const authAPI = {
  login: (data) => client.post('/api/auth/login', data),
  register: (data) => client.post('/api/auth/register', data),
}

export const doctorsAPI = {
  list: () => client.get('/api/doctors'),
  get: (id) => client.get(`/api/doctors/${id}`),
  create: (d) => client.post('/api/doctors', d),
  update: (id,d) => client.put(`/api/doctors/${id}`, d),
  del: (id) => client.delete(`/api/doctors/${id}`)
}

export const patientsAPI = {
  list: () => client.get('/api/patients'),
  get: (id) => client.get(`/api/patients/${id}`),
  create: (d) => client.post('/api/patients', d),
}

export const appointmentsAPI = {
  list: () => client.get('/api/appointments'),
  create: (d) => client.post('/api/appointments', d),
  del: (id) => client.delete(`/api/appointments/${id}`),
  byPatient: (id) => client.get(`/api/appointments/patient/${id}`),
  byDoctor: (id) => client.get(`/api/appointments/doctor/${id}`),
}

export const contactAPI = {
  send: (d) => client.post('/api/contact', d)
}

export default client
