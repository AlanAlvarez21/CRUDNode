import Sequelize from 'sequelize';
import db from '../config/database';

const models = {
  User: db.import('./user'),
  Ticket: db.import('./ticket'),
  Employe: db.import('./employe'),
  Request: db.import('./request'),
  Status: db.import('./status')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export default models;
