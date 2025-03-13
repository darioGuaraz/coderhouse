// Seleccionamos los elementos del DOM
const input = document.getElementById("input");
const botones = document.querySelectorAll(".btn");
const titulo = document.querySelector("h2");
const feedback = document.querySelector("h3");

// Recuperar el nombre del usuario, o pedirlo y guardarlo
const nombreUsuario =
  localStorage.getItem("nombreUsuario") || prompt("Ingrese su nombre:");
if (nombreUsuario) localStorage.setItem("nombreUsuario", nombreUsuario);
titulo.textContent = `Hola ${nombreUsuario || "Invitado"}, bienvenido.`;

// Recuperar números guardados en localStorage o inicializar array vacío
let numerosUsuario = JSON.parse(localStorage.getItem("numerosUsuario")) || [];

// Validar si el numero esta entre 1 y 50
const validarNumero = (valor) => valor >= 1 && valor <= 50;

// Funcion evento de clic en los botones
const manejarIntento = (event) => {
  const numeroIngresado = parseInt(input.value);
  const boton = event.target;

  if (!validarNumero(numeroIngresado))
    return alert("Número inválido entre 1 y 50");

  if (numerosUsuario.length < 3) {
    numerosUsuario.push(numeroIngresado);
    localStorage.setItem("numerosUsuario", JSON.stringify(numerosUsuario));

    boton.disabled = true;
    boton.style.backgroundColor = "gray";
  }

  input.value = "";

  if (numerosUsuario.length === 3) generarNumeroGanador();
};

// generar el numero ganador y comprobar si se gano
const generarNumeroGanador = () => {
  const numeroGanador = Math.floor(Math.random() * 50) + 1;
  localStorage.setItem("numeroGanador", numeroGanador);
  loteria(numeroGanador);
};

// verificar si el usuario gano
const loteria = (numeroGanador) => {
  const mensaje = numerosUsuario.includes(numeroGanador)
    ? `¡Caracoles, santos recorcholis y la marencoche! has ganado la lotería! El número ganador es: ${numeroGanador}`
    : `Segui participando. El número ganador era el: ${numeroGanador}`;

  console.log(mensaje);
  feedback.textContent = mensaje;
};

// Agregar eventos a los botones
botones.forEach((boton) => boton.addEventListener("click", manejarIntento));
