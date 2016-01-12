
/*
https://esdiscuss.org/topic/promise-returning-delay-function

https://mail.mozilla.org/pipermail/es-discuss/2014-September/039132.html
*/

// https://gist.github.com/xieranmaya/a4fdc69a1c93abfdf95d :

Promise.prototype.delay = function(duration) { //by xieranmaya
	return this.then(function(value) {
		return new Promise(function(resolve) {
			setTimeout(function() {
				resolve(value)
			}, duration)
		})
	}, function(reason) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				reject(reason)
			}, duration)
		})
	})
}