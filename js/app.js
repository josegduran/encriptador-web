// Función para encriptar texto usando el cifrado de César
function motorEncriptar(text, shift) {
    return text.split('').map(char => {
        // Solo cifra letras, deja los demás caracteres sin cambios
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const offset = code < 91 ? 65 : 97;
            return String.fromCharCode((code - offset + shift) % 26 + offset);
        }
        return char;
    }).join('');
}

// Función para desencriptar texto cifrado con el cifrado de César
function motorDesencriptar(text, shift) {
    return motorEncriptar(text, 26 - shift); // Desplazamiento inverso para descifrar
}

function encriptar(){
    let mensajeEntrada = prompt("Ingresa el mensaje a encriptar")
    const desplazamiento = 3;
    const mensajeEncriptado = motorEncriptar(mensajeEntrada, desplazamiento);
    console.log(mensajeEncriptado)
}

function desencriptar(){
    let mensajeEntrada = prompt("Ingresa el mensaje a desencriptar")
    const desplazamiento = 3;
    const mensajeDesencriptado = motorDesencriptar(mensajeEntrada, desplazamiento);
    console.log(mensajeDesencriptado)
}
