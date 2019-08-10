//fonction async récursive déterminant une dimension d'éléments du DOM (via jQuery, une fois rendus)

//et en en transmettant la valeur aux styles via les variables CSS - extrait d'un projet de stage


const sizeVariables = [], //calculer la dimension d'éléments donnés au chargement de la page

  sizeWatch = async (sizeAxe, $elem, sizeVar = true, margin = false) => //$elem : element jQuery via identifiant
	{
		let limit = 0,
			size = 0;

		while (size < 10 && limit++ < 10)
		{
			await new Promise(resolve => setTimeout(resolve, 100)); //delay() de lodash ?
			size = $elem[sizeAxe](margin);
		}
		/* variante syntaxiquement taquine
		while (size < 10 && limit++ < 10)
			await new Promise(resolve => setTimeout(() => (size = $elem[sizeAxe](margin)) === size && resolve()
		, 100)); */
		size = Math.round(size);
		if (size === 0)
			return false;
		sizeVar
		&& sizeVariables.push(`--${$elem.attr('id')}: ${size}px;`);
		return size;
	},
	viewWidth = [0, 0, 0, 0, 0, 0];


Promise.all([

	sizeWatch('outerHeight', $('#fixedHead_tbody')),

	sizeWatch('outerHeight', $('#hiddenHead_thead')),


	sizeWatch('outerWidth', $('#hiddenHead'), false) //tableau
		.then(n => viewWidth[2] = n),

	sizeWatch('outerWidth', $('#minWidth1'), false) //footer gauche
		.then(n => viewWidth[0] = n),
/*
	sizeWatch('outerWidth', $('#minWidth2'), false) //footer liste droite
		.then(n => viewWidth[1] = n)
*/
])
.then(() =>
{
	sizeVariables.push('--minWidth: ' + (viewWidth[2] > viewWidth[0] + viewWidth[1] ? viewWidth[2] : viewWidth[0] + viewWidth[1]) + 'px');
	$el.body.attr('style', ($el.body.attr('style') || '') + ';' + sizeVariables.join('')) //rendre disponible la valeur sous la forme de variable CSS
	.addClass('presetValues')
});



/* EXEMPLE CÔTÉ CSS : *////////////////////////////////////////////////////////////////////////////////

.finances.sessions main {
	min-width: 1130px; /* valeur probable - to do : à actualiser selon l'évolution de la page en dév. */
}

.presetValues .finances main {
	min-width: var(--minWidth); /* valeur calculée */
}
