const { Router } = require("express");
const express = require("express");

const router = express.Router()

router.use(logger);
router.use(loggerForAnything);

router.get('/', (req, res) => {
    console.log(req.query.name, 'Yoooo');
    res.send("Users List")
})

router.get("/new", (req, res) => {
    res.render("users/new");
})

router.post("/", (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        // redirect to a brand new url bro
        res.redirect(`/users/${users.length -1}`)
    } else {
        console.log("Error")
        res.render("users/new", { firstName: req.body.firstName })
    }
})

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.anyThing)
        res.send(`Get User with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User with ID ${req.params.id}`)
    })


const users = [{name: 'Kyle'}, {name: 'Sally'}]
router.param(("id"), (req, res, next, id) => {
    req.anyThing = users[id]
    next()
})

function logger (req, res, next) {
    console.log(req.originalUrl)
    next()
}

function loggerForAnything (req, res, next) {
    console.log("anything in between...")
    next()
}

module.exports = router;