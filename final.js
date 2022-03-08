console.log("trabajo final");
let inicio = prompt("si quiere empezar, ingrese 1 de lo contrario ingrese 0")
let entrada = 0;
let contador = 0;
let suma = 0;
const promedio = (suma, nota) => suma/nota

while (inicio > 1) {
    
      entrada = prompt('Ingrese sus notas (listo para salir)');
   if (entrada == 'listo'){
        break
    }
   let notta = parseInt(entrada)

   if ( notta >= 0 && notta <= 10) {
      contador++
      suma += notta
    } 
        
    
}
console.log('suma', suma);
console.log('promedio', promedio(suma, contador));


