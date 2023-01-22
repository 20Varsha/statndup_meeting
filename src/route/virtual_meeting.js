const express = require('express');
const router = express.Router();
const virtual_meeting_controller = require('../controller/virtual_meeting');

router.post('/create', virtual_meeting_controller.create);

router.get('/fetch', virtual_meeting_controller.get);

router.delete('/delete/:id', virtual_meeting_controller.remove);

router.patch('/update/:id', virtual_meeting_controller.update);

module.exports = router