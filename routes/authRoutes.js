const express = require('express');
const { cadastrar } = require('../controllers/authController');
const router = express.Router();

router.post('/cadastrar', cadastrar);
router.post('/login', authController.login);


module.exports = router;
