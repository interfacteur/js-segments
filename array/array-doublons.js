"use strict";

var tableau1 = ["a", "b", "a", "c", "d", "d", "a", "e", "a", "e"];
var tableau2 = ["a", "b", "a", "c", "d", "d", "a", "e", "a", "e"];
var tableau3 = ["a", "b", "a", "c", "d", "d", "a", "e", "a", "e"];


tableau1.forEach(function (val, ind) {
	while (ind < tableau1.lastIndexOf(val))
		tableau1.splice(tableau1.lastIndexOf(val), 1);
});
console.log(tableau1);
// for (var i = 0; i < tableau1.length; ++i) {
// 	var val = tableau1[i];
// 	while (i < tableau1.lastIndexOf(val))
// 		tableau1.splice(tableau1.lastIndexOf(val), 1);
// }
// console.log(tableau1);




// https://www.unicoda.com/?p=579
function cleanArray(array) {
	var i, j, len = array.length, out = [], obj = {};
	for (i = 0; i < len; i++) {
		obj[array[i]] = 0;
	}
	for (j in obj) {
		out.push(j);
	}
	return out;
}
tableau2 = cleanArray(tableau2);
console.log(tableau2);




// http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
var tableau0 = [];
tableau3.forEach(function (val) {
	if (tableau0.indexOf(val) < 0) tableau0.push(val);
});
tableau3 = tableau0;
console.log(tableau3);// var uniqueNames = [];
// $.each(names, function(i, el){
// 	if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
// });
