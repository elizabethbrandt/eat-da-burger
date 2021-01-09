const connection = require("connection");

const orm = {

    all: function(tableInput, cbModel) {

        let queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, (err, res) => {

            if (err) throw err;
            cbModel(res);
        });
    },

    // create: function(table, cols, vals, cbModel) {

    //     let queryString = "INSERT INTO " + table;
    // }
}