const express = require('express');
const router = express.Router();
const timelineController = require('../app/controllers/TimelinesController');

// CRUD
router.get('/', timelineController.ShowwAllTimeline);
router.post('/add-post', timelineController.CreateTimeline);
router.put('/edit-post/:id', timelineController.UpdateTimeline);
router.delete('/delete-post/:id', timelineController.DeleteTimeline)

module.exports = router;
