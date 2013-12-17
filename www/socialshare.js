
// (c) 2011-2013 Jesse MacFadyen,  Adobe Systems Incorporated

var exec = require('cordova/exec');

module.exports = {

    shareStatus: function (msg) {
        var options = { "message": msg, "shareType": 0 }; // 0 == status
        exec(null, null, "SocialShare", "share", [options]);
    },

    shareLink: function (title, url, msg) {
        var options = { "message": msg, "title": title, "url": url, "shareType": 1 }; // 1 == link
        exec(null, null, "SocialShare", "share", [options]);
    }
}