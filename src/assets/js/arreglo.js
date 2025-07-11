const ingresarEstudiantes = () => {
    let estudiantes = [];
    let cantidad = parseInt(prompt("Ingrese la cantidad de estudiantes:"));

    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
        let promedio = parseFloat(prompt(`Ingrese el promedio de ${nombre}:`));
        estudiantes.push({ nombre, promedio });
    }

    return estudiantes;
};

const calcularPromedioGeneral = estudiantes =>
    estudiantes.reduce((suma, est) => suma + est.promedio, 0) / estudiantes.length;

const estudiantes = ingresarEstudiantes();
const promedioGeneral = calcularPromedioGeneral(estudiantes);

console.log(`El promedio general del grupo es: ${promedioGeneral.toFixed(2)}`);