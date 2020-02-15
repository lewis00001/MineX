module.exports = function (sequelize, Sequelize) {
    var Minerals = sequelize.define("minerals", {
        mineral_name: Sequelize.STRING,
        price: Sequelize.INTEGER
    }, {
        timestamps: false
    });

    return Minerals;
};