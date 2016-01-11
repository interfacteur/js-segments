//https://regex101.com
//https://regex101.com/


/* 151213 */



//url cf. https://gist.github.com/dperini/729294 d'après https://mathiasbynens.be/demo/url-regex :
/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
/* inclut ftp */


//e-mail cf. http://so.devilmaycode.it/jquery-validate-e-mail-address-regex/ d'après http://stackoverflow.com/questions/2855865/jquery-regex-validation-of-e-mail-address mis à jour en 1509 :
/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

//a explorer de nouveau pour les e-mails :
//https://fightingforalostcause.net/content/misc/2006/compare-email-regex.php :
	//attention 151213 Updated: 2/3/2012 or nouvelles extensions ?
	//donne emailregex.com comme la meilleure /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
	//mais une PHP a l'air bien meilleure
//http://emailregex.com attention extensions cf. ci-dessu
//http://stackoverflow.com/questions/2855865/jquery-regex-validation-of-e-mail-address
//http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address
//http://www.ex-parrot.com/pdw/Mail-RFC822-Address.html


//à éviter : http://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149


//la "gourmandise" et la réticence :
/.+(?=X)/.exec("abcXdefX")[0] == "abcXdef"
/.+?(?=X)/.exec("abcXdefX")[0] == "abc"


//correspondance vs capture, et référence à un nième groupe via \n
/(?:pomme(,)\spoire)\1/.exec("pomme, poire, cerise, pêche")[0] == "pomme, poire,"; //correspondance
/(?:pomme(,)\spoire)\1/.exec("pomme, poire, cerise, pêche")[1] == ","; //capture
//alors que
/(pomme(,)\spoire)\2/.exec("pomme, poire, cerise, pêche")[0] == "pomme, poire,"; //correspondance
/(pomme(,)\spoire)\2/.exec("pomme, poire, cerise, pêche")[1] == "pomme, poire"; //capture
/(pomme(,)\spoire)\2/.exec("pomme, poire, cerise, pêche")[2] == ","; //capture
//et alors que
/(pomme(,)\spoire\2)/.exec("pomme, poire, cerise, pêche")[0] == "pomme, poire,"; //correspondance
/(pomme(,)\spoire\2)/.exec("pomme, poire, cerise, pêche")[1] == "pomme, poire,"; //capture
/(pomme(,)\spoire\2)/.exec("pomme, poire, cerise, pêche")[2] == ","; //capture


//la capture peut être plus large que la correspondance, et peut être inscrite dans un contexte non capturant :
/^(?=(.*X))abc/.exec("abcXabc"); //["abc", "abcX"]


//la référence à un nième groupe via \n est la référence à la capture effective, et non au mofif : répétition exacte
/^xx([ab]+)xxx\1xx$/.exec("xxaaxxxaaxx")[0] == "xxaaxxxaaxx";
/^xx([ab]+)xxx\1xx$/.exec("xxaaxxxabxx") === null;


//positive lookahead ("suivi de") :
//cf. exemple la "gourmandise" et la réticence


//positive lookbehind ("précédé de") semble passer par exec() ; exemple ; capturer la première chaîne "abc" précédée de X
/^.*?X(abc)/i.exec("abcXABCXaBc"); //["abcXABC", "ABC"]

//il y avait aussi ce test vers 1311 ;
		//expression contextualisee par ce qui precede mais en JavaScript il n'y a pas de lookbehind (?<=) ou (?<!)
		var chaine = "123a456a789a123a456a789a123a456a789a123a456a789a123a456a789";
		//expression non contextualisee
		var exp1 = /a/g;
		var dec1 = chaine.split(exp1);
		//expression contextualisee par ce qui suit : positive lookahead 
		var exp2 = /.(?=1|4|7)/g;
		var dec2 = chaine.split(exp2);var exp3 = /(3|6|9)./g;
		var dec3 = chaine.split(exp3);
		for (var i = 0;i<dec3.length - 1;i++){
		  dec3[i] += dec3[i + 1];
		  dec3.splice(i + 1,1);
		}
		console.log(dec1.length);
		console.log(dec2.length);
		console.log(dec3.length);
		console.log(dec1 == dec2);
		console.log(dec2 == dec3);
		console.log(dec3 == dec1);
		for (var i = 0;i<dec1.length;i++) console.log(dec1[i],"-",dec2[i],"-",dec3[i]," + ",typeof dec1[i],"-",typeof dec2[i],"-",typeof dec3[i]);





//compenser l'absence de l'opérateur AND pour des recherches d'occurrence sans ordre donné :
//http://www.equatorium.net/e1/ou-regexp-desordre.html





//les sauts de ligne
/*
29 octobre 2013 cf. http://fr.wikipedia.org/wiki/Fin_de_ligne

x0A		(\n)	LF				Unix, Mac OS X		LF sur terminal == CRLF sur imprimante	langage C

x0D		(\r)	CR				Mac OS Classic

x0Dx0A	(\r\n)	CRLF			Windows				imprimante	communication réseau	MS-DOS

Unicode pour éviter ambiguité :  le séparateur de paragraphes (PS = 2029 base 16) et le séparateur de ligne (LS = 2028 base 16).
*/



//note 1311 sur match contextualisable à partir de la lecture du nom d'un fichier via <input type="file"
$("[type='file']").on({
	"change" : function(){
		var www =  $(this).val();

		//OK FF Win
		//OK GC Win
		console.log(www.match(/^(?:(?!.+(?:(?=fakepath)))|.+fakepath(?:\\|\/))(.+)/)[1] == www.split(/fakepath./).reverse()[0]);


		console.log(www.match(/^(?:(?!.+(?:(?=fakepath)))|.+fakepath(?:\\|\/))(.+)/)[1]); //ok mais il y a plus simple hormis split().reverse() ?


		console.log(www.match(/(?:fakepath(?:\\|\/))(.+)/)[1]); //OK pour GC mais par pour FF
		console.log(www.match(/(?:fakepath(?:\\|\/))?(.+)/)[1]); //OK pour FF mais par pour GC (gourmandise)



		return console.log(www.split(/fakepath./).reverse()[0]); //OK

	}
});

