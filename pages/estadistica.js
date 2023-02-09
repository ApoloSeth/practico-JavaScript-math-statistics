function average (list){
    let elementsSum = 0;

    for( element of list){
        console.log(element)
        elementsSum = elementsSum + element
    }
    const average = elementsSum /list.length
    console.log(average);
    return average;
}



function average2 (list){
    function elementAllSum (acumulate, newValue){
        return acumulate + newValue;
    }    

    const elementsSum2 = list.reduce(elementAllSum);

    const listAverage = elementsSum2 / list.length

    console.log(listAverage)
}

function isPar (lista){
    if (lista.length % 2 == 0){
        return true
    } else {
        return false
    }
}

function median (lista){
    const listIsPar = isPar(lista)
    lista.sort( (a, b) => a - b);
    if (lista.length == 1){
        const medianList = lista[0];
        return medianList;
    }else if (listIsPar){
        const middleIndex1 = lista.length/2;
        const middleIndex2 = lista.length/2 -1;
        const medianList = (lista[middleIndex1] + lista[middleIndex2]) / 2;
        return medianList;
    } else{
        const middleIndex = Math.trunc(lista.length / 2);
        const medianList = lista[middleIndex];
        return medianList;
    }
}