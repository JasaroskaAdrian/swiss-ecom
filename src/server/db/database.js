import 'dotenv/config'
import pg from 'pg'
const { Pool, Client } = pg

async function main(){
    const pool = new Pool({
        host: '127.0.0.1',
        port: '15432',
        user: 'admin',
        password: process.env.POSTGRES_PASS,
        database: 'shop',
        max: 10
    })
    try {
        console.log('CWD:', process.cwd())
        console.log('POSTGRES_PASS set?', typeof process.env.POSTGRES_PASS === 'string');
        // The Database connected now asks a query to check if theres something wrong internally
        const res = await pool.query("SELECT 'HelloWorld' as message")
        console.log("Yay, connected to the Database! :)")
        console.log(res.rows[0].message)
    } catch (err) {
        console.log("DB error:", err.code, err.message)
    } finally {
        await pool.end()
    }
}
main()