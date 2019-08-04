var express = require('express');
var router = express.Router();
var v1 = require('./api/v1');

import { Request, Response, NextFunction } from 'express';

/* GET home page. */
router.get('/', function(req:Request, res:Response, next:NextFunction) {
  res.render('index', { title: 'Express' });
});

router.use('/api/v1', v1);

module.exports = router;
