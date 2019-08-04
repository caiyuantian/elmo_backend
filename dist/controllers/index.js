"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./users");
var tweets_1 = require("./tweets");
module.exports = {
    User: new users_1.User(),
    Tweet: new tweets_1.Tweet()
};
