const express = require('express');

const router = express.Router();

const MessageCtrl = require('../controllers/message');
const AuthHelper = require('../Helpers/AuthHelpers');

router.get(
  '/chat-messages/:sender_Id/:receiver_Id',
  AuthHelper.VerifyToken,
  MessageCtrl.GetAllMessages
);

router.post(
  '/chat-messages/:sender_Id/:receiver_Id',
  AuthHelper.VerifyToken,
  MessageCtrl.SendMessage
);

module.exports = router;
