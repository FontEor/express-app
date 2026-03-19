const { User } = require('@/model/index');
const usersController = {
  registerUser: async (req, res) => {
    const userModel = new User(req.body);
    userModel
      .save()
      .then((user) => res.status(201).json(user))
      .catch((error) => res.status(400).json({ error: error.message }));
  },
  getUsers: async (req, res) => {},
  deleteUser: async (req, res) => {},
  updateUser: async (req, res) => {},
  createUser: async (req, res) => {},
  getUserById: async (req, res) => {},
};

module.exports = usersController;
