const express = require('express');
const router = express.Router();
const virtual_meeting_controller = require('../controller/virtual_meeting');
const {verifyToken}=require("../middleware/authorization")

router.post('/create', virtual_meeting_controller.create);

router.get('/fetch',verifyToken, virtual_meeting_controller.get);

router.delete('/delete/:id', virtual_meeting_controller.remove);

router.patch('/update/:id', virtual_meeting_controller.update);

module.exports = router