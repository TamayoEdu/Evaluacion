// SISTEMA ACADÉMICO
// SOLO FUNCIONES FLECHA

const ingresarEstudiantes = () => {
    let estudiantes = [];
    const cantidad = parseInt(prompt("Ingrese la cantidad de estudiantes:"));
    
    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
        let promedio = parseFloat(prompt(`Ingrese el promedio de ${nombre}:`));
        estudiantes.push({nombre, promedio});
    }
    return estudiantes;
}

const calcularPromedioGeneral = (estudiantes) => {
    let suma = estudiantes.reduce((total, est) => total + est.promedio, 0);
    return suma / estudiantes.length;
}

const encontrarMejorPromedio = (estudiantes) => {
    return estudiantes.reduce((mejor, est) => est.promedio > mejor.promedio ? est : mejor);
}

const ordenarPorPromedio = (estudiantes) => {
    return [...estudiantes].sort((a, b) => b.promedio - a.promedio);
}

const mostrarResultados = (estudiantes) => {
    console.log("\n--- RESULTADOS ---");
    
    // Promedio general
    const promedioGen = calcularPromedioGeneral(estudiantes);
    console.log(`Promedio general del grupo: ${promedioGen.toFixed(2)}`);
    
    // Mejor promedio
    const mejor = encontrarMejorPromedio(estudiantes);
    console.log(`Estudiante con mejor promedio: ${mejor.nombre} (${mejor.promedio.toFixed(2)})`);
    
    // Lista ordenada
    console.log("\nLista de estudiantes ordenada por promedio (descendente):");
    const ordenados = ordenarPorPromedio(estudiantes);
    ordenados.forEach((est, index) => {
        console.log(`${index + 1}. ${est.nombre}: ${est.promedio.toFixed(2)}`);
    });
}

// Ejecución principal
const estudiantes = ingresarEstudiantes();
mostrarResultados(estudiantes);