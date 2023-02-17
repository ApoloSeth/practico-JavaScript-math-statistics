// Análisis personal para Juanita

    // Encontando a Juanita en el Array
function encontrarPersona (nombrePersona){
    const infoPersona = salarios.find((persona) => persona.name == nombrePersona);
    return infoPersona;
}

function medianaSalarialPersona (nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const listaSalarios = trabajos.map((trabajo) => trabajo.salario);

    const medianaSalarios = PlatziMath.median(listaSalarios)
    
    return medianaSalarios;
}

function incrementoSalarioEntreAnios (listaSalarios){
    const diferenciaSalariosEntreAnios = [];
    for (let i = 0; i < listaSalarios.length - 1; i++){
        const diferencia = listaSalarios[i+1]  - listaSalarios[i];
        const porcentajeCrecimiento = ((diferencia / listaSalarios[i]) * 100).toFixed(2);
        diferenciaSalariosEntreAnios.push(Number(porcentajeCrecimiento));
    }
    return diferenciaSalariosEntreAnios;
}

function proyeccionSalarial (nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const listaSalarios = trabajos.map((trabajo) => trabajo.salario);
    console.log(listaSalarios);

    const incrementos = incrementoSalarioEntreAnios(listaSalarios);
    console.log(incrementos);

    const proyeccion = PlatziMath.median(incrementos);
    const salarioProyectado = listaSalarios[listaSalarios.length-1] * (1 + proyeccion/100);
    console.log('Salario proyectado próximo año:' + salarioProyectado)
    return proyeccion;
}

//Análisis empresarial

const empresas = {};

for (persona of salarios){
    for (trabajo of persona.trabajos){
        if (!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }
        if (!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = [];
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
}

// Estructura
// Empresa = {
//     nombreEmpresa : {
//         2018: [s1, s2, s3],
//         2019: [s1, s2],
//     },
//     nombreEmpresa2 : {
//         2018: [s1, s2, s3],
//         2019: [s1, s2],
//     },
// }

function medianaSalarioXempresa (empresa, yearAnalisis){
    if (!empresas[empresa]){
        console.warn('La empresa no existe');
    } else if (!empresas[empresa][yearAnalisis]){
        console.warn('Sin registro de salarios para el año ' + yearAnalisis)
    }else {
        const listaEmpresas = Object.entries(empresas);
        const empresaAnalisis = listaEmpresas.find((nombreEmpresa) => nombreEmpresa[0] == empresa);
        const listaYears = Object.entries(empresaAnalisis[1]);
        for (year of listaYears){
            if (year[0] == yearAnalisis){
                const medianaYear = PlatziMath.median(year[1]);
                console.log(medianaYear)
            }
        }  
    }
}

// Solución Rápida
function medianaSalarioXempresa2(empresa, yearAnalisis){
    if (!empresas[empresa]){
        console.warn('La empresa no existe');
    } else if (!empresas[empresa][yearAnalisis]){
        console.warn('Sin registro de salarios para el año ' + yearAnalisis)
    }else {
        const medianaYear2 = PlatziMath.median(empresas[empresa][yearAnalisis]);
        return medianaYear2
    }
}

// Proyección salario X empresa

function proyeccionSalarioEmpresa (empresa){
    if (!empresas[empresa]){
        console.warn('La empresa no existe')
    } else{
        listaEmpresas2 = Object.entries(empresas);
        const empresaAnalisis2 = listaEmpresas2.find((objeto) => objeto[0]==empresa);

        const medianaSalariosXyear = [];
        const listaSalarios = Object.entries(empresaAnalisis2[1]);

        for (year of listaSalarios){
            const medianaYear = PlatziMath.median(year[1]);
            medianaSalariosXyear.push(medianaYear);
        }
        console.log(medianaSalariosXyear)

        const incrementosXyear = [];

        for (let i=0; i < medianaSalariosXyear.length -1;i++){
            const incremento = ((medianaSalariosXyear[i+1] - medianaSalariosXyear[i]) / medianaSalariosXyear[i]) * 100;
            incrementosXyear.push(incremento);
        }
        console.log(incrementosXyear)

        const incrementoProyectado = PlatziMath.median(incrementosXyear)/100;
        const salarioProyectadoEmpresa = medianaSalariosXyear[medianaSalariosXyear.length - 1] * (1 + incrementoProyectado);
        return salarioProyectadoEmpresa;
    }
}

    // Solución rápida
function proyeccionSalarioEmpresa2 (empresa){
    if (!empresas[empresa]){
        console.warn('La empresa no existe')
    } else {
        const salariosXyears = Object.keys(empresas[empresa]);
        console.log(salariosXyears)

        const medianaXyear = [];
        for (year of salariosXyears){
            const mediana = medianaSalarioXempresa2(empresa, year);
            medianaXyear.push(mediana)
        }
        const incrementosXyear = [];

        for (let i=0; i < medianaXyear.length -1;i++){
            const incremento = ((medianaXyear[i+1] - medianaXyear[i]) / medianaXyear[i]) * 100;
            incrementosXyear.push(incremento);
        }
        console.log(incrementosXyear)

        const incrementoProyectado = PlatziMath.median(incrementosXyear)/100;
        const salarioProyectadoEmpresa = medianaXyear[medianaXyear.length - 1] * (1 + incrementoProyectado);
        return salarioProyectadoEmpresa;
    }
}

// Análisis General
function medianaGeneral (){
    const listaMedianas = salarios.map((persona) => medianaSalarialPersona(persona.name))

    const medianaPoblacion = PlatziMath.median(listaMedianas);
    return medianaPoblacion

}

function medianaTop10 (){
    const listaMedianas = salarios.map((persona) => medianaSalarialPersona(persona.name))
    const listaMedianasOrdenadas = PlatziMath.orderedValues(listaMedianas);

    const top10 = Math.floor(listaMedianasOrdenadas.length * 10 / 100);
    const listaTop10 = [];
    for (let i=0; i < top10; i++){
        listaTop10.push(listaMedianasOrdenadas.pop())
    }
    
    const medianaTop10 = PlatziMath.median(listaTop10);
    return medianaTop10;
}

// Capacidad de endeudamiento

function capacidadEndeudamientoXyear (persona, year){
    const nombre = encontrarPersona(persona);
    const trabajos = nombre.trabajos;

    let capacidad = 0
    for (elemento of trabajos){
        if (elemento.year == year){
            capacidad = (elemento.salario - elemento.gastos) * 0.35
        }
    }
    return capacidad
}

function medianaCapacidadEndeudamiento (persona){
    const nombre = encontrarPersona(persona);
    const trabajos = nombre.trabajos;

    const years = trabajos.map((periodo) => periodo.year)
    const listaendeudamiento = [];
    for (year of years){
        const capacidadEndeudamiento = capacidadEndeudamientoXyear(persona, year);
        listaendeudamiento.push(capacidadEndeudamiento)
    }
    const medianaCapacidadEndeuda = PlatziMath.median(listaendeudamiento)
    console.log(listaendeudamiento)
    return medianaCapacidadEndeuda
}

function capacidadEndeudamientoActual (persona){
    const nombre = encontrarPersona(persona);
    const trabajos = nombre.trabajos;
    console.log(trabajos)

    const years = trabajos.map((periodo) => periodo.year)
    const actualYear = years.pop()

    const capacidadEndeudamientoActual = capacidadEndeudamientoXyear (persona, actualYear)
    console.log(capacidadEndeudamientoActual)
}
