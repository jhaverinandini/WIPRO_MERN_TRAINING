const multer = require("multer");

const storage = multer.memoryStorage(); 
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // limit is 100mb
});

module.exports = upload;