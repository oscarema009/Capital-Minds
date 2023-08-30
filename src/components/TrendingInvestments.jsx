import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Cambia la URL a la del servidor de backend

function TrendingInvestments() {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    // Escuchar actualizaciones en tiempo real desde el servidor
    socket.on('investmentUpdate', (updatedInvestments) => {
      setInvestments(updatedInvestments);
    });

    // Simulación de actualizaciones en tiempo real (ficticias)
    const updateInterval = setInterval(() => {
      // Llamada al servidor Node.js para obtener datos de Yahoo Finance
      fetch('/api/yahoo-finance')
        .then((response) => response.json())
        .then((data) => {
          socket.emit('updateInvestments', data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 5000); // Actualiza cada 5 segundos

    return () => {
      clearInterval(updateInterval);
      socket.disconnect();
    };
  }, []);

  return (
    <div className="trending-investments">
      <h2>Trending</h2>
      {investments.map((investment, index) => (
        <div key={index} className="investment">
          {/* Agrega aquí la lógica para mostrar el icono */}
          <div className="info">
            <h3>{investment.name}</h3>
            <p>{investment.movement}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrendingInvestments;
