import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null

app.get('/', (_, res) => res.json({ ok: true, name: 'Kulu İlan API' }))

app.post('/register', async (req, res) => {
  try {
    const { fullName, phone } = req.body
    if (!fullName || !phone) return res.status(400).json({ error: 'fullName and phone required' })
    if (!supabase) return res.status(500).json({ error: 'Supabase not configured' })
    const { data, error } = await supabase
      .from('users')
      .insert({ full_name: fullName, phone, is_approved: false })
      .select('*')
      .single()
    if (error) throw error
    res.json({ user: data })
  } catch (e) {
    res.status(500).json({ error: String(e.message || e) })
  }
})

app.post('/listings', async (req, res) => {
  try {
    const { title, area, price, district, description, coverUrl, type, ownerPhone } = req.body
    if (!title || !price || !district || !type) return res.status(400).json({ error: 'missing fields' })
    if (!supabase) return res.status(500).json({ error: 'Supabase not configured' })
    const { data, error } = await supabase
      .from('listings')
      .insert({ title, area, price, district, description, cover_url: coverUrl, type, is_approved: false, owner_phone: ownerPhone })
      .select('*')
      .single()
    if (error) throw error
    res.json({ listing: data })
  } catch (e) {
    res.status(500).json({ error: String(e.message || e) })
  }
})

app.get('/listings', async (_req, res) => {
  try {
    if (!supabase) return res.status(500).json({ error: 'Supabase not configured' })
    const { data, error } = await supabase.from('listings').select('*').eq('is_approved', true).order('created_at', { ascending: false })
    if (error) throw error
    res.json({ listings: data })
  } catch (e) {
    res.status(500).json({ error: String(e.message || e) })
  }
})

// Admin: approve user
app.post('/admin/users/:id/approve', async (req, res) => {
  try {
    const { id } = req.params
    if (!supabase) return res.status(500).json({ error: 'Supabase not configured' })
    const { data, error } = await supabase.from('users').update({ is_approved: true }).eq('id', id).select('*').single()
    if (error) throw error
    res.json({ user: data })
  } catch (e) {
    res.status(500).json({ error: String(e.message || e) })
  }
})

// Admin: approve listing
app.post('/admin/listings/:id/approve', async (req, res) => {
  try {
    const { id } = req.params
    if (!supabase) return res.status(500).json({ error: 'Supabase not configured' })
    const { data, error } = await supabase.from('listings').update({ is_approved: true }).eq('id', id).select('*').single()
    if (error) throw error
    res.json({ listing: data })
  } catch (e) {
    res.status(500).json({ error: String(e.message || e) })
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Kulu İlan API running on :' + port)
})