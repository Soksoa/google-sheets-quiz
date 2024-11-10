function verificarRespuesta() {
  const hojaQuiz = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("VIP 2 - Quiz");
  
  function actualizarPregunta() {
  const hojaPreguntas = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("VIP 2 - Preguntas y Respuestas")

  const totalPreguntas = hojaPreguntas.getLastRow() - 1; // Asumiendo que la primera fila es el encabezado
  console.log("Total de preguntas en el banco:", totalPreguntas);

  // Elegir una pregunta aleatoria
  const indicePregunta = Math.floor(Math.random() * totalPreguntas) + 2; // +2 para evitar el encabezado y empezar en fila 2
  console.log("Índice de pregunta seleccionada:", indicePregunta);

  const pregunta = hojaPreguntas.getRange(indicePregunta, 1).getValue();
  const respuestaCorrecta = hojaPreguntas.getRange(indicePregunta, 2).getValue();

  hojaQuiz.getRange("B2").setValue(pregunta);
  hojaQuiz.getRange("B3").setValue(""); // Limpiar la respuesta del usuario
  hojaQuiz.getRange("A4").setValue("Escribe tu respuesta en la celda B3.");
  hojaQuiz.getRange("A4").setBackground("#00ac47").setFontColor("white");

  // Guardar la respuesta correcta en una celda oculta
  hojaQuiz.getRange("C2").setValue(respuestaCorrecta);

 }

  // Obtener la respuesta correcta y la respuesta del usuario
  const respuestaCorrecta = hojaQuiz.getRange("C2").getValue(); // Celda oculta
  const respuestaUsuario = hojaQuiz.getRange("B3").getValue();
    
  // Obtener la celda de feedback y de puntuación acumulada
  const celdaFeedback = hojaQuiz.getRange("B4");
  const celdaPuntuacion = hojaQuiz.getRange("B5");
  let puntuacionActual = celdaPuntuacion.getValue() || 0;

  console.log("Puntuación actual antes de verificar:", puntuacionActual);

  // Validar la respuesta del usuario
  if (respuestaUsuario.toString().trim().toLowerCase() === respuestaCorrecta.toString().trim().toLowerCase()) {
    console.log("Respuesta correcta. Incrementando puntuación.");
    celdaFeedback.setValue("Correcto, ¡bien hecho!").setBackground("green").setFontColor("white");
    puntuacionActual += 1;  // Sumar punto si es correcto
    celdaPuntuacion.setValue(puntuacionActual);
    
    console.log("Nueva puntuación:", puntuacionActual);

    // Cargar una nueva pregunta
    actualizarPregunta();
  } else {
    console.log("Respuesta incorrecta. Solicitando reintento.");
    celdaFeedback.setValue("Incorrecto, inténtalo de nuevo.").setBackground("red").setFontColor("white");
  }
}
