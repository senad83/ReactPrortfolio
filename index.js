const express = require ("express");
// create port on 3001 or other available one
let app = express();
let port = process.env.PORT || 3001; 

// creating static route that will run into a build
app.use (express.static(__dirname + "/build"))

// * means everything (it alway redirects on index.html)
app.get ("*", function(req, res, next){
    res.sendFile(__dirname + "/build/index.html")
})

// app is listening on port from line 4
app.listen (port, function(){
    console.log ("server is running", port)
})