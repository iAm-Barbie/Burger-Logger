var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8090;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password: "juicyJ03@$",
    database: "burgers_db"

});

connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("conncted as id" + connection.threadIdhreadId);

});

// app.get("/", function(req, res){
//     connection.query("SELECT * FROM burgers;", function(err, data){
//         if (err) throw err;
//         res.render("index", { burgers: data });
//     });

// });

// app.post("/", function(req, res){
//     connection.query("INSERT INTO burgers (burgers) VALUES (?)", [req.body.burgers], function(err, result){
//         if(err) throw err;

//         res.redirect("/");
//     } );

// });

app.listen(PORT, function(){
   console.log("sever listening on: http://localhost:" + PORT);
});
