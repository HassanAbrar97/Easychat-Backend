const express = require('express');

const router = express.Router();

const FriendCtrl = require('../controllers/friends');
const AuthHelper = require('../Helpers/AuthHelpers');

router.post('/follow-user', AuthHelper.VerifyToken, FriendCtrl.FollowUser);
router.post('/unfollow-user', AuthHelper.VerifyToken, FriendCtrl.UnFollowUser);

module.exports = router;
