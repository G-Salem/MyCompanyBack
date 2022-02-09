const { Client } = require('pg');

// connexion avec la BD seveur
// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "Logime$2022",
//     database: "Logimes"
// })
// connexion avec la BD seveur

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "Logimes"
})

module.exports = client
