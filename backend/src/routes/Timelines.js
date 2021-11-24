const express = require('express');
const router = express.Router();
const timelineController = require('../app/controllers/TimelinesController');

// CRUD
router.get('/', timelineController.ShowwAllTimeline);
router.post('/add-post', timelineController.CreateTimeline);
router.get('/detail-post/:id', timelineController.DetailTimeline);
router.put('/edit-post/:id', timelineController.UpdateTimeline);
router.delete('/delete-post/:id', timelineController.DeleteTimeline)

// ẨN & HIỆN 
router.get('/showhide-post', timelineController.ShowHideTimeline)
router.delete('/hide-post/:id', timelineController.HideTimeline);
router.patch('/unhide-post/:id', timelineController.UnhideTimeline);

// Hiển thị bài viết theo nhóm
router.get('/group-post/:id_foreign', timelineController.ShowPostByGroupTimeline);
// Hiển thị bài viết theo user
router.get('/user-post/:id_foreign', timelineController.ShowPostByUserTimeline);


module.exports = router;
