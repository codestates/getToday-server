var express = require('express');
var router = express.Router();

const usersController = require('../controller/users');

router.post('/addSchedule', usersController.AddSchedule);

router.post('/removeSchedule', usersController.RemoveSchedule);

// router.get('/schedules', usersController.getSchedules);

module.exports = router;