const express = require('express');
const {  db } = require('./db');
const mysql = require('./db')

const app = express()
const port = 3000


app.get('/', (req, res)  =>  {

    const number = Math.floor(Math.random() * 100)
    mysql.executeQuery(`insert into people set name = 'Jorge Henrique-${number}'`);


    mysql.executeQuery("select * from people").then((data) => {
        let html = "<h1>Full Cycle Rocks!</h1><br><ul>"
            data.map((people) => html += `<li>${people.name}</li>`)
        html += "</ul>"

        res.send(html);
    })
});



mysql.connect().then(() => {
    app.listen(port, () => {
        console.log('running server on port: '+port)
    })

}).catch(e => {
    console.error('Error connecting mysql...')
    process.exit()
})