const express = require('express');
const router = express.Router();
const user_controller = require("../../src/controller/user");

router.get('/fetch', user_controller.get);

module.exports = router