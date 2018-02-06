/* jshint indent: 2 */

export default  function(sequelize, DataTypes) {
  return sequelize.define('list', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    content: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'list'
  });
};
