let mainDiv = document.querySelector('#container');

function removeChildren(elem){

let elements = elem.children;
while (elem.firstChild !== null){
    let elementsToRemove = elem.firstChild;
    elem.removeChild(elem.firstChild);
    // elem.removeChild(elementsToRemove); esec shesadzlebelia
    // firstChild aris gamocxadebuli cvladis tviseba..mshlobeli elementis miutiteblad firstChildis gawera sheudzlebelia
}
}
removeChildren(mainDiv);