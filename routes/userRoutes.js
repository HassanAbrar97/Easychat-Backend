const express = require('express');

const router = express.Router();

const UserCtrl = require('../controllers/users');
const AuthHelper = require('../Helpers/AuthHelpers');

router.get('/users', AuthHelper.VerifyToken, UserCtrl.GetAllUsers);
router.get('/user/:id', AuthHelper.VerifyToken, UserCtrl.GetUser);
router.get(
  '/username/:username',
  AuthHelper.VerifyToken,
  UserCtrl.GetUserByName
);

module.exports = router;
