//Nettoyer le contenu d'un fichier JSON
var cleanJSON = function (str) {
	return str.replace(/\/\/.*/g, "") //commentaires sur une ligne
		.replace(/\/\*([^\*]|\*(?!\/))*\*\//g, "") //commentaires sur plusieurs lignes
		.replace(/^\s*/, "") //espacements initiaux (dont retours)
		.replace(/\s\s+/g, " ") //espacements multiples (dont retours) par un espacement
		.replace(/[\f\n\r\u2028\u2029\t\v]/g, ""); //retours à la page, à la ligne et charriot, tabulations horizontales et verticales
}
	/* usage initial : https://github.com/interfacteur/divers/blob/master/proxies-apis/interfaces-tests/cross-avec-jquery.xdomainrequest.html */

//Éclaircir le contenu d'un fichier .js
var clearJS = function (str) {
	return str.replace(/\/\/.*/g, "") //commentaires sur une ligne
		.replace(/\/\*([^\*]|\*(?!\/))*\*\//g, "") //commentaires sur plusieurs lignes
		.replace(/[\t\v]/g, " ") //tabulations horizontales et verticales par un espacement
		.replace(/^\s*/, "") //espacements initiaux (dont retours)
		.replace(/\x20\x20+/g, " "); //espacements multiples par un espacement
}

