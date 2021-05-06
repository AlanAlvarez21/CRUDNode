const ticket = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('ticket', {
    description: {
      type: DataTypes.STRING
    },
    feedback: {
      type: DataTypes.STRING
    },
    statusId: {
      type: DataTypes.INTEGER
    },
    requestId: {
      type: DataTypes.INTEGER
    }
  });

  Ticket.associate = models => {
    //Create a relationship betwen the models
    Ticket.belongsTo(models.User);
    Ticket.belongsTo(models.Employe);
    Ticket.belongsTo(models.Status);
    Ticket.belongsTo(models.Request);
  };

  return Ticket;
};
export default ticket;
