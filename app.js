var express = require("express");
var app = express();
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
// app.use(express.static(__dirname + '/public'));
app.use(express.static("public"))
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req,res) {
res.render("index.ejs");
});

app.post("/contact", function(req, res) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'trentonneilson14@gmail.com',
            pass: 'Utahutes14!'
        }
    });

    var mailOptions = {
        from: req.body.email,
        to: 'trentonneilson14@gmail.com',
        subject: req.body.name + " - " + req.body.email,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    console.log(req.body);
    res.status(204).send();

});


app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server started");
});