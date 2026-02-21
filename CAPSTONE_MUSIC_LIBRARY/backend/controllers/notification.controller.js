const Notification = require("../models/notification.model");

// we can create notif
exports.createNotification = async (message) => {
  await Notification.create({ message });
};

// here we get ll notif
exports.getNotifications = async (req, res) => {
  const notifications = await Notification.find().sort({ createdAt: -1 });
  res.json(notifications);
};

// used to mark read
exports.markAsRead = async (req, res) => {
  await Notification.findByIdAndUpdate(req.params.id, { isRead: true });
  res.json({ message: "Notification marked as read" });
};