// SCROLL A TESTER


//sans jQuery
var w = window,
    h = document.getElementsByTagName("html")[0], //document.querySelector("html")
    d = document.documentElement,
    b = document.body;

//http://stackoverflow.com/questions/19635188/why-is-body-scrolltop-deprecated

//obtenir la mesure du scroll
var scrollActif = pageYOffset !== undefined ? pageYOffset : d.scrollTop;
//sur une page quelconque cf. https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
var scrollActif = pageYOffset !== undefined ? pageYOffset : (d || b.parentNode || b).scrollTop;
//sur une page quelconque cf. http://stackoverflow.com/questions/871399/cross-browser-method-for-detecting-the-scrolltop-of-the-browser-window
var scrollActif = pageYOffset != =undefined ? pageYOffset : d.clientHeight ? d.scrollTop : b.scrollTop;
/* stackoverflow :
function getScrollTop(){
    if(typeof pageYOffset!= 'undefined'){
        //most browsers except IE before #9
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
    }
} */

//detecter le scroll
w.onscroll = faire;
w.onresize = function() {
    //?
}

//scroller
scrollTo(x,y);
/* animation ?
b.scrollTop = y; ? */



//avec jQuery
var $w = $(window),
    $h = $("html"),
    $b = $("body");

//obtenir la mesure du scroll
var scrollActif = $w.scrollTop();

//detecter le scroll
$w.on({
    scroll: faire,
    resize: function(){
        $w.trigger("scroll");
}   });

//scroller
var scrollant = $b.prop("scrollTop") ? $b : $h.prop("scrollTop") ? $h : $h.add($b);
scrollant.animate({ scrollTop : n },delai * $w.scrollTop() / $w.innerHeight(),"swing",callback);






//projet C mixte : ??
$(document).scrollTop() > document.documentElement.scrollTop ? $(document).scrollTop() : document.documentElement.scrollTop








// SCROLL A TESTER - note plus ancienne ?


//sans jQuery
var w = window,
	h = document.getElementsByTagName("html")[0], //document.querySelector("html")
	d = document.documentElement,
	b = document.body;

//obtenir la mesure du scroll
var scrollActif = pageYOffset !== undefined ? pageYOffset : d.scrollTop;
//sur une page quelconque cf. https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
var scrollActif = pageYOffset !== undefined ? pageYOffset : (d || b.parentNode || b).scrollTop;
//sur une page quelconque cf. http://stackoverflow.com/questions/871399/cross-browser-method-for-detecting-the-scrolltop-of-the-browser-window
var scrollActif = pageYOffset != =undefined ? pageYOffset : d.clientHeight ? d.scrollTop : b.scrollTop;
/* stackoverflow :
function getScrollTop(){
    if(typeof pageYOffset!= 'undefined'){
        //most browsers except IE before #9
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
    }
} */

//detecter le scroll
w.onscroll = faire;
w.onresize = function() {
	//?
}

//scroller
scrollTo(x,y);
/* animation ?
b.scrollTop = y; ? */



//avec jQuery
var $w = $(window),
	$h = $("html"),
	$b = $("body");

//obtenir la mesure du scroll
var scrollActif = $w.scrollTop();

//detecter le scroll
$w.on({
	scroll: faire,
	resize: function(){
		$w.trigger("scroll");
}	});

//scroller
var scrollant = $b.prop("scrollTop") ? $b : $h.prop("scrollTop") ? $h : $h.add($b);
scrollant.animate({ scrollTop : n },delai * $w.scrollTop() / $w.innerHeight(),"swing",callback);






//projet C mixte : ??
$(document).scrollTop() > document.documentElement.scrollTop ? $(document).scrollTop() : document.documentElement.scrollTop

