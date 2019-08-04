var express = require('express');
var router = express.Router();
var User = require('../../controllers').User;
var Tweet = require('../../controllers').Tweet;

import { Request, Response, NextFunction } from 'express';

// list all users list by query parameters {q, page, count}
router.get('/users', async(req:Request, res:Response, next:NextFunction) => {
    try {
        let result = await User.getAllByParams(req.query);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
}); 

// get user detail by id 
router.get('/user/:id', async(req:Request, res:Response, next:NextFunction) => {
    let id = req.params.id;
    try {
        let result = await User.getOneByID(id);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
}); 

// get recent tweets by query parameters {user_id, count}
router.get('/tweets', async(req:Request, res:Response, next:NextFunction) => {
    try {
        let result = await Tweet.getTweets(req.query);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
}); 


module.exports = router;