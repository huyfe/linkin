const express = require('express');
const router = express.Router();
const linkController = require('../app/controllers/LinksController');

router.get('/show-trash', linkController.ShowTrash);
router.get('/:id/', linkController.ShowLinkByID);
router.post('/', linkController.AddLink);
router.put('/:id/update', linkController.UpdateLink);
router.delete('/:id/trash', linkController.TrashLink);
router.patch('/:id/restore', linkController.RestoreLink);
router.delete('/:id/destroy', linkController.DestroyLink);
router.get('/', linkController.ShowAllLinks);

module.exports = router;
