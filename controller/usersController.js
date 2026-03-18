const usersController = {
  getUsers: (req, res) => {
    res.send("respond with a resource");
  },
  deleteUser: (req, res) => {
    res.send("delete user");
  },
  updateUser: (req, res) => {
    res.send("update user");
  },
  createUser: (req, res) => {
    res.send("create user");
  },
  getUserById: (req, res) => {
    res.send("get user by id");
  },
};

module.exports = usersController;
