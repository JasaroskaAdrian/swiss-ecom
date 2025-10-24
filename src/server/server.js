import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const DIST = path.resolve(process.cwd(), "dist")

const app = express()
const port = process.env.PORT || 3000;

app.use(express.static(DIST));
app.use((req, res) => res.status(404).send('Not found'));

app.get('/', (req, res) => res.redirect('/home'))

app.get('/health', (_, res) => res.json({ ok: true }));

app.get('/home', (req, res) => {
    res.sendFile(path.join(DIST, "index.html"))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(DIST, "login.html"))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(DIST, "register.html"))
})
app.listen(port, () => console.log(`http://localhost:${port}`))