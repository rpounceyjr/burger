const connection = require("./connection");

var orm = {
    selectAll: function (tableInput, callback) {
        var queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function (tableInput, columns, values, callback) {
        var queryString = `INSERT INTO ${tableInput} (${columns}) VALUES ('${values}')`;
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    updateOne: function (tableInput, columns, values, condition, callback) {
        var queryString = `UPDATE ${tableInput} SET ${column} = ${value} WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString, columns, values, condition, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
}

module.exports = orm;