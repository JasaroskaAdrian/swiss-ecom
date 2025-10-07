import 'dotenv/config'
import pg from 'pg'
import fs from 'node:fs/promises'

async function runSql(){
    /*
    Client Connection Arguments
    */ 
    const client = new pg.Client({
        host: '127.0.0.1',
        port: 15432,
        user: 'admin',
        password: process.env.POSTGRES_PASS,
        database: 'shop'
    })
    try {
    /*
    Check Up on Parameters
    */
        console.log('CWD:', process.cwd())
        if (typeof process.env.POSTGRES_PASS === 'string'){
            console.log('POSTGRES_PASS set?', true);
        } else {
            console.log('POSTGRES_PASS set?', false);
        }
    } catch (err) {
        console.log("DB error:", err.code, err.message)
    }
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
        try {
        /*
        Connection to Database and Testing client.query() 
        */
            await client.connect();
            console.log("Yay, connected to the Database! :)")
            await client.query(sql)
            console.log('Result: OK');        
        } catch (err) {
            console.error('SQL error:', err.code || '', err.message)
        } finally {
            await client.end();
        }
    } catch (err) {
        console.error("DB Error:", err.code, err.message);    
    }
    
}
runSql()