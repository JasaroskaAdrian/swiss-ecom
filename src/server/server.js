// server.js (only if you *really* want Node to serve the built app)
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DIST = path.join(__dirname, '../dist') // adjust to your build path

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(DIST, { maxAge: '1h', index: false }))

app.use((req, res) => res.status(404).send('Not found'));

app.get('/health', (_, res) => res.json({ ok: true }));

// SPA fallback: send index.html for non-file routes (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST, 'index.html'))
})

app.listen(port, () => console.log(`http://localhost:${port}`))