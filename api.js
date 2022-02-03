const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, () => {
    console.log("Sever is now listening at port 3300");
})

client.connect();

const bodyParser = require("body-parser");
const { password } = require('pg/lib/defaults');
app.use(bodyParser.json());

    // USERS //

// get all users
app.get('/users', (req, res) => {
    client.query(`Select * from "SaiUsers"`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})


// get user by email  // NOK //

app.get('/getUsersEmail/:email', (req, res) => {
    client.query(`Select * from "SaiUsers" where "Email" = '${req.params.email}' `, (err, result) => {
        if (!err) {
            res.send(result.rows);
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

// update password //NOK//

app.put('/MajUserPass/:id', (req, res) => {
    let credentials = req.body;
    console.log(credentials);
    let updateQuery = `update "SaiUsers"
                       set "Password" = '${credentials.Password}'
                       where "Email" = ${credentials.Email}`

    client.query(updateQuery, (err, result) => {
        if (!err) {
            res.send('Update was successful')
        }
        else { console.log(err.message) }
    })
    client.end;
})

// SOC//

// get all Soc
app.get('/Soc', (req, res) => {
    client.query(`Select * from "SaiSoc"`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})

// SESSION//

// get  Session //NOK//
app.get('/Session/:SessionName', (req, res) => {
    client.query(`Select * from "SaiSoc" where "SessionName" = '${req.params.SessionName}' `, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})


// Send mail 


// login
//hefhi mouch heya 
app.get('/login', (req, res) => {
    let credentials = req.body;
    let loginQuery = `SELECT "compteur" FROM "SaiUsers" WHERE "Email" = '${credentials.Email}' and "Password" = '${credentials.Password}' `
    client.query(loginQuery, (err, result) => {
        if (!err) {
            res.send(result)
        }
        else { console.log(err.message) }
    })
    client.end;
})

