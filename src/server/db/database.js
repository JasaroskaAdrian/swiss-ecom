import 'dotenv/config';
import * as mariadb from 'mariadb';

const date          = new Date();
const dateForms     = {
    weekday: "long"
   ,day: "numeric"
   ,month: "long"
   ,year: "numeric"                  
};
const formattedDate = date.toLocaleDateString("de-CH", dateForms);

export async function main(){ 
    const pool = mariadb.createPool({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: process.env.MARIADB_ROOT_PASS,
        database: 'gligar',
        connectionLimit: 5
    })

    let conn;
    try {
        console.log('CWD:', process.cwd())
        if (typeof process.env.MARIADB_ROOT_PASS === 'string'){
            console.log('DB Password set?', true);
            try {
                conn = await pool.getConnection();
                const rows = await conn.query("SELECT 1 as val");
                console.log(rows);
                const res = await conn.query("INSERT INTO MariaDBtestConnection VALUES (?, ?);", [1, formattedDate]);
                console.log(res);
            } catch (err) {
                console.log(err);
            } finally {
                if (conn) conn.end();
                pool.end();
            }
        } else {
            console.log('DB Password set?', false);
            pool.end();
        }
    } catch (err) {
        console.log("DB error:", err.code, err.message)
        pool.end();
    }
}
main()
