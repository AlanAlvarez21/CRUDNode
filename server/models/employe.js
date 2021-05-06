const employe = (sequelize, DataTypes) => {
  const Employe = sequelize.define('employe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  Employe.associate = models => {
    //Create a relationship betwen the models
    Employe.hasMany(models.Ticket);
  };

  return Employe;
};

export default employe;
