const express = require('express');
const router = express.Router();

const example = require('./example/example');

router.get('/', example.helloWorld);
router.post('/post', example.helloWorldPost);

module.exports = router;