// Función para encriptar el texto
function encriptar() {
    var inputOriginal = document.getElementById("inp_RawText").value;
    var outputResult = "";

    // Algoritmo para codificar el texto
    for (var i = 0; i < inputOriginal.length; i++) {
        var letra = inputOriginal[i];
        switch (letra) {
            case "e":
                outputResult += "enter";
                break;
            case "i":
                outputResult += "imes";
                break;
            case "a":
                outputResult += "ai";
                break;
            case "o":
                outputResult += "ober";
                break;
            case "u":
                outputResult += "ufat";
                break;
            default:
                outputResult += letra;
        }
    }

    // Mostrar el resultado en el text area information
    document.getElementById("inp_RawText").value = outputResult;

    // Debugging
    console.log("Input: " + inputOriginal);
    console.log("Output: " + outputResult);
}

// Función para desencriptar el texto
function desencriptar() {
    var inputEncriptado = document.getElementById("inp_RawText").value;
    var outputResult = "";

    // Iterar sobre el texto encriptado
    for (var i = 0; i < inputEncriptado.length;) {
        // Comprobar si alguna palabra encriptada coincide
        if (inputEncriptado.substr(i, 5) === "enter") {
            outputResult += "e";
            i += 5; // Avanzar el índice al final de la palabra encriptada
        } else if (inputEncriptado.substr(i, 5) === "imes") {
            outputResult += "i";
            i += 5;
        } else if (inputEncriptado.substr(i, 2) === "ai") {
            outputResult += "a";
            i += 2;
        } else if (inputEncriptado.substr(i, 4) === "ober") {
            outputResult += "o";
            i += 4;
        } else if (inputEncriptado.substr(i, 4) === "ufat") {
            outputResult += "u";
            i += 4;
        } else {
            outputResult += inputEncriptado[i]; // Si no coincide, simplemente añade la letra actual
            i++; // Avanzar al siguiente carácter
        }
    }

    document.getElementById("inp_RawText").value = outputResult;

    // Debugging
    console.log("Input: " + inputEncriptado);
    console.log("Output: " + outputResult);
}

// Función para copiar el texto del 'text area information'
function copiarTexto() {
    var textarea = document.getElementById("inp_RawText");
    textarea.select();
    document.execCommand("copy");
    alert("¡Texto copiado!");
}