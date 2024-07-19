import React, { useEffect, useState } from 'react'
import getDrivers from '../services/getDrivers';

const useDrivers = () => {
    //State
    const [driver, setDriver] = useState([]);

    const drivers = async() => {
        const newDriver = await getDrivers();
        setDriver(newDriver);
    };

    //useEffect
    useEffect(() => {
        drivers();
    }, []);

    return [driver];
}

export default useDrivers;