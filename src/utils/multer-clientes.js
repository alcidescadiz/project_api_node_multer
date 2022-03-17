const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/users/')
    },
    filename: function (req, file, cb) {
      cb(null, 'user-' + Date.now()+'.jpg')
    }
  })
const upload = multer({ storage })

module.exports = upload