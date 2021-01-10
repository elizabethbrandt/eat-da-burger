const express = require("express");

const router = express.Router();

const burgers = require("../models/burger");

router.get("/", (req, res) => {
    
    burgers.all((data) => {

        const burgerObject = {
            burgers: data
        };
        console.log(burgerObject);

        res.render("index", burgerObject);
    });

});

router.post("/api/burgers", (req, res) => {

    burgers.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (data) => {

        res.json({id: data.id})
    })
})

module.exports = router;