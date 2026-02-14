const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.showLogin = (req, res) => {
  res.render('login');
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });

  if (!user) return res.send("User not found");

  const match = await bcrypt.compare(password, user.password);

  if (!match) return res.send("Wrong password");

  req.session.user = user;

  if (user.role === 'admin') {
    return res.redirect('/admin/dashboard');
  } else {
    return res.redirect('/instructor/dashboard');
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};