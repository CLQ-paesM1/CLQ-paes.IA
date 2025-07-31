
const preguntas = [
  {
    pregunta: "¿Cuál es el valor de x si 2x + 4 = 10?",
    opciones: ["3", "4", "2", "6"],
    correcta: 0
  },
  {
    pregunta: "¿Cuál es el área de un círculo con radio 3?",
    opciones: ["9π", "6π", "12π", "3π"],
    correcta: 0
  },
  {
    pregunta: "¿Cuántos grados tiene un ángulo recto?",
    opciones: ["180°", "90°", "45°", "120°"],
    correcta: 1
  }
];

function cargarSimulador() {
  const contenedor = document.getElementById("simulador");
  preguntas.forEach((p, i) => {
    const bloque = document.createElement("div");
    bloque.innerHTML = `<p><strong>${i+1}. ${p.pregunta}</strong></p>`;
    p.opciones.forEach((op, idx) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "preg" + i;
      input.value = idx;
      bloque.appendChild(input);
      bloque.innerHTML += ` ${op}<br/>`;
    });
    contenedor.appendChild(bloque);
  });
}

function evaluar() {
  let score = 0;
  preguntas.forEach((p, i) => {
    const opciones = document.getElementsByName("preg" + i);
    opciones.forEach(op => {
      if (op.checked && parseInt(op.value) === p.correcta) {
        score++;
      }
    });
  });
  document.getElementById("resultado").innerText = `Resultado: ${score}/${preguntas.length} correctas.`;
}

window.onload = cargarSimulador;
