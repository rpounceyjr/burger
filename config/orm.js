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
    insertOne: function (tableInput, column, value, callback) {
        var queryString = `INSERT INTO ${tableInput} ${column} VALUES (${value})`;
        console.log(queryString);
        connection.query(queryString, column, value, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    updateOne: function (tableInput, column, value, condition, callback) {
        var queryString = `UPDATE ${tableInput} SET ${column} = ${value} WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString, column, value, condition, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
}

module.exports = orm;