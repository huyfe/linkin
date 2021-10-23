const express = require('express');
const router = express.Router();
const timelineController = require('../app/controllers/TimelinesController');

router.get('/', timelineController.ShowwAllTimeline);

module.exports = router;
