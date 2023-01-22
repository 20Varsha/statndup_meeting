const express = require('express');
const router = express.Router()
const virtual_meeting = require('../route/virtual_meeting')
const health_route=require('../route/health')
const users_route=require('../route/users')

router.use('/virtual_meeting', virtual_meeting)
router.use('/backend/health_check', health_route)
router.use('/users', users_route)

module.exports=router
