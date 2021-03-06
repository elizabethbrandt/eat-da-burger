const connection = require("./connection");

function objToSql(ob) {
    
    const arr = [];
  
    for (let key in ob) {
      let value = ob[key];

      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
}

const orm = {

    all: (table, cbModel) => {

        let queryString = `SELECT * FROM ${table};`;

        console.log(queryString);

        connection.query(queryString, (err, res) => {

            if (err) throw err;

            cbModel(res);
        });
    },

    create: (table, cols, vals, cbModel) => {

        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (?,?)`

        console.log(queryString);

        connection.query(queryString, vals, (err, res) => {

            if (err) throw err;

            cbModel(res);
        })
    },

    update: (table, vals, condition, cbModel) => {

        let queryString = `UPDATE ${table} SET ${objToSql(vals)} WHERE ${condition};`

        console.log(queryString);

        connection.query(queryString, (err, res) => {
            
            if (err) throw err;

            cbModel(res);
        })
    }
};

module.exports = orm;