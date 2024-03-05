const express = require("express");
const app = express();
const port = 3000;


// app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs");

app.get('/', auth, (req, res) => {
  console.log("Request.admin:", req.admin);
  res.send("Home Page");
})

const userRouter = require('./routes/users');
app.use('/users', userRouter);



function logger(req, res, next) {
  console.log("This is a logger bro!");
  next();
}

function auth(req, res, next) {
  console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
  next()
}

app.listen(port);