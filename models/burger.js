const orm = require("../config/orm");


// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

var burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },
    insertOne: function (columns, values, callback) {
        orm.insertOne("burgers", columns, values, function (res) {
            callback(res);
        });
    },
    updateOne: function (columns, values, condition, callback) {
        orm.updateOne("burgers", columns, values, condition, function (res) {
            callback(res);
        });
    }
};

module.exports = burger;