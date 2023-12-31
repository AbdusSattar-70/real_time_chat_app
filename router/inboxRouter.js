// external imports
const express = require('express');

// internal imports
const { getInbox } = require('./RouterControllers/inboxController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const { checkLogin } = require('../middlewares/common/checkLogin');

const router = express.Router();

// inbox page
router.get('/', decorateHtmlResponse('Inbox'), checkLogin, getInbox);

module.exports = router;
