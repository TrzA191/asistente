import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { reproducirTexto } from './utils/audioUtils';
import Home from './pages/Home';

function App() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate(); // Hook para navegar entre rutas

    const handleNext = () => {
        navigate('/suscription'); // Navegar a la página Home
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
            {/*
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            */}
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
                        {/**/}
                        <div className="button-container d-flex justify-content-center mb-3">
                            {/*<button className="btn btn-outline-secondary me-3">Atrás</button>*/}
                            <button className="btn btn-primary" onClick={handleNext}>Siguiente</button>
                        </div>

                        <p className="instruction-text text-center">
                            Por favor selecciona la opción que desees realizar y presiona siguiente:
                        </p>
                    </div>
                </div>
                
                <button onClick={() => reproducirTexto("Hola, bienvenido a nuestra aplicación...")}>
                    Reproducir Audio
                </button>
            </div>
        </>
    );
}

export default App;
