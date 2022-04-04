const { Model, DataTypes } = require('sequelize');

class Role extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsToMany(models.User, { foreignKey: 'role_id', through: 'user_roles', as: 'users' });
    this.belongsToMany(models.Permission, { foreignKey: 'role_id', through: 'role_permissions', as: 'permissions' });
  }
}

module.exports = Role;
