const connection = require("../config/connection");

const orm = {

    all: (tableInput, cbModel) => {

        let queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, (err, res) => {

            if (err) throw err;
            
            cbModel(res);
        });
    },

    create: (table, cols, vals, cbModel) => {

        let queryString = "INSERT INTO " + table + "(" + cols.toString() + ") VALUES (?,?,?)"

        console.log(queryString);

        connection.query(queryString, vals, (err, res) => {

            if (err) throw err;

            cbModel(res)
        })
    }
};

module.exports = orm;