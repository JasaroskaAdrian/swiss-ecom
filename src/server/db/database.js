import 'dotenv/config'
import pg from 'pg'

export async function main(){
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
}
main()
