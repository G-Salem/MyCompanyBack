const { Client } = require('pg');


// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "Logime$2022",
//     database: "Logimes"
// })

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "Logimes"
})

module.exports = client
