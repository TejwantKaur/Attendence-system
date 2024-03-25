const express = require('express')
const app = express()
const path = require("path")
const ejsMate = require("ejs-mate");

app.engine("ejs",ejsMate);
app.set("views",path.join(__dirname,"views"));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    res.render("index.ejs")
});

app.get('/about',(req, res) => {
    res.render("about.ejs")
});

app.get('/services',(req, res) => {
    res.render("services.ejs")
});

app.get('/contact',(req, res) => {
    res.render("contact.ejs")
});

app.get('/login',(req, res) => {
    res.render("index.ejs")
});

app.listen(3030);