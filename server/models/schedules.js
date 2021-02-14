'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  schedules.init({
    title: DataTypes.STRING,
    startTime: DataTypes.INTEGER,
    endTime: DataTypes.INTEGER,
    userEmail: DataTypes.STRING,
    data: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'schedules',
  });
  return schedules;
};