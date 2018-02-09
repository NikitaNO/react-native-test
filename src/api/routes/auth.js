const express = require('express');
const DBController = require('../controllers/db');

const router = express.Router();
const authRoutes = express.Router();

router.use('/auth', authRoutes);

authRoutes.post('/login', DBController.checkUser);
authRoutes.post('/register', DBController.createUser);

module.exports = router;