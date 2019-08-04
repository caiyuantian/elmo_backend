"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
var v1 = require('./api/v1');
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.use('/api/v1', v1);
module.exports = router;
