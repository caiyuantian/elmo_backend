"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var OAuth = require('OAuth');
var TwitterApi = (function () {
    function TwitterApi() {
        var _this = this;
        this.twitterKey = config_1.default.CustomerKey;
        this.twitterSecret = config_1.default.CustomerSecret;
        this.token = config_1.default.Token;
        this.secret = config_1.default.TokenSecret;
        this.api = function (request) {
            return new Promise(function (resolve, reject) {
                var oauth = new OAuth.OAuth('https://api.twitter.com/oauth/request_token', 'https://api.twitter.com/oauth/access_token', _this.twitterKey, _this.twitterSecret, '1.0', null, 'HMAC-SHA1');
                oauth.get(request, _this.token, _this.secret, function (error, data) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(JSON.parse(data));
                    }
                });
            });
        };
    }
    return TwitterApi;
}());
exports.TwitterApi = TwitterApi;
