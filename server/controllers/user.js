import models from '../models';

const add = async (req, res) => {
  try {
    const { body } = req;
    const response = await models.User.create(body);
    res.send(response).status(201);
  } catch (err) {
    res.status(500).send(err.errors[0].message);
  }
};

const list = async (req, res) => {
  try {
    const { body } = req;
    const response = await models.User.findAll();
    res.send(response).status(200);
  } catch (err) {
    res.status(500).send(err.errors[0].message);
  }
};

const byId = async (req, res) => {
  try {
    const pk = req.params.id;
    const response = await models.User.findByPk(pk);
    res.send(response).status(200);
  } catch (err) {
    res.status(500).send(err.errors[0].message);
  }
};

export { add, list, byId };
