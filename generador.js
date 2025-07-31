
const preguntas = [
  {
    enunciado: "¿Cuál es el valor de x si 2x + 6 = 14?",
    opciones: ["x = 3", "x = 4", "x = 5", "x = 6"],
    correcta: 1,
    explicacion: "2x + 6 = 14 → 2x = 8 → x = 4"
  },
  {
    enunciado: "Si el área de un cuadrado es 36 cm², ¿cuánto mide un lado?",
    opciones: ["6 cm", "9 cm", "12 cm", "18 cm"],
    correcta: 0,
    explicacion: "Área = lado² → lado = √36 = 6 cm"
  },
  {
    enunciado: "¿Cuál es el resultado de (3 + 2) × (4 - 1)?",
    opciones: ["15", "12", "9", "10"],
    correcta: 0,
    explicacion: "(3+2)×(4−1) = 5×3 = 15"
  },
  {
    enunciado: "¿Cuánto es 25% de 80?",
    opciones: ["20", "15", "25", "30"],
    correcta: 0,
    explicacion: "25% de 80 = 0.25 × 80 = 20"
  },
  {
    enunciado: "¿Cuál es el perímetro de un triángulo con lados 5, 7 y 8?",
    opciones: ["20", "19", "21", "22"],
    correcta: 2,
    explicacion: "Perímetro = 5 + 7 + 8 = 20"
  },
  {
    enunciado: "¿Qué valor hace verdadera la ecuación x² = 49?",
    opciones: ["7", "6", "9", "8"],
    correcta: 0,
    explicacion: "x = √49 → x = 7"
  },
  {
    enunciado: "¿Cuál es el área de un triángulo base 10 y altura 4?",
    opciones: ["20", "40", "14", "12"],
    correcta: 0,
    explicacion: "Área = (base × altura) / 2 → (10×4)/2 = 20"
  }
];

function mostrarPreguntas() {
  const quiz = document.getElementById("quiz");
  preguntas.forEach((preg, idx) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<strong>${idx + 1}. ${preg.enunciado}</strong><br>`;
    preg.opciones.forEach((op, i) => {
      div.innerHTML += `
        <div class="opcion">
          <input type="radio" name="preg${idx}" value="${i}" id="preg${idx}_op${i}">
          <label for="preg${idx}_op${i}">${op}</label>
        </div>`;
    });
    quiz.appendChild(div);
  });
}

function corregir() {
  let score = 0;
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "";
  preguntas.forEach((preg, idx) => {
    const opciones = document.getElementsByName("preg" + idx);
    let elegido = -1;
    for (let op of opciones) {
      if (op.checked) elegido = parseInt(op.value);
    }
    const correcta = preg.correcta;
    if (elegido === correcta) score++;
    const resultadoTexto = elegido === correcta ?
      `✅ Pregunta ${idx + 1}: Correcta` :
      `❌ Pregunta ${idx + 1}: Incorrecta (Correcta: ${preg.opciones[correcta]})`;
    resultados.innerHTML += `<p class="${elegido === correcta ? 'correcta' : 'incorrecta'}">${resultadoTexto}</p>`;
  });
  resultados.innerHTML = `<h2>📊 Resultado: ${score}/${preguntas.length}</h2>` + resultados.innerHTML;
}

function mostrarSoluciones() {
  const soluciones = document.getElementById("soluciones");
  soluciones.style.display = "block";
  soluciones.innerHTML = "<h2>📘 Soluciones Explicadas</h2>";
  preguntas.forEach((preg, idx) => {
    soluciones.innerHTML += `<p><strong>${idx + 1}.</strong> ${preg.explicacion}</p>`;
  });
}

window.onload = mostrarPreguntas;
