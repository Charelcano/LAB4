const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/authConroller');
const auth = require('../middleware/auth');

// list routes
router.post('/auth/signup', ctrl.signup);
router.post('/auth/login', ctrl.login);
router.post('/auth/logout', ctrl.logout);
router.get('/profile', auth(true), ctrl.profile);

module.exports = router;