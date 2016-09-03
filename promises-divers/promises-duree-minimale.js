//durée minimale d'une promesse, Interfacteur



//Avec un délai supplémentaire
function promettreMinimum (clb, dur) {
	"use strict";
	var debut = new Date();
	promettreMinimum.follow = promettreMinimum.follow || function (eta) {
		var duree = new Date() - debut;
		return new Date() - debut < dur ?
			new Promise(function (resolve) {
				setTimeout(function () {
					resolve(eta + " delai sup. " + (dur - duree));
				}, dur - duree);
			})
			:
			eta;
	};
	return new Promise(clb)
	.then(promettreMinimum.follow, promettreMinimum.follow);
}

promettreMinimum(function (resolve, reject) {
	setTimeout(function() {
		var etat = Math.round(Math.random() * 3) == 3 ? "rejected" : "fulfilled";
		console.log("promesse", etat);
		if (etat == "fulfilled")
			resolve(etat);
		else
			reject(etat);
	}, Math.round(Math.random() * 2750));
}, 2000)
.then(function (eta) { console.log("ok", eta); });


/*
promesse rejected
ok rejected

promesse fulfilled
ok fulfilled delai sup. 27

promesse fulfilled
ok fulfilled delai sup. 949

promesse fulfilled
ok fulfilled

promesse fulfilled
ok fulfilled

promesse fulfilled
ok fulfilled delai sup. 290

promesse fulfilled
ok fulfilled

promesse fulfilled
ok fulfilled delai sup. 508

promesse fulfilled
ok fulfilled delai sup. 1874

promesse fulfilled
ok fulfilled delai sup. 510

promesse fulfilled
ok fulfilled

promesse fulfilled
ok fulfilled delai sup. 130

promesse fulfilled
ok fulfilled

promesse fulfilled
ok fulfilled

promesse fulfilled
ok fulfilled delai sup. 171

promesse fulfilled
ok fulfilled

promesse rejected
ok rejected

promesse rejected
ok rejected delai sup. 1836
*/





/*
SANS REJET
*/

//Avec un délai supplémentaire (sans rejet)
function promettreMinimum (clb, dur) {
	"use strict";
	var debut = new Date();
	return new Promise(clb)
	.then(function() {
		var duree = new Date() - debut;
		return new Date() - debut < dur ?
			new Promise(function (resolve) {
				setTimeout(resolve, dur - duree);
			})
			:
			true;
});	}

promettreMinimum(function (resolve) {
	setTimeout(function() {
		console.log("promesse");
		resolve();
	}, Math.round(Math.random() * 2750));
}, 2000)
.then(function () { console.log("ok"); });


//Avec relance de la fonction en promesse autant de fois que nécessaire (sans rejet)
function promettreMinimum (clb, dur) {
	"use strict";
	promettreMinimum.debut = promettreMinimum.debut || new Date();
	return new Date() - promettreMinimum.debut < dur ?
		new Promise(clb)
		.then(function () {
			return promettreMinimum(clb, dur);
		})
		:
		delete promettreMinimum.debut;
}

promettreMinimum(function (resolve) {
	setTimeout(function() {
		console.log("promesse");
		resolve();
	}, Math.round(Math.random() * 2750));
}, 2000)
.then(function () { console.log("ok"); });


//Avec relance de la fonction en promesse, mais aucune certitude sur la durée globale : il faudrait boucler (cf. solution précédente) (sans rejet)
function promettreMinimum (clb, dur) {
	"use strict";
	var debut = new Date();
	return new Promise(clb)
	.then(function() {
		return new Date() - debut < dur ?
			new Promise(clb)
			:
			true;
});	}

promettreMinimum(function (resolve) {
	setTimeout(function() {
		console.log("promesse");
		resolve();
	}, Math.round(Math.random() * 2750));
}, 2000)
.then(function () { console.log("ok"); });


//Avec délai supplémentaire et relance de la fonction en promesse (càd deux rallonges dont l'une assure le délai minimal) (sans rejet)
function promettreMinimum (clb, dur) {
	"use strict";
	var debut = new Date();
	return new Promise(clb)
	.then(function() {
		var duree = new Date() - debut;
		return duree < dur ?
			new Promise(function(resolve) {
				setTimeout(function() {
					console.log("rallonge de " + (dur - duree));
					clb(resolve);
				}, dur - duree);
			})
			:
			true;
});	}

promettreMinimum(function (resolve) {
	setTimeout(function() {
		console.log("promesse");
		resolve();
	}, Math.round(Math.random() * 2750));
}, 2000)
.then(function () { console.log("ok"); });








//Avec structure intégrée, duree paramétrable (sans rejet)
function promettre (dur) {
	"use strict";
	var debut = new Date();
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve();
		}, Math.round(Math.random() * (dur + dur * 3 / 8)));
	})
	.then(function() {
		var duree = new Date() - debut;
		return duree < dur ?
			new Promise(function(resolve) {
				setTimeout(function() {
					console.log("rallonge de " + (dur - duree));
					resolve();
				}, dur - duree);
			})
			:
			true;
});	}

promettre(2000)
.then(function () { console.log("ok"); });


//Avec structure intégrée, durée de 2000 ms (sans rejet)
function promettre () {
	"use strict";
	var debut = new Date();
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve();
		}, Math.round(Math.random() * 2750));
	})
	.then(function() {
		var duree = new Date() - debut;
		return duree < 2000 ?
			new Promise(function(resolve) {
				setTimeout(function() {
					console.log("rallonge de " + (2000 - duree));
					resolve();
				}, 2000 - duree);
			})
			:
			true;
});	}

promettre()
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











rallonge de 1576
ok

rallonge de 1003
ok

rallonge de 1488
ok

rallonge de 1723
ok

rallonge de 233
ok

rallonge de 1727
ok

ok

*/