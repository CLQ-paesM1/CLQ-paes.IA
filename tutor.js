
function resolver() {
  const pregunta = document.getElementById("pregunta").value.toLowerCase();
  const respuesta = document.getElementById("respuesta");
  respuesta.innerHTML = "";

  if (pregunta.includes("2x + 3 = 11")) {
    respuesta.innerHTML = `
      <h3>🧠 Resolución paso a paso:</h3>
      <ol>
        <li>2x + 3 = 11</li>
        <li>Resta 3 a ambos lados: 2x = 8</li>
        <li>Divide ambos lados entre 2: x = 4</li>
      </ol>
    `;
  } else if (pregunta.includes("área de un círculo") || pregunta.includes("radio")) {
    respuesta.innerHTML = `
      <h3>🧠 Fórmula del área del círculo:</h3>
      <p>Área = π × r²</p>
      <p>Si conoces el radio, reemplaza en la fórmula para obtener el resultado.</p>
    `;
  } else {
    respuesta.innerHTML = `
      <h3>🤔 Aún no sé resolver esto...</h3>
      <p>Intenta con otra pregunta o escríbela de otra forma.</p>
      <p>Pronto incorporaré más inteligencia para responder más dudas.</p>
    `;
  }
}
