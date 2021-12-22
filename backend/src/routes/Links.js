const express = require('express');
const router = express.Router();
const linkController = require('../app/controllers/LinksController');

router.get('/show-trash', linkController.ShowTrash);
router.get('/:id/', linkController.ShowLinkByID);
router.post('/', linkController.AddLink);
router.patch('/:id', linkController.UpdateLink);
router.delete('/:id/trash', linkController.TrashLink);
router.patch('/:id/restore', linkController.RestoreLink);
router.delete('/:id/destroy', linkController.DestroyLink);
router.get('/', linkController.ShowAllLinks);
router.get('/link-user/:id_author', linkController.ShowAllByUser);
router.get('/limit/:id', linkController.ShowAllLinksLimit);
router.patch('/:id/pin', linkController.UpdatePin);

module.exports = router;
