import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Añade esto para los íconos
import './App.css';
import { reproducirTexto, pausarAudio, reanudarAudio, cancelarAudio } from './utils/audioUtils';
import Home from './pages/Home';

function App() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const [audioState, setAudioState] = useState('stopped'); // 'stopped', 'playing', 'paused'

    const handleNext = () => {
        navigate('/suscription');
    };

    const handlePlay = () => {
        cancelarAudio(); // Detener cualquier audio previo
        reproducirTexto("Hola, bienvenido a nuestra aplicación. Nuestro asistente te guiará para que puedas realizar una suscripción o transferencia paso a paso. El asistente te indicará los pasos a seguir y, al mismo tiempo, podrás ver cómo se resalta la sección en donde debes realizar cada acción.");
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

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>

            <div className="container mt-5">
                <div className="card shadow">
                    <div className="card-header text-center bg-primary text-white">
                        <h1 className="mb-0">Asistente de suscripción</h1>
                    </div>
                    <div className="card-body">
                        <p>
                            Hola, bienvenido a nuestra aplicación. Nuestro asistente te guiará para que puedas realizar una suscripción o transferencia paso a paso.
                            El asistente te indicará los pasos a seguir y, al mismo tiempo, podrás ver cómo se resalta la sección en donde debes realizar cada acción.
                        </p>
                        
                        <div className="button-container d-flex justify-content-center mb-3">
                            <button className="btn btn-primary" onClick={handleNext}>Siguiente</button>
                        </div>

                        <p className="instruction-text text-center">
                            Por favor selecciona la opción que desees realizar y presiona siguiente:
                        </p>
                    </div>
                </div>
                
                {/* Nuevo contenedor para controles de audio */}
                <div className="card shadow mt-3">
                    <div className="card-body text-center">
                        <h5 className="card-title">Controles de Audio</h5>
                        <div className="d-flex justify-content-center gap-2 mt-3">
                            {audioState !== 'playing' ? (
                                <button 
                                    className="btn btn-success"
                                    onClick={handlePlay}
                                >
                                    <i className="bi bi-play-fill me-1"></i> Reproducir
                                </button>
                            ) : (
                                <button 
                                    className="btn btn-warning"
                                    onClick={handlePause}
                                >
                                    <i className="bi bi-pause-fill me-1"></i> Pausar
                                </button>
                            )}
                            
                            {audioState === 'paused' && (
                                <button 
                                    className="btn btn-success"
                                    onClick={handleResume}
                                >
                                    <i className="bi bi-arrow-repeat me-1"></i> Reanudar
                                </button>
                            )}
                            
                            <button 
                                className="btn btn-danger"
                                onClick={() => {
                                    cancelarAudio();
                                    setAudioState('stopped');
                                }}
                                disabled={audioState === 'stopped'}
                            >
                                <i className="bi bi-stop-fill me-1"></i> Detener
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;