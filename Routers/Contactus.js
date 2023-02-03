const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
router.get('/Contactus', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'Contactsus.html'));
});


router.post('/Contactus', (req, res, next) => {
  console.log(req.body);
  res.redirect('/sucess');
 
});
  
module.exports = router;
