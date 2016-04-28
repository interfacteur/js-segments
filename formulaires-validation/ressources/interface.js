"use strict";

/* Manipulation de l'interface ---- ---- ---- ---- ---- ---- ---- ---- */

var $s = $("section"),
	$f = $("form"),
	$v = $("#validation"),
	toColor = function () {
		return Math.floor(Math.random() * 255);
	},
	toSend = function () {
		$v.text(new Date())
		.css("border-color", "rgb(" + toColor() + "," + toColor() + "," + toColor() + ")");
	};
$("#b1").on("click", function () {
	var $c = $f.clone();
	$c.find(".error, .valid")
	.removeClass("error valid");
	$c.find("[id]").each(function () {
		var $t = $(this),
			val1 = $(this).attr("id"),
			val2 = val1 + Math.round(Math.random() * 100000);
		$t.attr("id", val2);
		$c.find("[for=" + val1 + "]").attr("for", val2);
	})
	$c.appendTo($s)
	.get(0)
	.reset();
});
$("#b2").on("click", function () {
	var $fs = $("form"),
		fl = $fs.length;
	if (fl == 1)
		return;
	$fs.eq(fl - 1).remove();
});
