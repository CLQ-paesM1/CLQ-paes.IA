
const preguntas = [
  {
    pregunta: "¿Cuál es el valor de x si 2x + 3 = 11?",
    opciones: ["2", "3", "4", "5"],
    correcta: 2,
    explicacion: "2x + 3 = 11 → 2x = 8 → x = 4"
  },
  {
    pregunta: "Si f(x) = 2x + 1, ¿cuánto es f(3)?",
    opciones: ["5", "6", "7", "8"],
    correcta: 2,
    explicacion: "f(3) = 2(3) + 1 = 7"
  },
  {
    pregunta: "¿Cuál es el área de un triángulo de base 6 y altura 4?",
    opciones: ["12", "10", "24", "14"],
    correcta: 0,
    explicacion: "Área = (base × altura) / 2 = (6×4)/2 = 12"
  },
  {
    pregunta: "¿Qué representa la pendiente en una recta?",
    opciones: ["El punto inicial", "La inclinación", "La altura", "La distancia total"],
    correcta: 1,
    explicacion: "La pendiente representa cuán inclinada está una recta"
  },
  {
    pregunta: "¿Cuánto es 30% de 200?",
    opciones: ["30", "60", "90", "120"],
    correcta: 1,
    explicacion: "30% de 200 = 0.3 × 200 = 60"
  }
];

let timerInterval;
let tiempo = 40 * 60;

document.getElementById("start-btn").addEventListener("click", iniciarSimulador);
document.getElementById("finalizar-btn").addEventListener("click", finalizarSimulador);

function iniciarSimulador() {
  document.getElementById("simulador").classList.remove("hidden");
  document.getElementById("start-btn").classList.add("hidden");
  mostrarPreguntas();
  iniciarTimer();
}

function mostrarPreguntas() {
  const container = document.getElementById("preguntas-container");
  preguntas.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "pregunta";
    div.innerHTML = `<h3>${i + 1}. ${p.pregunta}</h3>`;
    const opciones = document.createElement("div");
    opciones.className = "opciones";
    p.opciones.forEach((op, j) => {
      const id = `preg${i}_op${j}`;
      opciones.innerHTML += `
        <label>
          <input type="radio" name="preg${i}" value="${j}" id="${id}" />
          ${op}
        </label>
      `;
    });
    div.appendChild(opciones);
    container.appendChild(div);
  });
}

function iniciarTimer() {
  const display = document.getElementById("timer");
  timerInterval = setInterval(() => {
    const min = Math.floor(tiempo / 60);
    const sec = tiempo % 60;
    display.textContent = min + ":" + (sec < 10 ? "0" : "") + sec;
    tiempo--;
    if (tiempo < 0) {
      clearInterval(timerInterval);
      finalizarSimulador();
    }
  }, 1000);
}

function finalizarSimulador() {
  clearInterval(timerInterval);
  const resultadosDiv = document.getElementById("tabla-resultados");
  resultadosDiv.innerHTML = "";
  let correctas = 0;

  preguntas.forEach((p, i) => {
    const seleccionada = document.querySelector(`input[name="preg${i}"]:checked`);
    const div = document.createElement("div");
    div.className = "pregunta";

    if (seleccionada && parseInt(seleccionada.value) === p.correcta) {
      div.classList.add("correcta");
      correctas++;
    } else {
      div.classList.add("incorrecta");
    }

    div.innerHTML = `<h3>${i + 1}. ${p.pregunta}</h3>
    <p><strong>Tu respuesta:</strong> ${seleccionada ? p.opciones[seleccionada.value] : "No respondida"}</p>
    <p><strong>Respuesta correcta:</strong> ${p.opciones[p.correcta]}</p>
    <p><strong>Explicación:</strong> ${p.explicacion}</p>`;

    resultadosDiv.appendChild(div);
  });

  document.getElementById("simulador").classList.add("hidden");
  document.getElementById("resultado").classList.remove("hidden");
}
