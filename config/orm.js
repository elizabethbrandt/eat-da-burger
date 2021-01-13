const connection = require("./connection");

const printQuestionMarks = num => {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}

const objToSql = ob => {
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

        console.log(queryString + "ALL QS");

        connection.query(queryString, (err, res) => {

            if (err) throw err;

            cbModel(res);
        });
    },

    create: (table, cols, vals, cbModel) => {

        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals)})`

        console.log(queryString + "CREATE QS");

        connection.query(queryString, vals, (err, res) => {

            if (err) throw err;

            cbModel(res);
        })
    },

    update: (table, vals, condition, cbModel) => {

        let queryString = `UPDATE ${table} SET ${objToSql(vals)} WHERE ${condition};`

        console.log(queryString + "UPDATE QS");

        connection.query(queryString, (err, res) => {
            
            if (err) throw err;

            cbModel(res);
        })
    }
};

module.exports = orm;