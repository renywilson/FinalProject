const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
router.get('/sucess', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'sucess.html'));
  });
  
module.exports = router;
