const express = require('express');

const router = express.Router();

//import controllers:
const postController = require('../controllers/post');

/**
 * [GET] : /
 */
router.get('/', postController.getPosts);

/**
 * [GET] : /:_id
 */

router.get('/:_id', postController.getPostBy);

/**
 * [POST]: /create
 */
router.post('/add', postController.createPost);

/**
 * [DELETE]: /remove/:_id
 */
router.delete('/remove/:_id', postController.deletePostBy);

/**
 * [PUT]: /:_id
 */

router.put('/:_id', postController.updatePost);

module.exports = router;