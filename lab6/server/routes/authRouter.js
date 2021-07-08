const express = require('express');
const userController = require('../controllers/authController');

const router = express.Router();
 router.post('/login', userController.login);

module.exprots = router;