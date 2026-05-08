import axios from 'axios'

// ─────────────────────────────────────────────────────────────────
//  ⚙️  API Base Instance
//  Set VITE_API_URL di file .env:
//    VITE_API_URL=http://localhost:8000/api
// ─────────────────────────────────────────────────────────────────
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api',
  headers: { Accept: 'application/json' },
})

// Unwrap Laravel { data: [...] } wrapper jika ada
api.interceptors.response.use(
  (res) => (res.data?.data !== undefined ? res.data.data : res.data),
  (err) => Promise.reject(err)
)

// ─────────────────────────────────────────────────────────────────
//  📡  Endpoints
// ─────────────────────────────────────────────────────────────────

/**
 * Lecturers  →  GET /api/lecturers
 * Fields: id, nidn, full_name, slug, email, education,
 *         research_focus, photo_url (appended), phone_number, address
 */
export const lecturerApi = {
  getAll:    ()     => api.get('/lecturers'),
  getBySlug: (slug) => api.get(`/lecturers/${slug}`),
}

/**
 * Specializations  →  GET /api/specializations
 * Fields: id, name, code, description
 */
export const specializationApi = {
  getAll:  ()   => api.get('/specializations'),
  getById: (id) => api.get(`/specializations/${id}`),
}

export default api