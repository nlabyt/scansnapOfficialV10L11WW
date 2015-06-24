/*global cordova, module*/
module.exports = {
	greet: function (name, successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "Scansnap", "greet", [name]);
	},
	search: function (name, successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "Scansnap", "search", [name]);
	},
	scan: function (name, successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "Scansnap", "scan", [name]);
	}
};