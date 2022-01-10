const knex = require("./knex");

const createUser = (user) => {
  // console.log('here ere', knex('users'))
  return knex("users").insert(user);
};

const updateOrCreate = (id = null, userData) => {
  const user = !knex("users").where("id", id);
  if (!user) {
    knex('users').insert(userData);
  } else {
    knex("users").where("id", id).update(user)
  }
};

const getUser = (id) => {
  return knex("users").where("id", id);
};

const deleteUser = (id) => {
  return knex("users").where("id", id).del();
};

const updateUser = (id, user) => {
  return knex("users").where("id", id).update(user);
};

module.exports = {
  createUser,
  getUser,
  deleteUser,
  updateUser,
  updateOrCreate,
};
