let express = require('express');
let app = express();
let PORT_URL= 3030;
const mysql = require('mysql');

let con = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'nodejs'
});

con.connect(function(err) {
     if(err) throw err;
     console.log("db connection successful");
})

app.get('/',function(req,res){
     res.send(`<h1>This is a h1 heading </h1>
     <h2>This is a h2 heading </h2>
     <h3>This is a h3 heading </h3>
     <h4>This is a h4 heading </h4>
     <h5>This is a h5 heading </h5>
     <h6>This is a h6 heading </h6>
     <p>This is a p tag </p>`)
});

app.listen(PORT_URL,function() {
     console.log("service listening on port", PORT_URL);
});