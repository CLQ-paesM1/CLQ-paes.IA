
const preguntasSimulador = [];
for (let i = 1; i <= 20; i++) {
  preguntasSimulador.push({
    enunciado: `Pregunta ${i}: ¿Cuál es el resultado de ${i} + ${i}?`,
    opciones: [`${i}`, `${i*2}`, `${i+1}`, `${i+3}`],
    correcta: 1,
    explicacion: `Es una suma directa: ${i} + ${i} = ${i*2}`
  });
}

let tiempo = 90 * 60;
let intervalo;

function iniciarSimulador() {
  document.getElementById("instrucciones").style.display = "none";
  document.getElementById("preguntas").style.display = "block";
  document.getElementById("finalizar").style.display = "block";
  document.getElementById("cronometro").style.display = "block";
  mostrarPreguntas();
  iniciarCronometro();
}

function mostrarPreguntas() {
  const quiz = document.getElementById("preguntas");
  quiz.innerHTML = "";
  preguntasSimulador.forEach((preg, idx) => {
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

function iniciarCronometro() {
  const crono = document.getElementById("cronometro");
  intervalo = setInterval(() => {
    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;
    crono.innerHTML = `⏱️ ${minutos}m ${segundos < 10 ? '0' : ''}${segundos}s`;
    if (tiempo <= 0) {
      clearInterval(intervalo);
      finalizarSimulador();
    }
    tiempo--;
  }, 1000);
}

function finalizarSimulador() {
  clearInterval(intervalo);
  document.getElementById("cronometro").style.display = "none";
  const resumen = document.getElementById("resumen");
  resumen.innerHTML = "<h2>📊 Resultados del Ensayo</h2><table border='1' cellpadding='6'><tr><th>Pregunta</th><th>Correcta</th><th>Tu Respuesta</th><th>✅/❌</th><th>Explicación</th></tr>";
  preguntasSimulador.forEach((preg, idx) => {
    const opciones = document.getElementsByName("preg" + idx);
    let elegido = -1;
    for (let op of opciones) {
      if (op.checked) elegido = parseInt(op.value);
    }
    const correcta = preg.correcta;
    const icono = (elegido === correcta) ? "✅" : "❌";
    const texto = `<tr>
      <td>${idx + 1}</td>
      <td>${preg.opciones[correcta]}</td>
      <td>${elegido >= 0 ? preg.opciones[elegido] : 'No respondida'}</td>
      <td>${icono}</td>
      <td>${preg.explicacion}</td>
    </tr>`;
    resumen.innerHTML += texto;
  });
  resumen.innerHTML += "</table>";
  document.getElementById("preguntas").style.display = "none";
  document.getElementById("finalizar").style.display = "none";
}
