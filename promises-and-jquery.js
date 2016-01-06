//Promesses et jQuery : encapsulant jQuery, ou le contraire


/*
1) Sont équivalents :
*/

$.getJSON(url)
.then(function (data) { //then comme fonction jQuery ou ES6 ?
	console.log(data);
});


(function () {
	return $.getJSON(url)
})()
.then(function (v) {
	console.log(v);
});


Promise.resolve($.getJSON(url))
.then(function (v) {
	console.log(v);
});


new Promise(function (rs) {
	$.getJSON(url, function (got) { rs(got); })
})
.then(function (v) {
	console.log(v);
});


Promise.all([
	$.getJSON(url)
])
.then(function (v) {
	console.log(v[0]);
});



/*
2) Dans des groupes de promesses :
*/
function querir (callback) {
	return new Promise (function (resolve) {
		var xhr = new XMLHttpRequest();
		xhr.onload = function() {
			if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 0)
				callback(xhr.response, resolve);
		};
		xhr.open("GET",url,true);
		xhr.send(null);
}); }



//2.1 OK récupération des responseText ou JSON etc.
Promise.all([
	$.ajax({
		url: url,
		success: function (got, status, xhr) {
			console.log("github 1");
			console.log(got);
			console.log("status : ", status);
			console.log("xhr : ", xhr);
			return "aa";
		}
	}),
	$.ajax({
		url: url,
		dataType: "json",
		success: function (got, a, b) {
			console.log("github 2");
		}
	})
])
.then(function (v) {
	console.log(v); //uniquement les JSON (got) : l'argument est le tableau des got
	console.log(v.length);
	console.log(v[0]);
});



//2.2 OK retour manuel
Promise.all([
	querir(function (got, resolve) {
		console.log(JSON.stringify(got).substring(0, 100));
		resolve(got);
	}),
	querir(function (got, resolve) {
		console.log(JSON.stringify(got).substring(0, 100));
		resolve(got);
	})
])
.then(function (v) {
	console.log(v); //l'argument est le tableau des valeurs
	console.log(v.length);
	console.log(v[0]);
});



//2.3 OK récupération des trois paramètres des fonctions gestionnaires (en tout cas de success) dans un tableau
$.when(
	$.ajax({
		url: url,
		success: function (got, status, xhr) {
			console.log("github 1");
			console.log(got);
			console.log("status : ", status);
			console.log("xhr : ", xhr);
			return "aa";
		}
	}),
	$.ajax({
		url: url,
		success: function (got, a, b) {
			console.log("github 2");
		}
	})
)
.then(function (a, b, c, d, e, f) { //un argument par tableau des trois paramètres des fonctions gestionnaires
	console.log("when");
	console.log(a[1]);
	console.log(b);
	a.forEach(function (r) {
		console.log(r);
	})
});


//2.4 ne marche pas
$.when(
	$(querir(function (r) {
		console.log(1);
		r(1);
	})),
	querir(function (r) {
		console.log(2);
		r(2);
	})
)
.then(function (a, b, c, d, e, f) {
	console.log(a);
	console.log(b);
});

