const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads");
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function (err, name) {
      // const originalName = file.originalname;
      // req.fileOrignal

      cb(
        null,
        name.toString("hex") + path.extname(file.originalname)
      );
    });
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
