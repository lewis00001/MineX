module.exports = function (sequelize, Sequelize) {
    var Minerals = sequelize.define("minerals", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        uranium: Sequelize.INTEGER,
        neodymium: Sequelize.INTEGER,
        praseodymium: Sequelize.INTEGER,
        galium: Sequelize.INTEGER,
        idium: Sequelize.INTEGER,
        terbium: Sequelize.INTEGER,
        silver: Sequelize.INTEGER,
        hafnium: Sequelize.INTEGER,
        rhenium: Sequelize.INTEGER,
        germanium: Sequelize.INTEGER,
        gold: Sequelize.INTEGER,
        platinum: Sequelize.INTEGER,
        palladium: Sequelize.INTEGER,
        rhodium: Sequelize.INTEGER,
        diamond: Sequelize.INTEGER,
        blueDiamond: Sequelize.INTEGER
    }, {
        timestamps: false
    });

    return Minerals;
};
