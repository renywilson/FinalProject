

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/get-user', userController.getUser);
router.post('/add-user',userController.addUser);

//router.delete('/delete-user/:id',userController.deleteUser);

router.post('/edit-user/:id,qty',userController.buyOne);

module.exports = router;

