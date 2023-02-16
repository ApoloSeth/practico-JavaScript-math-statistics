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
        // Solucion rápida
        const medianaYear2 = PlatziMath.median(empresas[empresa][yearAnalisis]);
        console.log(medianaYear2)
        
    }
}