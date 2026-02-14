const express = require('express');
const session = require('express-session');
require('dotenv').config();

const { sequelize } = require('./models');

const authRoutes = require('./userStory1-authentication/auth.routes');
const adminRoutes = require('./userStory2-rbac/admin.routes');
const instructorRoutes = require('./userStory2-rbac/instructor.routes');
const studentRoutes = require('./userStory3-relationships/student.routes');
const reportRoutes = require('./userStory6-reporting/report.routes');

const app = express();

app.set('view engine', 'ejs');

app.set('views', [
  __dirname + '/userStory1-authentication/views',
  __dirname + '/userStory2-rbac/views',
  __dirname + '/userStory3-relationships/views',
  __dirname + '/userStory6-reporting/views'
]);

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(authRoutes);
app.use('/admin', adminRoutes);
app.use('/instructor', instructorRoutes);
app.use(studentRoutes);
app.use(reportRoutes);

app.listen(3000, async () => {
  await sequelize.authenticate();
  console.log("Server running at http://localhost:3000");
});