import 'dotenv/config'
import { pool } from "../db/database.js"
import fs from 'node:fs/promises'

async function runSql(){
    try {
    /*
    Check Up if File exists or is getting read
    */
        const file = process.argv[2];
        if(!file) {
            console.error('Usage: node bin/run-sql.js <path/to/file.sql> ');
            process.exit(1)
        } else {
            console.log("SQL Path Parsing Successful")
        }
        const sql = await fs.readFile(file, 'utf8');
        let conn;
        try {
            const dbPool = pool();
            conn = await dbPool.getConnection();
            console.log("Yay, connected to the Database! :)")
            await conn.query(sql)
            console.log('Result: OK');        
        } catch (err) {
            console.error('SQL error:', err.code || '', err.message)
        } finally {
            if (conn) conn.end();
        }
    } catch (err) {
        console.error("DB Error:", err.code, err.message);    
    }
}
runSql()