//IIFE fléchée déclarant et invoquant une fonction async récursive
//pour déterminer la hauteur d'un élément (jQuery) donné une fois celui-ci rendu par le DOM

  //voir variante paramétrable
  //voir $.fn.gis (plugin) ?


(() => 
{
    const heigthWatch = async () =>
    {
        await new Promise(resolve =>
            setTimeout(resolve, 100)
        );
        let heightElement = $element.outerHeight();
        heightElement > 2
        && $element.data('height', heightElement)
        || heigthWatch();
    }
    heigthWatch();
})();


/*
  après lecture de
  https://stackoverflow.com/questions/42964102/syntax-for-async-arrow-function/42964310#42964310
*/


//EXEMPLE DANS LE PROJET WebForce3 :
    //déterminer la hauteur de l'élément : pour les placeholder à hauteurs distinces du drag and drop (jQuery UI)
        // - IIFE fléchée contenant recursive async. (donc promesse chainable) : initialement pour insertion dynamique de l'élément dont mesurer hauteur,
        // conservé ici en cas de scope hors ready de jQuery
//déterminer la hauteur de l'élément : pour les placeholder à hauteurs distinces du drag and drop (jQuery UI)
// - IIFE fléchée contenant recursive async. (donc promesse chainable) : initialement pour insertion dynamique de l'élément dont mesurer hauteur,
// conservé ici en cas de scope hors ready de jQuery
(() =>
{
    let height;
    const heigthWatch = async $elem =>
    {
        let elemHeight;
        await new Promise(resolve =>
            setTimeout(resolve, 100)
        );
        elemHeight = $elem.outerHeight();
        return elemHeight > 2 ? Math.round(elemHeight) : heigthWatch();
    };
    heigthWatch($('.calibration1'))
        .then(h =>
        {
            height = h;
            return heigthWatch($('.calibration2'));
        })
        .then(h =>
        {
            $('.calibration').remove();
            $('html > head').append(
                $(`<style>
                    .episode_placeholder:nth-child(-n+2) { height: ${height}px; }
                    .episode_placeholder { height: ${h}px; }
                 </style>`)
            );
            $body.removeClass('placeholderCalculate');
        });
})();
