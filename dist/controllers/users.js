"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var twitterApi_1 = require("./twitterApi");
var User = (function () {
    function User() {
        var _this = this;
        this.apiInstance = new twitterApi_1.TwitterApi();
        this.getOneByID = function (id) {
            return new Promise(function (resolve, reject) {
                if (!id) {
                    reject({ success: false, result: "error parameter" });
                }
                var url = config_1.default.UserShowURL + "?user_id=" + id;
                console.log("request url:" + url);
                _this.apiInstance.api(url)
                    .then(function (data) {
                    return resolve({ success: true, result: data });
                })
                    .catch(function (error) { return reject({ success: false, result: error }); });
            });
        };
        this.getAllByParams = function (query) {
            return new Promise(function (resolve, reject) {
                if (!_this.instanceOfQueries(query)) {
                    reject({ success: false, result: "error parameter" });
                }
                var q = query["q"], page = query.page, count = query.count, queryStr = '';
                if (q) {
                    queryStr = "?q=" + q;
                }
                else {
                    reject({ success: false, result: "error parameter" });
                }
                if (page) {
                    queryStr = queryStr + "&page=" + page;
                }
                if (count) {
                    queryStr = queryStr + "&count=" + count;
                }
                var url = config_1.default.UserSearchURL + queryStr;
                _this.apiInstance.api(url)
                    .then(function (data) {
                    resolve({ success: true, result: data });
                })
                    .catch(function (error) { return reject({ success: false, result: error }); });
            });
        };
    }
    User.prototype.instanceOfQueries = function (toBeDetermined) {
        if (toBeDetermined.q) {
            return true;
        }
        return false;
    };
    return User;
}());
exports.User = User;
