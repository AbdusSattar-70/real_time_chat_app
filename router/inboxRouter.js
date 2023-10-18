const express = require('express');
const { getInbox } = require('./RouterControllers/inboxController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

const router = express.Router();

router.get('/', decorateHtmlResponse('Inbox'), getInbox);

module.exports = router;