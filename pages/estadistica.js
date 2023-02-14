const PlatziMath = {};

PlatziMath.average = function average (list){
    let elementsSum = 0;

    for( element of list){
        elementsSum = elementsSum + element
    }
    const average = elementsSum /list.length
    return average;
}

PlatziMath.average2 = function average2 (list){
    function elementAllSum (acumulate, newValue){
        return acumulate + newValue;
    }    

    const elementsSum2 = list.reduce(elementAllSum);

    const listAverage = elementsSum2 / list.length

    console.log(listAverage)
}

// -----Calculando la Mediana

PlatziMath.isPar = function isPar (lista){
    if (lista.length % 2 == 0){
        return true
    } else {
        return false
    }
}

PlatziMath.median = function median (lista){
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

// -----Calculando la Moda

PlatziMath.histogram = function histogram (numbersList){
    const repeatingNumbers = {};
    for(number of numbersList){
        if (repeatingNumbers[number]){
            repeatingNumbers[number] += 1
        } else{
            repeatingNumbers[number] = 1
        }
    }
    return repeatingNumbers
}

PlatziMath.sortUnorderedList = function sortUnorderedList (listUnorderer,i){
    function twoDimensionalList (a,b){
        return a[i] - b[i];
    }
    const orderedList = listUnorderer.sort(
        twoDimensionalList);
    return orderedList
}

PlatziMath.moda = function moda (lista){
    repCounter = histogram(lista);
    const listArrayBidimensional = Object.entries(repCounter)

    const orderedListBidimensional = sortUnorderedList(listArrayBidimensional,1);

    const arrayModa = orderedListBidimensional.pop()
    const moda = arrayModa[0];
    const repeticiones = arrayModa[1]

    console.log('la moda del arreglo ingresado es:' + moda + ' con ' + repeticiones + ' repeticiones')
}

// -----Otra solucion para la moda

PlatziMath.orderedValues = function orderedValues (listValues){

    function orderedValues (a, b) {
        return a - b
    };

    const listValuesOrdered = listValues.sort(orderedValues);

    return listValuesOrdered
}

PlatziMath.moda2 = function moda2 (lista2){
    repCounter2 = histogram(lista2);

    repCounter2Values = Object.values(repCounter2);

    const resultOrderedValues = orderedValues(repCounter2Values);
    console.log(resultOrderedValues);

    const higherValue = resultOrderedValues.pop();

    const list2Keys = Object.keys(repCounter2);

    let modaValues = [];

    for (i of list2Keys){
        if (repCounter2[i] == higherValue){
            modaValues.push(i);
        };
    };
    return(modaValues);

}

// -----Reto
const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};

function converterObjectInArray (obj){
    let arrayOfObjects = [];
    const listId= Object.keys(obj);
    const listName = Object.values(obj);

    for(let i = 0; i < listId.length; i++){
        let objectIndividual= {}
        objectIndividual['id'] = listId[i];
        objectIndividual['name'] = listName[i];
        arrayOfObjects.push(objectIndividual);
    }
    return arrayOfObjects
}

//-----Promedio Ponderado
const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

PlatziMath.weightedAverage = function weightedAverage (listOfObject){
    const valoresXpeso =listOfObject.map(function(objectNotes){
        return objectNotes.note * objectNotes.credit;
    })
    console.log(valoresXpeso)
    const sumaValoresXpeso = valoresXpeso.reduce((a,b) => a+b);
    
    const creditos = listOfObject.map((objeto) => objeto.credit);
    const sumaCreditos = creditos.reduce((a,b) => a+b);
    
    const promedioPond = sumaValoresXpeso / sumaCreditos;

    return promedioPond
}