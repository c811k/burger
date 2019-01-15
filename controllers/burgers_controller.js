var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    })
});

router.post("/", (req, res) => {
    burger.insertOne([
        "burger_name"
    ], [req.body.burger_name], (result) => {
        res.redirect("/");
    });
});

router.put("/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    burger.upateOne({
        devoured: true
    }, condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;