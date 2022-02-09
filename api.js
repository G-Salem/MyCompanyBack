const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, () => {
    console.log("Sever is now listening at port 3300");
})

client.connect();

console.log("connected");

const bodyParser = require("body-parser");
const { password } = require('pg/lib/defaults');
app.use(bodyParser.json());


// get all users
app.get('/users', (req, res) => {
    client.query(`Select * from "SaiUsers"`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})


// get user by email
app.get('/getUsersEmail/:email', (req, res) => {
    client.query(`Select * from "SaiUsers" where "Email" = '${req.params.email}' `, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
        else {
            console.log(err);
        }
    });
    client.end;
})

// get user by compteur/id   

app.get('/userCompteur/:compteur', (req, res) => {
    client.query(`Select * from "SaiUsers" where "compteur"= '${req.params.compteur}' `, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})

// update password 

app.put('/MajUserPass', (req, res) => {
    let credentials = req.body;
    let updateQuery = `update "SaiUsers"
                       set "Password" = '${credentials.Password}'
                       where "Email" = '${credentials.Email}'`

    client.query(updateQuery, (err, result) => {
        if (err != null) {
            console.log("client.query():", err);
        } else {
            res.send(result.fields);
        }
    })
})


// get all info from SaiSoc

app.get('/Soc', (req, res) => {
    client.query(`Select * from "SaiSoc"`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})



// get  Session by session name

app.get('/Session/:SessionName', (req, res) => {
    client.query(`Select * from "SaiSession" where "SessionName" = '${req.params.SessionName}' `, (err, result) => {
        console.log(req.params.SessionName);
        if (err != null) { console.log(err); } else {
            res.send(result.rows);
        }
    });
    client.end;
})

// login 

app.post('/login', (req, res) => {
    let loginQuery = `SELECT "compteur" FROM "SaiUsers" WHERE "Email" = '${req.body.Email}' and "Password" = '${req.body.Password}' `
    console.log(req.body.Email) 
    console.log(req.body.Password) 

    client.query(loginQuery, (err, result) => {
        if (err != null) {
            console.log(err.message) 
        }
        else { 
            console.log("result.rows");
            console.log(result.rows[0]);
            res.send(result.rows[0])

        }
    })
    client.end;
})