import React from 'react';
import '../css/Loader.css'; // Importa el CSS para la animación de carga

const Loader = () => {
    return (
        <div className="loader">
            {/* Puedes agregar un spinner o cualquier animación aquí */}
            <div className="spinner"></div>
        </div>
    );
};

export default Loader;