// src/utils/audioUtils.js

let currentSpeech = null;

export function reproducirTexto(texto) {
    cancelarAudio(); // Detener cualquier reproducción anterior
    currentSpeech = new SpeechSynthesisUtterance(texto);
    currentSpeech.lang = 'es-ES';
    window.speechSynthesis.speak(currentSpeech);
    return currentSpeech;
}

export function pausarAudio() {
    if (window.speechSynthesis) {
        window.speechSynthesis.pause();
    }
}

export function reanudarAudio() {
    if (window.speechSynthesis) {
        window.speechSynthesis.resume();
    }
}

export function cancelarAudio() {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    currentSpeech = null;
}