import React, { useEffect, useState } from 'react'
import getCircuits from '../services/getCircuits';

const useCircuits = () => {
    //State
    const [circuit, setCircuit] = useState([]);
    const [loading, setLoading] = useState(true);

    const circuits = async() => {
        setLoading(true);
        const newCircuit = await getCircuits();
        setCircuit(newCircuit);
        setLoading(false);
    };

    //useEffect
    useEffect(() => {
        circuits();
    }, []);

    return [circuit, loading];
}

export default useCircuits;