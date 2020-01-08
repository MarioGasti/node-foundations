const express = require('express');
const router = express.Router();

const example = require('./example/example');

router.get('/', example.helloWorld);

module.exports = router;