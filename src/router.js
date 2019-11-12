const express = require('express');
const router = express.Router();

const db = require('./db/cloudant');

const verifySignUp = require('../jwt/verifySignUp');

router.get('/news/find', db.find);
router.get('/news/get/:_id', db.get);
router.post('/news/post', db.post);
router.put('/news/put/:_id/:_rev', db.put);
router.delete('/news/delete/:_id/:_rev', db.delete);

router.post('/login', db.login);
router.post('/register', [verifySignUp.checkDuplicatedNameOrEmail], db.registerUser);


module.exports = router;