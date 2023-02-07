// ------Cuadrado
console.group('Cuadrado')

const ladoCuadrado = 5;
const perimetroCuadrado = 4 * ladoCuadrado;
const areaCuadrado = ladoCuadrado ** 2;

function calcularCuadrado (lado){
    return{
        perimetro: lado * 4,
        area: lado ** 2
    }
};

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

console.groupEnd('Cuadrado')

// ------Triangulo
console.group('Triangulo')

const ladoUnoTriangulo = 6;
const ladoDosTriangulo = 6;
const ladoBaseTriangulo = 4;

const perimetroTriangulo = ladoUnoTriangulo + ladoUnoTriangulo + ladoBaseTriangulo;
const alturaTriangulo = (ladoUnoTriangulo**2-(ladoBaseTriangulo / 2)**2)**0.5;
const areaTriangulo = (ladoBaseTriangulo * alturaTriangulo) / 2;

function calcularTriangulo (lado1, lado2, base){
    // const altura = (lado1 ** 2 - (base / 2)**2)**0.5;
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * calcularAlturaTringuloIsoceles(lado1, base)) / 2,
    }
};

function calcularAlturaTringuloIsoceles(lado1, base){
    if (lado1 == base){
        console.warn('Este no es un triángulo Isoceles')
    } else{
        return Math.sqrt((lado1 ** 2) - (base/2) ** 2)
    }
};

function calcularAlturaTringuloEscaleno (lado1, lado2, base){
    if(lado1==lado2 || lado1==base || lado2==base){
        console.warn("No es un triángulo Escaleno")
    } else{
        return Math.sqrt(lado1**2 - ((lado1**2-lado2**2+base**2)/(2*base))**2).toFixed(2)
    }
};

console.log({
    ladoUnoTriangulo,
    ladoDosTriangulo,
    ladoBaseTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});

console.groupEnd('Triangulo')

// ------Circulo
console.group('Circulo')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;


const circunferencia = diametroCirculo * Math.PI;
const areaCirculo = radioCirculo**2 * Math.PI;

console.log({
    radioCirculo,
    diametroCirculo,
    circunferencia,
    areaCirculo
})

function calcularCirculo (radio){
    const diametro = radio * 2
    return{
        diametro,
        circunferencia: Math.PI * diametro,
        area: Math.PI * radio**2
    }
};

console.groupEnd('Circulo')
