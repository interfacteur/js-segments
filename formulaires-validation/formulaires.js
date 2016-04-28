"use strict";



var parent = "p";

/*
	attribut data-action du formulaire : fonction pour le soumettre (attention au scope ; éventuellement espace de nom ?)
	cf. window[instance.action]();
*/

/* to do : Check.init tableau à deux valeurs */




/*
MDN
mes notes pour… cf. Github
PubMod
*/



/* Affichage des erreurs via des "plugin" jQuery ---- ---- ---- ---- ---- ---- ---- ---- */

jQuery.fn.evaluate = function(check, trig) {
	this.data("check", check)
	.data("parent").removeClass("valid error")
	.addClass(check ? "valid" : "error");
	trig
	&& ! check
	&& this.focus();
};
jQuery.fn.associate = function () { //associer à un champ sa méthode de validation et son bloc parent
	var attr = this.attr('pattern'), //http://stackoverflow.com/questions/1318076/jquery-hasattr-checking-to-see-if-there-is-an-attribute-on-an-element :
		pattern = typeof attr !== typeof undefined && attr !== false;
	this.data("generic", this.is(":required") ? ((! pattern) ? "require" : "requirePattern") : "pattern")
	.data("parent", this.parents(parent));
};



/* "Objet" comme structure de données ---- ---- ---- ---- ---- ---- ---- ---- */

var common = {

	//Contrôles particuliers : cf. attribut data-control
		regex: {
			email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/ //http://so.devilmaycode.it/jquery-validate-e-mail-address-regex/
		},
		controls: {
			email: function (v) { //cf. attribut data-control
				return common.regex.email.test(v);
		}	},

	//Contrôles génériques
		require: function (e, trig) {
			var $t = $(this),
				check = !! $t.val().replace(/\s/g, "").length;
			$t.evaluate(check, trig);
			return check;
		},
		pattern: function (e, trig) {
			var $t = $(this),
				vl = $t.val().replace(/\s/g, ""),
				particulier = $t.data("control"),
				check = typeof particulier != "undefined" ? common.controls[particulier](vl) : (check = vl.length === 0 || new RegExp($t.attr("pattern")).test(vl));
			$t.evaluate(check, trig);
		},
		requirePattern: function (e, trig) {
			common.require.call(this, e, trig)
			&& common.pattern.call(this, e, trig);
		},
		toBind: function (e) {
			var $t = $(this);
			if (! $t.data("generic"))
				$t.associate();
			common.bind.call(this, e);
		},
		bind: function (e) {
			common[$(this).data("generic")].call(this, e, typeof e == "undefined");
	}	},


/* "Objet" comme orientation prototypale ---- ---- ---- ---- ---- ---- ---- ---- */

	Check = function (t) {
		if (! this instanceof Check)
			throw new Error("Attention à l'instanciation");
		this.form = t;
		this.$form = $(t);
		this.action = this.$form.data("action");
		this.$inputs = $(this.$form.find("[required]:not([pattern]), [pattern]:not([required]), [pattern][required]").get().reverse());
		this.$inputs.each(function () {
			$(this).associate();
	});	};

Check.prototype.toCheck = function () {
	var validation = 1;
	this.$inputs.each(function () {
		common.bind.call(this);
		validation *= $(this).data("check");
	});
	this.$form.removeClass("checking");
	validation
	&& $(".valid").removeClass("valid")
	&& window[this.action]();
}



/* Gestion événementielle ---- ---- ---- ---- ---- ---- ---- ---- */

$("body").on("submit", "form", function (e) {
	e.preventDefault();
	$(this).addClass("checking");
	(Check.init = (typeof Check.init == "undefined" || Check.init.form != this) ? new Check(this) : Check.init).toCheck();
})
.on("blur", "form:not(.checking) [required], form:not(.checking) [pattern]", common.toBind)
.on("keyup", "form .error input, form .valid input", common.toBind);
