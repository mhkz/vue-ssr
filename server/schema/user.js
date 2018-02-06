/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    tableName: 'user'
  });
};
