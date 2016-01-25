//Nettoyer un contenu JSON et le mettre sur une ligne
var cleanJSON = function (str) {
	return str.replace(/\/\/.*/g, "") //sans les commentaires sur une ligne
		.replace(/\/\*([^\*]|\*(?!\/))*\*\//g, "") //sans les commentaires sur plusieurs lignes
		.replace(/^\s*/, "") //sans les espacements initiaux (dont retours)
		.replace(/[\f\n\r\u2028\u2029\t\v]/g, "") //sans les retours à la page, à la ligne et charriot, tabulations horizontales et verticales
		.replace(/\s\s+/g, " "); //remplacer les espacements multiples (dont retours) par un espacement
}
	/* usage initial : https://github.com/interfacteur/divers/blob/master/proxies-apis/interfaces-tests/cross-avec-jquery.xdomainrequest.html */

//Éclaircir un contenu JavaScript
var clearJS = function (str) {
	return str.replace(/\/\/.*/g, "") //sans les commentaires sur une ligne
		.replace(/\/\*([^\*]|\*(?!\/))*\*\//g, "") //sans les commentaires sur plusieurs lignes
		.replace(/^\s*/, "") //sans les espacements initiaux (dont retours)
		.replace(/[\t\v]/g, " ") //remplacer les tabulations horizontales et verticales par un espacement
		.replace(/\x20{2,}/g, " "); //remplacer les espacements multiples par un espacement
}

//Éclaircir un contenu JavaScript et le mettre sur une ligne
var clearLineJS = function (str) {
	return str.replace(/\/\/.*/g, "") //sans les commentaires sur une ligne
		.replace(/\/\*([^\*]|\*(?!\/))*\*\//g, "") //sans les commentaires sur plusieurs lignes
		.replace(/^\s*/, "") //sans les espacements initiaux (dont retours)
		.replace(/[\t\v]/g, " ") //remplacer les tabulations horizontales et verticales par un espacement
		.replace(/[\f\n\r\u2028\u2029]/g, "") //sans les retours à la page, à la ligne et charriot
		.replace(/\x20{2,}/g, " "); //remplacer les espacements multiples par un espacement
}

//Mettre sur une ligne
var uniLine = function (str) {
	return str.replace(/[\f\n\r\u2028\u2029]/g, ""); //sans les retours à la page, à la ligne et charriot
}

