import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Subscription.css';
import { reproducirTexto, pausarAudio, reanudarAudio, cancelarAudio } from '../utils/audioUtils';

const Suscripcion = () => {
  const [audioState, setAudioState] = useState('stopped');
  const [fondoActivo, setFondoActivo] = useState(false);
  const audioFondo = new Audio('/audio/fondo.mp3');
  audioFondo.loop = true;

  useEffect(() => {
    reproducirTexto("Bienvenido a la sección de planes. Aquí podrás elegir entre opciones básicas, estándar o premium según tu necesidad. Usa los botones para escuchar cada plan.");
    setAudioState('playing');
  }, []);

  useEffect(() => {
    if (fondoActivo) {
      audioFondo.play();
    } else {
      audioFondo.pause();
    }
  }, [fondoActivo]);

  const handlePlay = (text) => {
    cancelarAudio();
    reproducirTexto(text);
    setAudioState('playing');
  };

  const handlePause = () => {
    pausarAudio();
    setAudioState('paused');
  };

  const handleResume = () => {
    reanudarAudio();
    setAudioState('playing');
  };

  const handleStop = () => {
    cancelarAudio();
    setAudioState('stopped');
  };

  return (
    <div>
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">Asistencia Digital</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Suscripción</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Novedades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido de Suscripción */}
      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4">Elige tu Plan Ideal</h2>
        <p className="text-center mb-5 text-muted">Nuestros planes están diseñados para brindarte la mejor asistencia digital, según tus necesidades. ¡Fácil, claro y sin complicaciones!</p>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow plan-card">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title text-center">Plan Básico</h5>
                  <p className="card-text text-center">
                    Atención en horario laboral, ayuda por correo y chat. Para quienes solo necesitan apoyo ocasional.
                  </p>
                </div>
                <div className="text-center">
                  <button className="btn btn-outline-secondary me-2" onClick={() => handlePlay("Este es el plan básico. Atención en horario laboral, ayuda por correo y chat.")}>Escuchar</button>
                  <button className="btn btn-primary mt-3">Seleccionar</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow plan-card border-primary">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title text-center">Plan Estándar</h5>
                  <p className="card-text text-center">
                    Asistencia extendida, soporte por llamada y ayuda en tiempo real con herramientas digitales.
                  </p>
                </div>
                <div className="text-center">
                  <button className="btn btn-outline-secondary me-2" onClick={() => handlePlay("Este es el plan estándar. Asistencia extendida, soporte por llamada y ayuda en tiempo real.")}>Escuchar</button>
                  <button className="btn btn-primary mt-3">Seleccionar</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow plan-card">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title text-center">Plan Premium</h5>
                  <p className="card-text text-center">
                    Soporte total 24/7, asistencia remota y acompañamiento personalizado paso a paso.
                  </p>
                </div>
                <div className="text-center">
                  <button className="btn btn-outline-secondary me-2" onClick={() => handlePlay("Este es el plan premium. Soporte total 24/7, asistencia remota y acompañamiento personalizado.")}>Escuchar</button>
                  <button className="btn btn-primary mt-3">Seleccionar</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controles de Audio */}
        <div className="text-center mt-5">
          <h5>Controles de Audio</h5>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <button className="btn btn-outline-primary" onClick={handlePause}>Pausar</button>
            <button className="btn btn-outline-success" onClick={handleResume}>Reanudar</button>
            <button className="btn btn-outline-danger" onClick={handleStop}>Detener</button>
            {audioState === 'playing' && <div className="audio-visualizer"></div>}
          </div>
          <div className="switch-sound">
            <label>Fondo Sonoro</label>
            <input type="checkbox" checked={fondoActivo} onChange={(e) => setFondoActivo(e.target.checked)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suscripcion;
