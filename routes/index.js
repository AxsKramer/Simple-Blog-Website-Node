const express = require('express');
const router = express.Router();
const {getPosts, gotoCompose, postCompose, gotoContact, gotoAbout, getPostById} = require('../controllers/postController');

router.get('/', getPosts);
router.get('/compose', gotoCompose);
router.post('/compose', postCompose);
router.get('/posts/:postId', getPostById);
router.get('/about', gotoAbout);
router.get('/contact', gotoContact);

module.exports = router;