console.log('Preentrega');

class TT{
    constructor(materia, nota){
        this.materia= materia
        this.nota= parseInt(nota)
    }
}

let subjects = ['Bonos', 'Analsis Tecnico Inicial', 'Introduccion al Mercado', 'Analisis Tencino Avanzado','Etf','Futuros','Analisis FUndamental']
let T = []

for (const subject of subjects) {
    let nota = prompt(`Calificación de ${subject}`)
    T.push(new TT(subject, nota))
}
console.log(T);

let total = 0
T.forEach( g => {
    total += g.nota
})

console.log('promedio: ', total/T.length);