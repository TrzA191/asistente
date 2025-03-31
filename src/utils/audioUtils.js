// src/utils/audioUtils.js

export function reproducirTexto(texto) {
    const speech = new SpeechSynthesisUtterance(texto);
    speech.lang = 'es-ES'; // Español de España, puedes cambiarlo según necesites
    speechSynthesis.speak(speech);
}
