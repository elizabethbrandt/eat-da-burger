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

module.exports = router;