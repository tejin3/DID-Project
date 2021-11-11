const mysql = require("mysql");
let sql = require("./sql.js");

const pool = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
});

pool.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Maria DB Connected...");
    }
});

const query = async (alias, param = [], where = "") => {
    return new Promise((resolve, reject) =>
        pool.query(sql[alias].query + where, param, (error, rows) => {
            console.log(`
            query is ${sql[alias].query + where}
            param is ${param}
            `);
            if (error) {
                if (error.code != "ER_DUP_ENTRY") console.log(error);
                resolve({
                    error,
                });
            } else resolve(rows);
        })
    );
};

module.exports = {
    query,
};
