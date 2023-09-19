module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      boardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      created: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "Comment",
      timestamps: false,
    }
  );
  return Comment;
};