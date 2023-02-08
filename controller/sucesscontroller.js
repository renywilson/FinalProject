
const path = require('path');

const rootDir = require('../util/path');

exports.sucesscontroller=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'sucess.html'));
  }