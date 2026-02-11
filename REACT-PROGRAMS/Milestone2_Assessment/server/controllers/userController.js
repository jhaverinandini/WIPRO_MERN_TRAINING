let users = [];

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.addUser = (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.deleteUser = (req, res) => {
  users = users.filter(u => u.id !== Number(req.params.id));
  res.json({ message: "Deleted" });
};