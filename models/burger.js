const orm = require("../config/orm");

const burgers = {

    all: function(cbController) {

        orm.all("burgers", function(res) {

            cbController(res);
        })
    }
};

module.exports = burgers;