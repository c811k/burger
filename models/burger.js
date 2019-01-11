var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", (result) => {
            cb(result);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, (result) => {
            cb(result);
        });
    },
    upateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, (result) => {
            cb(result);
        });
    }
};

module.exports = burger;