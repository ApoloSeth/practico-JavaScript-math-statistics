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
