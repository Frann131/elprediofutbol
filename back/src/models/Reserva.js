const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "reserva",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      start: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      end: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      canchaid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      userid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      promo: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      confirmed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    { paranoid: true }
  );
};
