// Función para encriptar y mostrar el resultado
function encriptar() {
    // Obtener el valor del textarea de entrada
    var textoEntrada = document.getElementById("ta_raw_text").value;

    // Mostrar el texto de entrada en el textarea de resultado
    document.getElementById("ta_result_text").value = textoEntrada;
}
