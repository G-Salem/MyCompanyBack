const { Client } = require('pg');
const { port } = require('pg/lib/defaults');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "Logimes"
})

// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "Logime$2022",
//     database: "Logimes"
// })


client.connect((res, err) => {
    if (err) {
        console.log(err);
    }
})
// query 3adeya 
client.query(`Select * from "SaiUsers"`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log('ERROR', err.message);
    }
})

// Matricule fiscale 
client.query(`Select * from "SaiUsers"`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log('ERROR', err.message);
    }
})

//session name 

client.query(`Select * from "SaiUsers"`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log('ERROR', err.message);
    }
})



