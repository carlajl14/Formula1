//Obtener todos los pilotos
const getDrivers = async() => {
    const url = "https://api.openf1.org/v1/drivers?session_key=9102";
    const res = await fetch(url);
    const drivers = await res.json();
    console.log(drivers);
    return drivers;
}

export default getDrivers;