const user = (sequelize, DataTypes) => {
const User = sequelize.define('user', {
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

})

    User.associate = models => { //Create a relationship betwen the models 
        User.hasMany(models.Ticket, { onDelete: 'CASCADE'});
    };

    return User;
};

export default user;