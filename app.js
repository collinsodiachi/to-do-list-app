let express = require("express"),
    app     = express();

app.set("view engine", "ejs")
app.use(express.static("public"))

//ROUTES
app.get("/", function(req,res){
    res.render("index");
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is Ready")
})