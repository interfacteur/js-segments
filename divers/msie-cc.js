/* NE FONCTIONNE PLUS AVEC MSIE 11
 
	sauf avec <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
	tout en veillant en ce cas très attentivement à tous les impacts possibles
	dont le fait de ne pas rétrograder MSIE 10
	
	nota bene : une valeur plus classique de cette meta
	<meta http-equiv="X-UA-Compatible" content="IE=Edge;chrome=1">
	permet d'ajuster la version déclarée de MSIE à sa version véritable, et d'être "frame" pour GC
	
	Les commentaires conditionnels <!--[if IE ]><![endif]--> ne sont plus reconnus à partir de MSIE 10
	et resent donc inutiles si l'on avait pensé ajuster ainsi la meta
	
	Il reste possible d'établir un moyen terme dans ces décalages :
	https://github.com/interfacteur/utiles/blob/master/msie.classique.html */


//Pour toutes les versions de MSIE inférieures à 11 :
//instancier une variable à 0, ou si IE, à la valeur de la version de IE

var msie = 0 /*@cc_on + parseInt(navigator.userAgent.toLowerCase().split("msie")[1]) @*/;

/* INFO : http://msdn.microsoft.com/fr-fr/library/8ka90k2e%28v=vs.94%29.aspx */

//Verifier si version de IE inferieure a l'argument 'zv'

function delimiter(zv){
	return 1 / (msie - 1) > 1 / (parseInt(zv) - 1);
}

//Exemple :

function etc(){
	if (delimiter(8)) return alert("Navigateur insuffisant, d\xE9sol\xE9 de ne pouvoir vous donner satisfaction."); //lt IE 8
}

//En complement pour la preparation de methodes telles que methodes[normes]() 

var normes = Math.ceil(Math.abs(msie - 8) / (Math.abs(msie - 8) + 1)); //pour IE 8 : 0 ; sinon : 1

