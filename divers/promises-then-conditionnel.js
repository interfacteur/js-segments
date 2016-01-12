//études pour rendre conditionnelle la méthode .then()


function promettre (id) {
	var identifiant, hasard;
	return ! promettre[id] ?
		(identifiant = "a" + new Date().getTime() + Math.round(Math.random() * 100000))
		&& (promettre[identifiant] = true)
		&& (hasard = Math.round(Math.random()) + 1)
		&& new Promise(function(resolve) {
			setTimeout(function() {
				console.log("résolution", identifiant);
				resolve(identifiant);
			}, 1000);
		})
		[hasard == 1 ? "catch" : "then"]
		(hasard == 1 ? function(id){ delete promettre[id]; return id; } : promettre)
		:
		console.log("then", id)
		&& (Math.round(Math.random()) == 0) ?
			promettre(id)
			:
			delete promettre[id]
			&& id;
}

promettre()
.then(function (id) { console.log("fin", id); });
promettre()
.then(function (id) { console.log("fin", id); });



var x = Math.round(Math.random());

new Promise(function (resolve) { resolve(); })
[x == 1 ? "then" : "catch"](function () { console.log("then 1"); })
.then(function () { console.log("fin 1"); });

Promise.prototype.nothing = function(){ return Promise.resolve(); }
new Promise(function (resolve) { resolve(); })
[x == 1 ? "then" : "nothing"](function () { console.log("then 2"); })
.then(function () { console.log("fin 2"); });


new Promise(function (resolve) { resolve(); })
.then(function () { x == 1 && console.log("then 3")})
.then(function () { console.log("fin 3"); });



/* function promettre (ran) {
	var rn;
	return ! promettre[ran] ?
		(rn = "a" + Math.round(Math.random() * 10000))
		&& (promettre[rn] = true)
		&& new Promise(function(resolve) {
			setTimeout(function() {
				console.log("résolution 0", rn);
				resolve(rn);
			}, 1000);
		})
		.then(promettre)
		:
		console.log("then 0", ran)
		&& (Math.round(Math.random()) == 0) ?
			promettre(ran)
			:
			delete promettre[ran]
			&& ran;
}
*/