const orm = require("../config/orm");

const burgers = {

    all: (cbController) => {

        orm.all("burgers", (res) => {

            cbController(res);
        })
    },

    create: (cols, vals, cbController) => {

        orm.create("burgers", cols, vals, (res) => {

            cbController(res);
        })
    }
};

module.exports = burgers;