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
