const orm = require("../config/orm");


// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

var burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },
    insertOne: function (values, callback) {
        orm.insertOne("burgers", "burger_name", values, callback)
    },

    updateOne: function (columns, values, condition) {
        orm.updateOne("burgers", columns, values, condition, callback)
    }
};

module.exports = burger;