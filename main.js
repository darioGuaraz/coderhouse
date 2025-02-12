/*Objetivos:
  -usar funciones
  -usar variables
  -usar 1 ciclo
  -usar 1 array
*/

const numeros_usuario = [];

for (let i = 0; i < 3; i++) {
  let numero_ingresado = parseInt(
    prompt(`ingrese valor ${i + 1} de 3 de su boleto de loteria (maximo 50)`)
  );
  function verificador_ingresos() {
    while (numero_ingresado > 50) {
      alert("ingrese numero valido, entre 0 y 50");
      numero_ingresado = parseInt(
        prompt(`ingrese valor ${i + 1}/3 de su boleto de loteria (maximo 50)`)
      );
    }
  }
  verificador_ingresos();

  numeros_usuario.push(numero_ingresado);
}

console.log("tus numeros de boleto ingresados son:");
for (let i = 0; i < numeros_usuario.length; i++) {
  numeros_usuario.sort((a, b) => a - b);
  console.log(numeros_usuario[i]);
}

const numero_ganador = parseInt(15);
console.log("el numero ganador es: " + numero_ganador);

let loteria = () => {
  if (numeros_usuario.includes(numero_ganador)) {
    console.log("felicidades, has ganado la loteria");
  } else {
    console.log("Lo siento pero no ganaste. Segui participando...");
  }
};
loteria();
