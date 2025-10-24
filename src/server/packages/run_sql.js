import 'dotenv/config'
import client from "../../db/database"
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