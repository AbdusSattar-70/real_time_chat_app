const express = require('express');
const { getLogin } = require('./RouterControllers/loginController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

const router = express.Router();

router.get('/', decorateHtmlResponse('Login'), getLogin);

module.exports = router;