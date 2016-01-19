//Nettoyer le contenu d'un fichier JSON
var cleanJSON = function (str) {
	return str.replace(/\/\/.*/g, "") //commentaires sur une ligne
		.replace(/\/\*([^\*]|\*(?!\/))*\*\//g, "") //commentaires sur plusieurs lignes
		.replace(/^\s*/, "") //espacements initiaux
		.replace(/\s\s/g, " ") //espacements doubles
		.replace(/[\n\r\u2028\u2029\t]/g, ""); //retours à la ligne et charriot, tabulations
}
	/* usage initial : https://github.com/interfacteur/divers/blob/master/proxies-apis/interfaces-tests/cross-avec-jquery.xdomainrequest.html */

//Éclaircir le contenu d'un fichier .js
var clearJS = function (str) {
	return str.replace(/\/\/.*/g, "") //commentaires sur une ligne
		.replace(/\/\*([^\*]|\*(?!\/))*\*\//g, "") //commentaires sur plusieurs lignes
		.replace(/[\t]/g, " ") //tabulations par un espacement
		.replace(/^\s*/, "") //espacements initiaux
		.replace(/\s\s/g, " "); //espacements doubles
}

