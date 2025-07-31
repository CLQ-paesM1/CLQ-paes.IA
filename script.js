function enviarMensaje() {
  const input = document.getElementById("user-input");
  const texto = input.value.trim();
  if (!texto) return;

  const chatBox = document.getElementById("chat-box");

  const userDiv = document.createElement("div");
  userDiv.className = "user-msg";
  userDiv.textContent = texto;
  chatBox.appendChild(userDiv);

  const iaDiv = document.createElement("div");
  iaDiv.className = "ia-msg";
  iaDiv.textContent = "🤖 Pensando...";
  chatBox.appendChild(iaDiv);

  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    iaDiv.textContent = responderSimulado(texto);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1200);

  input.value = "";
}

function responderSimulado(texto) {
  texto = texto.toLowerCase();
  if (texto.includes("pitágoras")) {
    return "📐 El Teorema de Pitágoras dice que c² = a² + b². Si conoces dos lados de un triángulo rectángulo, puedes calcular el tercero.";
  } else if (texto.includes("función lineal")) {
    return "📊 Una función lineal tiene la forma f(x) = mx + b. Representa una recta en el plano.";
  } else if (texto.includes("porcentaje")) {
    return "📈 Para calcular un porcentaje: multiplica la fracción por 100. Ejemplo: 20 de 80 es (20/80)×100 = 25%.";
  } else if (texto.includes("ecuación")) {
    return "🧮 Para resolver una ecuación, debes despejar la incógnita paso a paso, aplicando operaciones inversas.";
  } else {
    return "🤔 Buena pregunta. Aún no tengo una respuesta perfecta, pero puedes intentar reformular o preguntarme algo relacionado con geometría, álgebra o funciones.";
  }
}

function setPregunta(pregunta) {
  document.getElementById("user-input").value = pregunta;
}