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
    },

    update: (vals, condition, cbController) => {

        orm.update("burgers", vals, condition, (res) => {

            cbController(res)
        })
    }
};

module.exports = burgers;