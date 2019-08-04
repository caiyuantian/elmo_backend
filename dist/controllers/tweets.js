"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var twitterApi_1 = require("./twitterApi");
var Tweet = (function () {
    function Tweet() {
        var _this = this;
        this.apiInstance = new twitterApi_1.TwitterApi();
        this.getTweets = function (tweetsQuery) {
            return new Promise(function (resolve, reject) {
                if (!_this.instanceOfITweetsQuery(tweetsQuery)) {
                    reject({ success: false, result: "error parameter" });
                }
                var user_id = tweetsQuery.user_id, count = tweetsQuery.count, tweetsQueryStr = '';
                if (user_id) {
                    tweetsQueryStr = "?user_id=" + user_id;
                }
                else {
                    reject({ success: false, result: "error parameter" });
                }
                if (count) {
                    tweetsQueryStr = tweetsQueryStr + "&count=" + count;
                }
                var url = config_1.default.GetTweetsURL + tweetsQueryStr;
                _this.apiInstance.api(url)
                    .then(function (data) {
                    resolve({ success: true, result: data });
                })
                    .catch(function (error) { return reject({ success: false, result: error }); });
            });
        };
    }
    Tweet.prototype.instanceOfITweetsQuery = function (toBeDetermined) {
        if (toBeDetermined.user_id) {
            return true;
        }
        return false;
    };
    return Tweet;
}());
exports.Tweet = Tweet;
