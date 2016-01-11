cf ____re.js 1113 :


verifmail
  //identification des contenus commentes
  contenusCom = /(<!--)((?:[^-]|-(?!-))*)(-->)/g;

  //identification des commentaires avec saut de ligne - afin de ne pas y inserer le marquage saut de ligne
  commentairesSauts = /<!--(([^-]|-(?!-))*\x0A([^-]|-(?!-))*)+-->/g;

  //identification des cellules fermees (ne pouvant contenir eventuellement que des commentaires)
  celluleFermee = /(<td[^>.]*>(?:<!--(?:[^-]|-(?!-))*-->)*<\/td>)/g;

  //identification des cellules vides (ne pouvant contenir que des espacements, et eventuellement des commentaires)
  celluleVide = /(<td[^>.]*>(?:(?:<!--(?:[^-]|-(?!-))*-->)*\s(?:<!--(?:[^-]|-(?!-))*-->)*)+<\/td>)/g;

  //restitution des tableaux imbriques
  tableau = [];
  tableau[0] = /(.)(&lt;table[^>.]*&gt;)/g;
  tableau[1] = /(&lt;\/table&gt;)(.|\x0A)/g; //cf. http://www.regular-expressions.info/dot.html


?  //identification des balises commentees potentiellement precedees et suivi d'espacements
  balisesComExp = /\s*<!--([^-]|-(->))*-->\s*/g;






ce qui suit : attention à la non capture

commentaire (à verifier)
/<!--(?:[^-]|-(?!-))*-->/

balise fermee (à tester)
/<[a-zA-Z]+[^>.]*>(?:<!--(?:[^-]|-(?!-))*-->)*<\/[a-zA-Z]+>/

balise fermee avec commentaire(s) (à tester)
/<[a-zA-Z]+[^>.]*>(?:<!--(?:[^-]|-(?!-))*-->)+<\/[a-zA-Z]+>/




balises vides (à tester) (* principe cf.var schemas = []; )
/<[a-zA-Z]+[^>.]*>((<!--([^-]|-(?!-))*-->)*\s+(<!--([^-]|-(?!-))*-->)*)+<\/[a-zA-Z]+>/




commentaires avec saut de ligne
/<!--(?:([^-]|-(?!-))*\x0A([^-]|-(?!-))*)+-->/g;



sauf premier sauf dernier
var abc = "A0000A0000Z0000A0000ZA0000Z0000Z";
var exp = [];
exp[0] = /(.)A/g;
exp[1] = /Z(.)/g;
var bb = abc.replace(exp[0],function($0,$1){
  return $1 + "B";
}).replace(exp[1],function($0,$1){
  return "Y" + $1;
});





var schemas = [];
schemas[0] = "yyyyyyyyyayyyyyyyyy";
schemas[1] = "yyyyyyyyyaayyyyyyyyy";
schemas[2] = "yyyyyyyyyazzzzzzzzzzzzzyyyyyyyyy";
schemas[3] = "yyyyyyyyyzzzzzzzazzzzzzyyyyyyyyy";
schemas[4] = "yyyyyyyyyzzzzzzzzzzzzzayyyyyyyyy";
schemas[5] = "yyyyyyyyyzzzzzzzazzzzzzayyyyyyyyy";
schemas[6] = "yyyyyyyyyazzzzzzzazzzzzzayyyyyyyyy";
schemas[7] = "yyyyyyyyyaazzzzzzzazzzzzzayyyyyyyyy";
schemas[8] = "yyyyyyyyyaazzzzzzzazzzzzzaaaayyyyyyyyy";
schemas[9] = "yyyyyyyyyyyyyyyyyy"; //nok (cellule fermmee simple)
schemas[10] = "yyyyyyyyyzzzzzzzzzzzzzyyyyyyyyy"; //nok (cellule fermee commentaires)


var schema = /(?:z*a+z*)+/;


for (var i = 0;i<schemas.length;i++) console.log(i,"++",schemas[i].split(schema).join());






