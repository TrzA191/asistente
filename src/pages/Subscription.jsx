// src/pages/Subscription.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Subscription.css"; // Archivo CSS para estilos


const Subscription = () => {
    const plans = [

        {
            name: "Plan Básico",
            price: "$9.99/mes",
            features: [
                "✔️ Soporte técnico remoto (hasta 3 consultas al mes)",
                "✔️ Ayuda con configuración de dispositivos",
                "✔️ Guías paso a paso en video y texto",
            ],
        },
        {
            name: "Plan Intermedio",
            price: "$19.99/mes",
            features: [
                "✔️ Asistencia mensual (1 hora por semana)",
                "✔️ Soporte técnico remoto ilimitado",
                "✔️ Capacitación en apps esenciales",
                "✔️ Seguridad digital y protección contra fraudes",
            ],
        },
        {
            name: "Plan Premium",
            price: "$29.99/mes",
            features: [
                "✔️ Acceso ilimitado a soporte técnico",
                "✔️ Sesiones de capacitación personalizadas",
                "✔️ Videollamadas con un asistente especializado",
                "✔️ Prioridad en atención",
            ],
        },

    ];


    return (
        <div className="subscription-container">
            <h1>📲 Asistencia Digital Personalizada</h1>
            <p>
                Suscríbete a nuestro servicio y obtén ayuda experta para utilizar la tecnología con confianza.
            </p>

            <div className="plans">
                {plans.map((plan, index) => (
                    <div key={index} className="plan-card">
                        <h2>{plan.name}</h2>
                        <h3>{plan.price}</h3>
                        <ul>
                            {plan.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <button className="subscribe-button">Suscribirse</button>
                    </div>
                ))}
            </div>

            <Link to="/">🔙 Volver al Inicio</Link>
        </div>
    );
};

export default Subscription;
