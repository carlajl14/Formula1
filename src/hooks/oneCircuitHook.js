import React, { useEffect, useState } from 'react'
import getOneCircuit from '../services/getOneCircuit';

const useCircuit = (param) => {
    //State
    const [onecircuit, setOnecircuit] = useState([]);
    const [loading, setLoading] = useState(true);

    const circuit = async() => {
        setLoading(true); // Inicia la carga
        const newCircuit = await getOneCircuit(param);
        setOnecircuit(newCircuit);
        setLoading(false); // Finaliza la carga
    };

    //useEffect
    useEffect(() => {
        circuit();
    }, [param]);

    return [onecircuit, loading];
}

export default useCircuit;