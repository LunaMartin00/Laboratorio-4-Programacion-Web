function Ordenar(arr) {
    const nuevoArray = [...arr]
    for (let i = 0; i < nuevoArray.length; i++) {
        for (let j = 0; j < nuevoArray.length - i - 1; j++) {
            if (nuevoArray[j] > nuevoArray[j + 1]) {
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }
        }
    }
    return nuevoArray;
}

console.log(Ordenar([14, 23, 99, 874, 93, 12]));

function EsPar(numero) {
    return numero % 2 === 0;
}

console.log(EsPar(7));

function CalcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;
    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento;
        dias++;
        if (altura >= alturaDeseada) {
            return dias;
        }
        altura -= velocidadDecrecimiento;
    }

    return dias;
}

console.log(CalcularDiasCrecimiento(3, 1, 10));
// Ejemplo: crece 3m por día, baja 1m por noche, meta = 10m