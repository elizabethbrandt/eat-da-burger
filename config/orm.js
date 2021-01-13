const connection = require("./connection");

const orm = {

    all: (table, cbModel) => {

        let queryString = `SELECT * FROM ${table};`;

        console.log(queryString + "ALL QS");

        connection.query(queryString, (err, res) => {

            if (err) throw err;

            cbModel(res);
        });
    },

    create: (table, cols, vals, cbModel) => {

        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (?,?,?)`

        console.log(queryString + "CREATE QS");

        connection.query(queryString, vals, (err, res) => {

            if (err) throw err;

            cbModel(res)
        })
    },

    update: (table, vals, condition, cbModel) => {

        let queryString = `UPDATE ${table} SET ${vals} WHERE ${condition};`

        console.log(queryString + "UPDATE QS");

        connection.query(queryString, (err, res) => {
            
            if (err) throw err;

            cbModel(res);
        })
    }
};

module.exports = orm;