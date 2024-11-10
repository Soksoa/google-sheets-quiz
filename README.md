# Proyecto de Verificación de Respuestas en Google Sheets

Este proyecto es un script de Google Apps Script que permite realizar un pequeño cuestionario dentro de Google Sheets. Fue desarrollado para un projecto de mi insti. Responde preguntas seleccionadas al azar de una lista, verificando sus respuestas automáticamente. El proyecto también proporciona retroalimentación inmediata y mantiene un registro de la puntuación acumulada.

## Descripción del Código

El script consta de dos funciones principales:

1. **`verificarRespuesta()`**: Función que valida la respuesta del usuario y proporciona retroalimentación. También lleva un registro de la puntuación acumulada del usuario y, si la respuesta es correcta, carga una nueva pregunta.
  
2. **`actualizarPregunta()`** (función interna dentro de `verificarRespuesta`): Selecciona una pregunta al azar de un banco de preguntas en otra hoja y la presenta al usuario en la hoja del quiz. La respuesta correcta se guarda en una celda oculta para su posterior verificación.

## Estructura del Documento

El proyecto requiere dos hojas en Google Sheets:

1. **Hoja "VIP 2 - Quiz"**: 
   - **B2**: Muestra la pregunta actual.
   - **B3**: Celda donde el usuario escribe su respuesta.
   - **A4**: Muestra instrucciones y retroalimentación.
   - **B4**: Muestra un mensaje de feedback sobre si la respuesta es correcta o incorrecta.
   - **B5**: Muestra la puntuación acumulada del usuario.
   - **C2**: Celda oculta que almacena la respuesta correcta de la pregunta actual.

2. **Hoja "VIP 2 - Preguntas y Respuestas"**:
   - **Columna 1**: Contiene las preguntas del cuestionario.
   - **Columna 2**: Contiene las respuestas correspondientes.

## Funcionamiento del Script

1. **Generación de Preguntas Aleatorias**: 
   - La función `actualizarPregunta` selecciona una pregunta aleatoria de la hoja "VIP 2 - Preguntas y Respuestas" y la muestra en la celda B2 de la hoja "VIP 2 - Quiz". La respuesta correcta se almacena en la celda C2 (oculta) para compararla luego.

2. **Verificación de la Respuesta**:
   - La función `verificarRespuesta` compara la respuesta del usuario en B3 con la respuesta correcta en C2. 
   - Si la respuesta es correcta:
     - Se muestra un mensaje de "Correcto" en la celda B4, con un fondo verde.
     - La puntuación en B5 se incrementa en 1.
     - Se genera una nueva pregunta automáticamente.
   - Si la respuesta es incorrecta:
     - Se muestra un mensaje de "Incorrecto" en B4, con un fondo rojo, e invita al usuario a intentar de nuevo.

## Requisitos Previos

1. **Google Sheets**: El script debe ejecutarse en un archivo de Google Sheets con las hojas "VIP 2 - Quiz" y "VIP 2 - Preguntas y Respuestas".
2. **Permisos**: Al ejecutar el script por primera vez, Google solicitará permisos para modificar el documento. Acepta estos permisos para permitir que el script funcione correctamente.

## Cómo Usar el Script

1. Crea un nuevo archivo de Google Sheets.
2. Añade dos hojas con los nombres: "VIP 2 - Quiz" y "VIP 2 - Preguntas y Respuestas".
3. En la hoja "VIP 2 - Preguntas y Respuestas", ingresa las preguntas en la columna 1 y las respuestas en la columna 2 (empezando desde la fila 2 para mantener la primera fila como encabezado).
4. Copia el código proporcionado en el editor de Apps Script (`Extensiones > Apps Script`).
5. Guarda el script y ejecútalo.
6. Completa la celda B3 con tus respuestas y observa la retroalimentación en la celda B4.

## Ejemplo de Uso

- **B2**: Muestra la pregunta seleccionada aleatoriamente.
- **B3**: Espacio para que el usuario escriba su respuesta.
- **B4**: Indica si la respuesta es correcta o incorrecta.
- **B5**: Muestra la puntuación acumulada.

¡Listo! Con este proyecto, podrás practicar y responder preguntas directamente desde Google Sheets, obteniendo retroalimentación instantánea.
