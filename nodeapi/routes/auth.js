const express = require('express');
const { getUsers, signup, signin } = require('../controllers/auth');
const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/', getUsers);

module.exports = router;