
async function consultarIA() {
  const pregunta = document.getElementById("pregunta").value;
  const apikey = document.getElementById("apikey").value;
  const respuestaDiv = document.getElementById("respuesta");

  if (!apikey || !pregunta) {
    respuestaDiv.innerHTML = "<p style='color:red'>Por favor, ingresa tu API Key y una pregunta válida.</p>";
    return;
  }

  respuestaDiv.innerHTML = "⏳ Consultando la IA...";

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apikey
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Eres un tutor de matemáticas claro y paciente. Explica paso a paso y en español." },
          { role: "user", content: pregunta }
        ],
        temperature: 0.4
      })
    });

    const data = await res.json();
    if (data.choices && data.choices.length > 0) {
      respuestaDiv.innerHTML = "<h3>✏️ Respuesta:</h3><p>" + data.choices[0].message.content.replace(/\n/g, "<br>") + "</p>";
    } else {
      respuestaDiv.innerHTML = "<p style='color:red'>No se recibió respuesta válida de la IA.</p>";
    }
  } catch (err) {
    respuestaDiv.innerHTML = "<p style='color:red'>❌ Error al conectar con OpenAI. Verifica tu API Key.</p>";
    console.error(err);
  }
}
