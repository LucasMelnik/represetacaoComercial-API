/* eslint-disable linebreak-style */
const { Model, DataTypes } = require('sequelize');

// TODO: CHANGE ATRIBUTE "CONDITION" TO "NAME"
class PaymentCondition extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.hasMany(models.ProductPrice, { foreignKey: 'payment_condition_id', as: 'payment_condition' });
    this.hasMany(models.ProductPrice, { foreignKey: 'payment_condition_id', as: 'payment_conditions' });
    this.belongsToMany(models.Factory, { foreignKey: 'payment_condition_id', through: 'factory_conditions', as: 'factory_payment_conditions' });
  }
}
module.exports = PaymentCondition;
