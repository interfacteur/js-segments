//duree minimale d'une promesse, Interfacteur


//durée de 2000 ms :
function promettre () {
	return ! promettre.debut ?
		(promettre.debut = new Date())
		&& new Promise(function(resolve) {
			setTimeout(function() {
				resolve();
			}, Math.round(Math.random() * 2500) + 250);
		})
		.then(promettre)
		:
		(promettre.duree = new Date() - promettre.debut)
		&& delete promettre.debut
		&& promettre.duree < 2000 ?
			new Promise(function(resolve) {
				setTimeout(function() {
					console.log("rallonge de " + (2000 - promettre.duree));
					resolve();
				}, 2000 - promettre.duree);
			})
			:
			true;
}

promettre()
.then(function () { console.log("ok"); });


//duree paramétrable :
function promettre (duree) {
	return ! promettre.debut ?
		(promettre.debut = new Date())
		&& new Promise(function(resolve) {
			setTimeout(function() {
				resolve();
			}, Math.round(Math.random() * (duree + 500)) + 250);
		})
		.then(function() { return promettre(duree); })
		:
		(promettre.duree = new Date() - promettre.debut)
		&& delete promettre.debut
		&& promettre.duree < duree ?
			new Promise(function(resolve) {
				setTimeout(function() {
					console.log("rallonge de " + (duree - promettre.duree));
					resolve();
				}, duree - promettre.duree);
			})
			:
			true;
}

promettre(2000)
.then(function () { console.log("ok"); });





/*
rallonge de 643
ok

rallonge de 1421
ok

rallonge de 713
ok

rallonge de 1167
ok

ok

ok

rallonge de 567
ok
*/